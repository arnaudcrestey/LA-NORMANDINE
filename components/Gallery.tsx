"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "@/content/property";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const move = useCallback((direction: number) => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + direction + gallery.length) % gallery.length;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, close, move]);

  const active = activeIndex === null ? null : gallery[activeIndex];

  return (
    <>
      <div className="gallery-layout" aria-label="Photographies de La Normandine">
        {gallery.map((image, index) => (
          <figure className={`gallery-item gallery-${image.layout}`} key={image.src}>
            <button
              type="button"
              className="gallery-trigger"
              onClick={() => setActiveIndex(index)}
              aria-label={`Agrandir : ${image.caption}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={image.layout === "feature" ? "(max-width: 768px) 100vw, 80vw" : "(max-width: 768px) 100vw, 45vw"}
                className="object-cover"
                quality={88}
              />
              <span className="gallery-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>

      {active && activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Visionneuse, image ${activeIndex + 1} sur ${gallery.length}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button ref={closeButtonRef} type="button" className="lightbox-close" onClick={close} aria-label="Fermer la visionneuse">
            Fermer <span aria-hidden="true">×</span>
          </button>
          <button type="button" className="lightbox-nav lightbox-prev" onClick={() => move(-1)} aria-label="Image précédente">
            <span aria-hidden="true">←</span>
          </button>
          <figure className="lightbox-figure">
            <div className="lightbox-image">
              <Image src={active.src} alt={active.alt} fill sizes="95vw" className="object-contain" quality={92} priority />
            </div>
            <figcaption>
              <span>{active.caption}</span>
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
            </figcaption>
          </figure>
          <button type="button" className="lightbox-nav lightbox-next" onClick={() => move(1)} aria-label="Image suivante">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </>
  );
}
