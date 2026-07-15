import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type VisitPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  timeline?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
};

const attempts = new Map<string, number[]>();

const MAX_ATTEMPTS = 3;
const WINDOW_MS = 60 * 60 * 1000;

function text(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] || character,
  );
}

function isRateLimited(key: string) {
  const now = Date.now();

  const recentAttempts = (attempts.get(key) || []).filter(
    (time) => now - time < WINDOW_MS,
  );

  if (recentAttempts.length >= MAX_ATTEMPTS) {
    return true;
  }

  recentAttempts.push(now);
  attempts.set(key, recentAttempts);

  return false;
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { message: "Format de demande non accepté." },
      { status: 415 },
    );
  }

  let payload: VisitPayload;

  try {
    payload = (await request.json()) as VisitPayload;
  } catch {
    return NextResponse.json(
      { message: "Le contenu de la demande est invalide." },
      { status: 400 },
    );
  }

  if (text(payload.website, 200)) {
    return NextResponse.json(
      {
        message:
          "Votre demande a été refusée par la protection anti-spam.",
      },
      { status: 400 },
    );
  }

  const firstName = text(payload.firstName, 80);
  const lastName = text(payload.lastName, 80);
  const email = text(payload.email, 160).toLowerCase();
  const phone = text(payload.phone, 30);
  const projectType = text(payload.projectType, 100);
  const timeline = text(payload.timeline, 100);
  const message = text(payload.message, 2000);
  const consent = payload.consent === "yes";

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (
    firstName.length < 2 ||
    lastName.length < 2 ||
    !emailIsValid ||
    !projectType ||
    !timeline ||
    message.length < 20 ||
    !consent
  ) {
    return NextResponse.json(
      {
        message:
          "Veuillez vérifier les champs obligatoires et votre consentement.",
      },
      { status: 400 },
    );
  }

  const forwardedFor = request.headers
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim();

  const rateKey = forwardedFor || email;

  if (isRateLimited(rateKey)) {
    return NextResponse.json(
      {
        message:
          "Trop de demandes ont été effectuées. Merci de réessayer dans une heure.",
      },
      { status: 429 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const recipient = process.env.VISIT_RECIPIENT_EMAIL;

  if (
    !smtpHost ||
    !smtpUser ||
    !smtpPassword ||
    !recipient ||
    Number.isNaN(smtpPort)
  ) {
    console.error("Configuration SMTP Hostinger incomplète.");

    return NextResponse.json(
      {
        message:
          "Le service d’envoi n’est pas encore activé. Votre demande n’a pas été transmise.",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  const safeFirstName = escapeHtml(firstName);
  const safeLastName = escapeHtml(lastName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Non renseigné");
  const safeProjectType = escapeHtml(projectType);
  const safeTimeline = escapeHtml(timeline);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  try {
    await transporter.sendMail({
      from: `"La Normandine" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `Demande de visite — ${firstName} ${lastName}`,
      text: [
        "Nouvelle demande de visite — La Normandine",
        "",
        `Prénom : ${firstName}`,
        `Nom : ${lastName}`,
        `E-mail : ${email}`,
        `Téléphone : ${phone || "Non renseigné"}`,
        `Nature du projet : ${projectType}`,
        `Délai envisagé : ${timeline}`,
        "",
        "Message :",
        message,
        "",
        "Consentement au traitement de cette demande : oui.",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #20231f; line-height: 1.6;">
          <h1 style="color: #24372d;">Nouvelle demande de visite</h1>

          <p>
            Une nouvelle demande a été envoyée depuis le site de
            <strong>La Normandine</strong>.
          </p>

          <hr style="border: 0; border-top: 1px solid #d8cdbd; margin: 24px 0;" />

          <p><strong>Prénom :</strong> ${safeFirstName}</p>
          <p><strong>Nom :</strong> ${safeLastName}</p>
          <p><strong>E-mail :</strong> ${safeEmail}</p>
          <p><strong>Téléphone :</strong> ${safePhone}</p>
          <p><strong>Nature du projet :</strong> ${safeProjectType}</p>
          <p><strong>Délai envisagé :</strong> ${safeTimeline}</p>

          <h2 style="margin-top: 28px; color: #24372d;">Message</h2>

          <p>${safeMessage}</p>

          <hr style="border: 0; border-top: 1px solid #d8cdbd; margin: 24px 0;" />

          <p style="font-size: 12px; color: #715844;">
            Consentement au traitement de cette demande : oui.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      message:
        "Votre demande a bien été transmise. Les propriétaires pourront revenir vers vous pour convenir d’un échange.",
    });
  } catch (error) {
    console.error("Erreur d’envoi SMTP Hostinger :", error);

    return NextResponse.json(
      {
        message:
          "Le service d’envoi est momentanément indisponible. Votre demande n’a pas été transmise.",
      },
      { status: 502 },
    );
  }
}