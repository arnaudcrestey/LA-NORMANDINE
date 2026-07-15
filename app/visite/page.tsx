import Image from "next/image";
import { Gallery } from "@/components/Gallery";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { VisitForm } from "@/components/VisitForm";
import {
  confirmations,
  domainSpaces,
  essentials,
  pendingInformation,
  projectIdeas,
  property,
} from "@/content/property";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: "La Normandine — propriété à vendre à Viessoix",
    description: "Propriété en vente directe réunissant deux habitations, des dépendances et environ deux hectares de terrain arboré à Viessoix — Valdallière.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/visite`,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/media/la-normandine-facade.jpg`,
    datePosted: "2026-07-12",
    offers: {
      "@type": "Offer",
      price: 560000,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    itemOffered: {
      "@type": "House",
      name: "La Normandine",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Route du Coisel",
        addressLocality: "Viessoix — Valdallière",
        addressRegion: "Normandie",
        addressCountry: "FR",
      },
    },
  };

  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      
      <div id="domaine" className="site-shell">
        <SiteHeader />
        <main id="contenu">
          <section className="property-hero" aria-labelledby="property-title">
            <div className="property-hero-image">
              <Image
                src="/media/la-normandine-facade.jpg"
                alt="Façade en pierre de La Normandine entourée de végétation et de pelouse."
                fill
                sizes="100vw"
                className="object-cover"
                quality={92}
                priority
              />
              <div className="property-hero-shade" />
            </div>
            <div className="property-hero-content">
              <p className="eyebrow light">Propriété à vendre · Vente entre particulier</p>
              <h2 id="property-title">La Normandine</h2>
              <p className="hero-positioning">Habiter, recevoir, entreprendre.<br />Un même domaine pour imaginer la suite.</p>
              <div className="hero-actions">
                <a className="button button-ivory" href="#le-lieu">Découvrir la propriété</a>
                <a className="button button-outline" href="#visite">Demander une visite</a>
              </div>
            </div>
            <div className="hero-details">
              <p><span>Localisation</span>{property.shortLocation}</p>
              <p><span>Prix de vente</span>{property.price}</p>
            </div>
          </section>

          <section
  id="le-lieu"
  className="editorial-intro section-pad"
  aria-labelledby="intro-title"
>
  <div className="section-marker">
    <span>01</span>
    <span>L’esprit du lieu</span>
  </div>

  <div className="intro-copy">
    <p className="eyebrow">Un lieu aux multiples possibilités</p>

    <h2 id="intro-title">
      Plus qu’une maison,
      <br />
      un cadre pour plusieurs vies.
    </h2>
  </div>

  <div className="intro-body">
    <p className="lead">
      La Normandine réunit une maison principale, une seconde habitation, des
      dépendances et près de deux hectares de terrain arboré. Un ensemble rare, où les bâtiments, les espaces et la nature composent un même lieu de vie.
    </p>

    <p>
      Vie de famille, accueil de proches ou nouveau projet de vie… Chacun
      pourra y voir des possibilités différentes. Sans jamais imposer un usage,
      La Normandine laisse simplement la liberté d’imaginer le sien.
    </p>
  </div>
</section>

          <section className="domain-section section-pad" id="le-domaine" aria-labelledby="domain-title">
            <div className="domain-heading">
              <div className="section-marker"><span>02</span><span>Le domaine</span></div>
              <div>
                <p className="eyebrow">Des espaces distincts</p>
                <h2 id="domain-title">Des compositions<br />qui se complètent naturellement.</h2>
              </div>
            </div>
            <div className="domain-list">
              {domainSpaces.map((space) => (
                <article key={space.index}>
                  <span>{space.index}</span>
                  <h3>{space.title}</h3>
                  <p>{space.text}</p>
                </article>
              ))}
            </div>
            <div className="domain-equipment-band">
              <p>Deux accès indépendants</p><i aria-hidden="true" />
              <p>Portails électriques &amp; visiophonie</p><i aria-hidden="true" />
              <p>Maisons raccordées à la fibre</p><i aria-hidden="true" />
              <p>Vidéosurveillance</p>
            </div>
          </section>

          <section className="house-section" id="maison-principale" aria-labelledby="main-house-title">
            <div className="house-image main-house-image">
              <Image src="/media/la-normandine-salon.jpg" alt="Salon vitré et lumineux ouvert sur le jardin de La Normandine." fill sizes="(max-width: 900px) 100vw, 58vw" className="object-cover" quality={90} />
              <p className="vertical-label">Maison principale · Environ 180 m²</p>
            </div>
            <div className="house-copy">
              <div className="section-marker"><span>03</span><span>La maison principale</span></div>
              <p className="eyebrow">Lumière &amp; continuité</p>
              <h2 id="main-house-title">Des volumes ouverts sur le parc.</h2>
              <p className="lead">Le rez-de-chaussée s’organise autour d’un vaste salon lumineux, d’une salle à manger ouverte sur la terrasse au sud, d’une cuisine équipée ainsi qu'un espace bar.</p>
              <p>Les grandes ouvertures accompagnent le regard vers les extérieurs. Aux niveaux supérieurs, 5 chambres, espaces privatifs et salon central permettent de préserver différentes manières d’habiter.</p>
              <dl className="detail-list">
                <div><dt>Chauffage</dt><dd>Géothermie installée en 2021</dd></div>
                <div><dt>Huisseries</dt><dd>Double vitrage remplacé en 2024</dd></div>
                <div><dt>Performance</dt><dd>Nouveau DPE en cours de réalisation</dd></div>
              </dl>
            </div>
          </section>

          <section className="second-house-section section-pad" aria-labelledby="second-house-title">
            <div className="second-house-copy">
              <div className="section-marker"><span>04</span><span>La seconde maison</span></div>
              <p className="eyebrow">Une unité indépendante</p>
              <h2 id="second-house-title">Accueillir,<br />sans renoncer à l’autonomie.</h2>
              <p className="lead">Avec environ 60 m², une terrasse exposée plein sud et son espace extérieur privatif, la seconde maison fonctionne indépendamment de l’habitation principale grâce à son propre accès.</p>
              <p>Elle peut accueillir des proches, rapprocher plusieurs générations ou encore créer un espace dédié à une activité professionnelle.</p>
              <div className="second-house-facts">
                <p><span>≈ 60 m²</span>surface annoncée</p>
                <p><span>2 chambres</span>à l’étage</p>
                <p><span>2023</span>installation du poêle à bois</p>
              </div>
            </div>
            <figure className="second-house-figure">
              <div className="second-house-image">
                <Image src="/media/la-normandine-seconde-maison.jpg" alt="Façade en pierre de la seconde maison indépendante avec deux fenêtres de toit." fill sizes="(max-width: 900px) 86vw, 36vw" className="object-cover" quality={90} />
              </div>
              <figcaption>La seconde habitation · photographie de définition limitée</figcaption>
            </figure>
          </section>

          <section className="comfort-section" aria-labelledby="comfort-title">
  <div className="comfort-header">
    <div className="section-marker light-marker">
      <span>05</span>
      <span>Confort &amp; bien-être</span>
    </div>

    <div className="comfort-heading">
      <p className="eyebrow light">Profiter pleinement du domaine</p>

      <h2 id="comfort-title">
        Des espaces pour se retrouver.
        <br />
        D’autres pour prendre le temps.
      </h2>
    </div>

    <p className="comfort-description">
      La terrasse s’ouvre sur le jardin et prolonge naturellement les repas à
      l’extérieur. La salle de sport et l’espace bien-être offrent d’autres
      façons de profiter du lieu, selon les moments et les envies.
    </p>
  </div>

  <div className="comfort-gallery">
    <figure className="comfort-main-image">
      <Image
        src="/media/la-normandine-terrasse.jpg"
        alt="Terrasse en bois avec table dressée face au jardin arboré."
        fill
        sizes="(max-width: 800px) 100vw, 72vw"
        className="object-cover"
        quality={92}
      />
      <figcaption>La terrasse ouverte sur le jardin</figcaption>
    </figure>

    <figure className="comfort-secondary-image">
      <Image
        src="/media/la-normandine-bien-etre.jpg"
        alt="Jacuzzi installé dans un espace couvert en bois."
        fill
        sizes="(max-width: 800px) 70vw, 28vw"
        className="object-cover"
        quality={90}
      />
      <figcaption>L’espace bien-être</figcaption>
    </figure>
  </div>
</section>

          <section className="gallery-section section-pad" id="galerie" aria-labelledby="gallery-title">
            <div className="gallery-heading">
              <div className="section-marker"><span>06</span><span>Galerie</span></div>
              <div>
                <p className="eyebrow">Parcourir La Normandine</p>
                <h2 id="gallery-title">Les matières,<br /> la lumière,<br />les espaces.</h2>
              </div>
              <p>Sélectionnez une photo pour l’agrandir. </p>
            </div>
            <Gallery />
          </section>

          <section className="video-section section-pad" aria-labelledby="video-title">
            <div className="video-heading">
              <div>
                <p className="eyebrow light">Visite filmée</p>

<h2 id="video-title">
  Découvrir le domaine
  <br />
  dans son environnement.
</h2>
              </div>
              <p>Une visite des extérieurs pour mieux comprendre l'organisation du domaine, ses espaces et son cadre de vie.</p>
            </div>
            <div className="video-frame">
              <video controls preload="metadata" playsInline poster="/media/la-normandine-video-poster.jpg">
                <source src="/media/la-normandine-video-visite.mp4" type="video/mp4" />
                Votre navigateur ne permet pas la lecture de cette vidéo.
              </video>
            </div>
          </section>

          <section className="land-section section-pad" aria-labelledby="land-title">
            <div className="land-visual">
              <Image src="/media/la-normandine-cadastre-v2.jpg" alt="Vue aérienne indicative montrant le domaine arboré, les bâtiments au centre et les terrains environnants." fill sizes="(max-width: 900px) 100vw, 62vw" className="object-cover" quality={90} />
            </div>
            <div className="land-copy">
              <div className="section-marker"><span>07</span><span>Terrain &amp; environnement</span></div>
              <p className="eyebrow">Environ deux hectares</p>
              <h2 id="land-title">Le parc, un atout à part entière.</h2>
              <p className="lead">Les habitations prennent place au centre du domaine, entourées d’arbres et d’espaces fleuris. Cette implantation participe à la sensation d’intimité et de recul.</p>
              <p>Le terrain offre des espaces de détente, de jardin et de circulation entre les différents bâtiments. Un abri existant permet aussi d’envisager l’accueil de chevaux.</p>
              <p className="legal-note">Visualisation indicative du terrain, non constitutive d’un document cadastral officiel.</p>
            </div>
          </section>

          <section className="projects-section section-pad" id="votre-projet" aria-labelledby="projects-title">
            <div className="projects-heading">
              <div className="section-marker"><span>08</span><span>Imaginer votre projet</span></div>
              
              <h2 id="projects-title">Ce lieu ne définit pas un scénario.<br />Il permet de poser le vôtre.</h2>
            </div>
            <div className="projects-grid">
              {projectIdeas.map((idea, index) => (
                <article key={idea.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{idea.title}</h3>
                  <p>{idea.text}</p>
                </article>
              ))}
            </div>
            <div className="caution-box">
              <p className="eyebrow">Avant de décider</p>
              <p>Chaque projet est unique. Nous serons heureux d'échanger avec vous pour répondre à vos questions, préciser les possibilités du domaine et vous accompagner dans votre réflexion.</p>
            </div>
          </section>

          <section className="practical-section section-pad" aria-labelledby="practical-title">
            <div className="practical-heading">
              <div className="section-marker"><span>09</span><span>Informations pratiques</span></div>
             
              
            </div>
            <div className="practical-price">
              <p>Prix de vente affiché</p>
              <strong>{property.price}</strong>
              <span>Vente directe entre particuliers</span>
            </div>
            <div className="practical-columns">
              <article>
                <h3>Les essentiels</h3>
                <ul>{confirmations.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article className="pending-list">
                <h3>A compléter </h3>
                <ul>{pendingInformation.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </div>
            <div className="visit-terms">
              <p><span>Localisation publique</span>{property.publicLocation}</p>
              <p><span>Modalités de visite</span>Nous convenons ensemble du moment le plus adapté pour votre visite.</p>
            </div>
          </section>

          <section className="visit-section section-pad" id="visite" aria-labelledby="visit-title">
            <div className="visit-intro">
              <div className="section-marker light-marker"><span>10</span><span>Demande de visite</span></div>
              <p className="eyebrow light">La prochaine étape</p>
              <h2 id="visit-title">Découvrir <br />La Normandine</h2>
              <p className="lead">Chaque propriété raconte une histoire.
La meilleure façon de découvrir celle-ci reste de la visiter.
Présentez-nous votre projet et nous conviendrons ensemble d'un rendez-vous.</p>
              <p>Les visites sont organisées selon les disponibilités respectives. Vos informations ne sont utilisées que pour répondre à votre demande.</p>
            </div>
            <VisitForm />
          </section>
        </main>
        <SiteFooter />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
