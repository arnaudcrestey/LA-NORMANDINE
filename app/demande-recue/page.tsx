import Link from "next/link";

export const metadata = {
  title: "Demande reçue | La Normandine",
  description:
    "Confirmation de réception de votre demande de visite pour La Normandine.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VisitConfirmationPage() {
  return (
    <main className="visit-confirmation">
      <div className="visit-confirmation-frame" aria-hidden="true" />

      <section
        className="visit-confirmation-card"
        aria-labelledby="confirmation-title"
      >
        <div className="visit-confirmation-monogram" aria-hidden="true">
          LN
        </div>

        <p className="visit-confirmation-eyebrow">
          Votre demande a bien été envoyée
        </p>

        <h1 id="confirmation-title">
          Merci pour votre
          <br />
          intérêt.
        </h1>

        <p className="visit-confirmation-lead">
          Nous avons bien reçu votre demande de visite pour La Normandine.
        </p>
        <div className="visit-confirmation-note">
          <span>Confirmation</span>
          <p>
            Un accusé de réception vient également d’être envoyé à l’adresse
            e-mail indiquée dans le formulaire.
          </p>
        </div>

        <Link className="visit-confirmation-link" href="/">
          Retour à La Normandine
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <p className="visit-confirmation-location">
        Viessoix — Valdallière, Normandie
      </p>
    </main>
  );
}
