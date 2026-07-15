import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | La Normandine",
  description:
    "Politique de confidentialité et traitement des données personnelles du site La Normandine.",
  alternates: {
    canonical: "/confidentialite",
  },
};

export default function ConfidentialitePage() {
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
        <p className="eyebrow">Données personnelles</p>

        <h1>
          Politique de
          <br />
          confidentialité
        </h1>

        <p className="legal-updated">
          Dernière mise à jour : 15 juillet 2026
        </p>

        <section>
          <h2>1. Responsable du traitement</h2>

          <p>
            Le responsable du traitement des données personnelles recueillies
            sur le site La Normandine est :
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
          <h2>2. Données susceptibles d’être collectées</h2>

          <p>
            Lorsque vous utilisez le formulaire de prise de contact, les
            informations suivantes peuvent être transmises :
          </p>

          <ul>
            <li>votre prénom et votre nom ;</li>
            <li>votre adresse e-mail ;</li>
            <li>votre numéro de téléphone, lorsqu’il est renseigné ;</li>
            <li>la nature de votre projet ;</li>
            <li>le délai envisagé ;</li>
            <li>le contenu de votre message.</li>
          </ul>

          <p>
            Seules les informations nécessaires à la compréhension et au
            traitement de votre demande sont recueillies.
          </p>
        </section>

        <section>
          <h2>3. Finalité du traitement</h2>

          <p>
            Les informations transmises sont utilisées exclusivement pour :
          </p>

          <ul>
            <li>prendre connaissance de votre demande ;</li>
            <li>vous répondre par e-mail ou par téléphone si vous l’avez indiqué ;</li>
            <li>échanger avec vous au sujet de La Normandine ;</li>
            <li>organiser, le cas échéant, une visite de la propriété.</li>
          </ul>

          <p>
            Elles ne sont pas utilisées à des fins publicitaires, commerciales
            ou de prospection sans rapport avec votre demande.
          </p>

          <p>
            Elles ne sont ni revendues ni cédées à des tiers.
          </p>
        </section>

        <section>
          <h2>4. Base légale</h2>

          <p>
            Le traitement repose sur les démarches précontractuelles réalisées
            à votre demande lorsque vous sollicitez des informations ou une
            visite concernant la propriété.
          </p>
        </section>

        <section>
          <h2>5. Transmission et stockage</h2>

          <p>
            Les informations saisies dans le formulaire sont uniquement
            transmises à l’adresse électronique :
          </p>

          <p>
            <a href="mailto:demande@arnaudcrestey.com">
              <strong>demande@arnaudcrestey.com</strong>
            </a>
          </p>

          <p>
            Elles ne sont pas enregistrées dans une base de données liée au
            site et ne sont pas utilisées pour constituer un fichier de
            prospects.
          </p>

          <p>
            Elles restent temporairement présentes dans la messagerie le temps
            nécessaire pour lire la demande, y répondre et organiser
            éventuellement une visite.
          </p>
        </section>

        <section>
          <h2>6. Durée de conservation</h2>

          <p>
            Les messages reçus sont conservés uniquement pendant le temps
            nécessaire au traitement de la demande et aux échanges directement
            liés à celle-ci.
          </p>

          <p>
            Ils sont supprimés lorsqu’ils ne sont plus utiles ou lorsque la
            personne concernée demande leur effacement, sauf obligation légale
            nécessitant une conservation temporaire.
          </p>
        </section>

        <section>
          <h2>7. Destinataires des données</h2>

          <p>
            Les données sont destinées exclusivement à Arnaud Crestey, chargé
            de répondre aux demandes concernant La Normandine.
          </p>

          <p>
            Elles peuvent transiter par les services techniques nécessaires à
            l’hébergement du site et à l’envoi du message, uniquement pour
            permettre le fonctionnement du formulaire.
          </p>
        </section>

        <section>
          <h2>8. Vos droits</h2>

          <p>
            Vous pouvez demander l’accès aux données vous concernant, leur
            rectification, leur effacement ou la limitation de leur traitement.
          </p>

          <p>
            Vous pouvez également vous opposer à leur traitement lorsque les
            conditions prévues par la réglementation sont réunies.
          </p>

          <p>
            Pour exercer vos droits, vous pouvez écrire à :
          </p>

          <p>
            <a href="mailto:demande@arnaudcrestey.com">
              <strong>demande@arnaudcrestey.com</strong>
            </a>
          </p>

          <p>
            Une réponse vous sera apportée dans les délais prévus par la
            réglementation applicable.
          </p>

          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez
            également adresser une réclamation à la Commission nationale de
            l’informatique et des libertés, la CNIL.
          </p>
        </section>

        <section>
          <h2>9. Sécurité</h2>

          <p>
            Des mesures raisonnables sont mises en œuvre afin de limiter les
            risques de perte, d’accès non autorisé, de modification ou de
            divulgation des informations transmises.
          </p>

          <p>
            Il est recommandé de ne communiquer dans le formulaire que les
            informations utiles à votre demande.
          </p>
        </section>

        <section>
          <h2>10. Cookies et statistiques</h2>

          <p>
            Le site La Normandine n’utilise aucun outil de mesure d’audience,
            aucun dispositif publicitaire et aucun système de suivi statistique
            des visiteurs.
          </p>

          <p>
            Aucun cookie publicitaire ou de suivi n’est déposé par le site.
          </p>

          <p>
            Des éléments strictement techniques peuvent néanmoins être utilisés
            par l’hébergeur lorsqu’ils sont indispensables au fonctionnement,
            à la sécurité ou à la disponibilité du site.
          </p>
        </section>

        <section>
          <h2>11. Évolution de la politique</h2>

          <p>
            La présente politique pourra être mise à jour si le fonctionnement
            du site, du formulaire ou des services utilisés venait à évoluer.
          </p>

          <p>
            La date de la dernière mise à jour est indiquée en haut de cette
            page.
          </p>
        </section>
      </article>

      <footer className="legal-footer">
        <Link href="/">← Retour à La Normandine</Link>
      </footer>
    </main>
  );
}