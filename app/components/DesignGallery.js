"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./DesignGallery.module.css";

// ── Carousel modal ───────────────────────────────────────────────────────────
function Carousel({ images, startIndex = 0, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [prev, next, onClose]);

  return createPortal(
    <div className={styles.carouselBackdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.carouselModal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.carouselClose} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.carouselImageWrap}>
          <Image
            src={images[current].src}
            alt={images[current].alt || `Slide ${current + 1}`}
            fill
            className={styles.carouselImage}
            sizes="90vw"
          />
        </div>

        {images.length > 1 && (
          <>
            <button className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`} onClick={prev} aria-label="Previous">‹</button>
            <button className={`${styles.carouselArrow} ${styles.carouselArrowRight}`} onClick={next} aria-label="Next">›</button>
            <div className={styles.carouselDots}>
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className={styles.carouselCaption}>
          {images[current].title && <span className={styles.carouselTitle}>{images[current].title}</span>}
          {images[current].date && <span className={styles.carouselDate}>{images[current].date}</span>}
          {images[current].description && <p className={styles.carouselDesc}>{images[current].description}</p>}
        </div>
      </div>
    </div>,
    document.body
  );
}

// ── Single masonry card ───────────────────────────────────────────────────────
function GalleryCard({ item, carouselEnabled }) {
  const [open, setOpen] = useState(false);

  // Normalise: a card can have a single image or multiple (carousel)
  const images = item.images
    ? item.images
    : [{ src: item.image, alt: item.title, title: item.title, date: item.date, description: item.description }];

  const hasMultiple = images.length > 1;

  return (
    <>
      <div
        className={styles.card}
        onClick={() => carouselEnabled && hasMultiple && setOpen(true)}
        style={{ cursor: carouselEnabled && hasMultiple ? "pointer" : "default" }}
      >
        <div className={styles.imageWrap}>
          <Image
            src={images[0].src}
            alt={images[0].alt || item.title || "Design"}
            fill
            className={styles.cardImage}
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              {item.title && <h3 className={styles.overlayTitle}>{item.title}</h3>}
              {item.date && <span className={styles.overlayDate}>{item.date}</span>}
              {item.description && <p className={styles.overlayDesc}>{item.description}</p>}
              {carouselEnabled && hasMultiple && (
                <span className={styles.overlayBadge}>+{images.length - 1} more</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {open && (
        <Carousel images={images} startIndex={0} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

// ── Masonry layout ────────────────────────────────────────────────────────────
function Masonry({ items, columns, carouselEnabled }) {
  // Distribute items into columns: each item goes into the shortest column
  const cols = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => cols[i % columns].push(item));

  return (
    <div className={styles.masonry} style={{ "--cols": columns }}>
      {cols.map((col, ci) => (
        <div key={ci} className={styles.masonryColumn}>
          {col.map((item, ii) => (
            <GalleryCard key={item.id ?? `${ci}-${ii}`} item={item} carouselEnabled={carouselEnabled} />
          ))}
        </div>
      ))}
    </div>
  );
}

// ── Public component ──────────────────────────────────────────────────────────
export default function DesignGallery({ designs = [] }) {
  const [carouselEnabled, setCarouselEnabled] = useState(true);
  const [columns, setColumns] = useState(3);
  const containerRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 600) setColumns(1);
      else if (w < 900) setColumns(2);
      else if (w < 1200) setColumns(3);
      else setColumns(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const hasMultiImageItems = designs.some((d) => d.images && d.images.length > 1);

  return (
    <section className={styles.gallerySection} ref={containerRef}>

      {designs.length === 0 ? (
        <p className={styles.empty}>No designs to display yet.</p>
      ) : (
        <Masonry items={designs} columns={columns} carouselEnabled={carouselEnabled} />
      )}
    </section>
  );
}
