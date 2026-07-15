"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Le domaine", "#le-lieu"],
  ["Les maisons", "#maison-principale"],
  ["Galerie", "#galerie"],
  ["Votre projet", "#votre-projet"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <a
          className="brand"
          href="#domaine"
          aria-label="La Normandine, revenir au début du site"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            LN
          </span>

          <span className="brand-name">La Normandine</span>
        </a>

        <nav className="desktop-navigation" aria-label="Navigation principale">
          {links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#visite">
          Demander une visite
        </a>

        <button
          className="mobile-menu-trigger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span>{menuOpen ? "Fermer" : "Menu"}</span>

          <span
            className={`menu-icon ${menuOpen ? "is-open" : ""}`}
            aria-hidden="true"
          >
            <i />
            <i />
          </span>
        </button>
      </header>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-navigation-inner">
          <p className="mobile-navigation-eyebrow">
            Domaine privé · Normandie
          </p>

          <nav aria-label="Navigation mobile">
            {links.map(([label, href], index) => (
              <a href={href} key={href} onClick={closeMenu}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
              </a>
            ))}
          </nav>

          <a
            className="mobile-navigation-cta"
            href="#visite"
            onClick={closeMenu}
          >
            <span>Organiser une découverte</span>
            <strong>Demander une visite</strong>
            <i aria-hidden="true">↗</i>
          </a>

          <div className="mobile-navigation-footer">
            <p>La Normandine</p>
            <p>Viessoix · Valdallière</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <p className="eyebrow light">Domaine privé · Normandie</p>

          <p className="footer-name">La Normandine</p>

          <p className="footer-signature">
            Une propriété. Plusieurs vies possibles.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
  <div>
    <Link href="/mentions-legales">
      Mentions légales
    </Link>

    <Link href="/confidentialite">
      Confidentialité
    </Link>
  </div>
</div>
    </footer>
  );
}