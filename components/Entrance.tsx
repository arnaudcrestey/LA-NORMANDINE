import Link from "next/link";

export function Entrance() {
  return (
    <section
      className="entrance"
      id="accueil"
      aria-labelledby="entrance-title"
    >
      <div className="entrance-shell">
        <div
          className="entrance-orbit entrance-orbit-top"
          aria-hidden="true"
        />

        <div
          className="entrance-orbit entrance-orbit-bottom"
          aria-hidden="true"
        />

        <div className="entrance-content">
          <p className="entrance-kicker">
            Propriété de caractère · Normandie
          </p>

          <div className="entrance-monogram" aria-hidden="true">
            LN
          </div>

          <h1 id="entrance-title">LA NORMANDINE</h1>

          <p className="entrance-promise">
            Une propriété.
            <br />
            Plusieurs vies possibles.
          </p>

          <Link className="entrance-button" href="/visite">
            Entrer
          </Link>

          <p className="entrance-description">
            Deux maisons, deux hectares arborés et un lieu singulier à
            découvrir à 5mn de VIRE.
          </p>
        </div>
      </div>
    </section>
  );
}