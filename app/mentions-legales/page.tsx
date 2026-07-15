import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | La Normandine",
  description: "Mentions légales du site La Normandine.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            LN
          </span>
          <span>La Normandine</span>
        </Link>

        <Link href="/" className="text-link">
          Retour au site <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <article className="legal-content">
        <p className="eyebrow">Informations du site</p>

        <h1>Mentions légales</h1>

        <p className="legal-updated">
          Dernière mise à jour : 15 juillet 2026
        </p>

        <section>
          <h2>1. Éditeur du site</h2>

          <p>
            Le site La Normandine est édité par :
          </p>

          <p>
            <strong>Arnaud Crestey</strong>
            <br />
            Viessoix
            <br />
            14410 Valdallière
            <br />
            France
            <br />
            Adresse e-mail :{" "}
            <a href="mailto:demande@arnaudcrestey.com">
              demande@arnaudcrestey.com
            </a>
          </p>
        </section>

        <section>
          <h2>2. Direction de la publication</h2>

          <p>
            Le directeur de la publication est <strong>Arnaud Crestey</strong>.
          </p>
        </section>

        <section>
          <h2>3. Hébergement</h2>

          <p>
            Le site est hébergé par :
          </p>

          <p>
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Avenue #4133
            <br />
            Covina, CA 91723
            <br />
            États-Unis
          </p>
        </section>

        <section>
          <h2>4. Objet du site</h2>

          <p>
            Le site La Normandine a pour objet de présenter une propriété
            proposée à la vente directement par son propriétaire.
          </p>

          <p>
            Il permet aux visiteurs de découvrir le bien, ses caractéristiques,
            son environnement et ses possibilités, puis de prendre contact afin
            d’obtenir des renseignements complémentaires ou d’organiser une
            visite.
          </p>
        </section>

        <section>
          <h2>5. Informations présentées</h2>

          <p>
            Les informations, photographies, vidéos, surfaces, descriptions et
            caractéristiques présentées sur le site sont communiquées à titre
            informatif, selon les éléments disponibles au moment de leur
            publication.
          </p>

          <p>
            Elles ne constituent pas une offre contractuelle et ne remplacent
            pas les documents, diagnostics, vérifications techniques,
            administratives ou juridiques nécessaires dans le cadre d’une
            acquisition immobilière.
          </p>

          <p>
            Les possibilités d’aménagement, de construction ou d’évolution
            évoquées sur le site doivent être appréciées en fonction du projet
            de chaque acquéreur et des règles applicables.
          </p>
        </section>

        <section>
          <h2>6. Propriété intellectuelle</h2>

          <p>
            Sauf mention contraire, l’ensemble des contenus présents sur le
            site, notamment les textes, photographies, vidéos, éléments
            graphiques, logos, compositions et la structure générale du site,
            appartient à leur auteur ou est utilisé avec autorisation.
          </p>

          <p>
            Toute reproduction, représentation, adaptation, diffusion ou
            réutilisation, totale ou partielle, sans autorisation préalable
            écrite est interdite, sauf dans les cas expressément prévus par la
            loi.
          </p>
        </section>

        <section>
          <h2>7. Responsabilité</h2>

          <p>
            L’éditeur s’efforce de proposer des informations exactes et
            régulièrement actualisées. Il ne peut toutefois garantir l’absence
            totale d’erreur, d’omission ou d’indisponibilité temporaire du site.
          </p>

          <p>
            Le visiteur reste responsable de l’utilisation qu’il fait des
            informations présentées et des vérifications qu’il souhaite
            effectuer avant toute décision.
          </p>
        </section>

        <section>
          <h2>8. Droit applicable</h2>

          <p>
            Le site La Normandine et les présentes mentions légales sont soumis
            au droit français.
          </p>
        </section>
      </article>

      <footer className="legal-footer">
        <Link href="/">← Retour à La Normandine</Link>
      </footer>
    </main>
  );
}