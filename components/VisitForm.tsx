"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Status = {
  type: "idle" | "loading" | "error";
  message?: string;
};

type VisitResponse = {
  success?: boolean;
  message?: string;
  redirectTo?: string;
};

export function VisitForm() {
  const router = useRouter();

  const [status, setStatus] = useState<Status>({
    type: "idle",
  });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setStatus({
      type: "loading",
      message: "Transmission de votre demande…",
    });

    const body = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/visite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = (await response.json()) as VisitResponse;

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "La demande n’a pas pu être transmise.",
        );
      }

      form.reset();

      router.replace(result.redirectTo || "/demande-recue");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "La demande n’a pas pu être transmise.",
      });
    }
  }

  return (
    <form className="visit-form" onSubmit={submit} noValidate>
      <div className="form-grid two-columns">
        <label>
          <span>
            Prénom <b aria-hidden="true">*</b>
          </span>

          <input
            name="firstName"
            autoComplete="given-name"
            required
            minLength={2}
            maxLength={80}
          />
        </label>

        <label>
          <span>
            Nom <b aria-hidden="true">*</b>
          </span>

          <input
            name="lastName"
            autoComplete="family-name"
            required
            minLength={2}
            maxLength={80}
          />
        </label>
      </div>

      <div className="form-grid two-columns">
        <label>
          <span>
            Adresse e-mail <b aria-hidden="true">*</b>
          </span>

          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={160}
          />
        </label>

        <label>
          <span>
            Téléphone <small>facultatif</small>
          </span>

          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
          />
        </label>
      </div>

      <div className="form-grid two-columns">
        <label>
          <span>
            Nature du projet <b aria-hidden="true">*</b>
          </span>

          <select name="projectType" required defaultValue="">
            <option value="" disabled>
              Sélectionner
            </option>

            <option>Résidence principale</option>
            <option>Projet familial ou intergénérationnel</option>
            <option>Habitation et activité</option>
            <option>Accueil ou hébergement</option>
            <option>Autre projet</option>
          </select>
        </label>

        <label>
          <span>
            Délai envisagé <b aria-hidden="true">*</b>
          </span>

          <select name="timeline" required defaultValue="">
            <option value="" disabled>
              Sélectionner
            </option>

            <option>Dans les 3 mois</option>
            <option>Dans les 3 à 6 mois</option>
            <option>Dans les 6 à 12 mois</option>
            <option>Projet à plus long terme</option>
            <option>À préciser</option>
          </select>
        </label>
      </div>

      <label>
        <span>
          Votre message <b aria-hidden="true">*</b>
        </span>

        <textarea
          name="message"
          rows={6}
          required
          minLength={20}
          maxLength={2000}
          placeholder="Présentez brièvement votre projet, vos questions et les périodes qui pourraient vous convenir."
        />
      </label>

      <label className="honeypot" aria-hidden="true">
        Site internet

        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <label className="consent-row">
        <input
          type="checkbox"
          name="consent"
          value="yes"
          required
        />

        <span>
          J’accepte que mes informations soient utilisées uniquement pour
          répondre à ma demande et organiser un éventuel échange.{" "}
          <b aria-hidden="true">*</b>
        </span>
      </label>

      <div className="form-submit-row">
        <button
          className="button button-copper"
          type="submit"
          disabled={status.type === "loading"}
        >
          {status.type === "loading"
            ? "Transmission…"
            : "Envoyer ma demande"}
        </button>

        <p className="form-note">
          Les champs marqués d’un * sont obligatoires.
        </p>
      </div>

      <p
        className={`form-status ${status.type}`}
        role="status"
        aria-live="polite"
      >
        {status.message}
      </p>
    </form>
  );
}          placeholder="Présentez brièvement votre projet, vos questions et les périodes qui pourraient vous convenir."
        />
      </label>
      <label className="honeypot" aria-hidden="true">
        Site internet
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent-row">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          J’accepte que mes informations soient utilisées uniquement pour répondre à ma demande et organiser un éventuel échange. <b aria-hidden="true">*</b>
        </span>
      </label>
      <div className="form-submit-row">
        <button className="button button-copper" type="submit" disabled={status.type === "loading"}>
          {status.type === "loading" ? "Transmission…" : "Envoyer ma demande"}
        </button>
        <p className="form-note">Les champs marqués d’un * sont obligatoires.</p>
      </div>
      <p className={`form-status ${status.type}`} role="status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
