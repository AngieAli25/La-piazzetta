'use client';

import { useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './Events.module.css';

const GAP_PX = 24;
const SCROLL_EPS = 4;

export default function Events() {
    const scrollRef = useRef(null);

    const events = [
        {
            title: 'San Valentino a La Piazzetta',
            text: 'Un orsetto, mille rose e un pizzico di magia: festeggia l\'amore in galleria con idee regalo, sorrisi e un\'atmosfera tutta da coccolare.',
            image: '/images/event_san_valentino.jpg',
            tag: 'San Valentino'
        },
        {
            title: 'Natale a La Piazzetta',
            text: 'Vivi la magia del Natale con noi: luci, decorazioni e tanti eventi speciali per grandi e piccini in attesa della festa più amata.',
            image: '/images/event_natale_panorama.jpg',
            tag: 'Natale'
        },
        {
            title: 'Festa dei 30 Anni',
            text: 'Un traguardo importante! Festeggiamo insieme 30 anni di attività con musica, ospiti speciali e una grande torta per tutti.',
            image: '/images/event_30anni_v2.jpg',
            tag: 'Anniversario'
        },
        {
            title: 'Halloween con Truccabimbi',
            text: 'Un pomeriggio da brividi! Porta i tuoi bambini per un trucco mostruoso e tanto divertimento in galleria.',
            image: '/images/event_halloween_v3.jpg',
            tag: 'Halloween'
        }
    ];

    const scroll = useCallback((direction) => {
        const el = scrollRef.current;
        if (!el) return;
        const first = el.querySelector('[data-event-card]');
        const step = first ? first.getBoundingClientRect().width + GAP_PX : 320;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        const maxScroll = Math.max(0, scrollWidth - clientWidth);

        if (maxScroll <= SCROLL_EPS) {
            return;
        }

        if (direction === 'right') {
            if (scrollLeft >= maxScroll - SCROLL_EPS) {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                el.scrollBy({ left: step, behavior: 'smooth' });
            }
        } else {
            if (scrollLeft <= SCROLL_EPS) {
                el.scrollTo({ left: maxScroll, behavior: 'smooth' });
            } else {
                el.scrollBy({ left: -step, behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Eventi</h2>
            <p className={styles.description}>
                Oltre alla varietà di negozi, il Centro Commerciale La Piazzetta di Rivoli rende più vivace lo shopping grazie a numerosi eventi organizzati durante l'anno:
                sfilate di moda, promozioni speciali, mostre e attività coinvolgenti per tutta la famiglia.
            </p>
            <div className={styles.carouselWrapper}>
                <button
                    type="button"
                    className={`${styles.galleryArrow} ${styles.arrowLeft}`}
                    onClick={() => scroll('left')}
                    aria-label="Eventi precedenti"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div className={styles.carouselTrack} ref={scrollRef}>
                    {events.map((event, index) => (
                        <div key={index} className={styles.card} data-event-card>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: event.objectPosition || 'center'
                                    }}
                                />
                                <span className={styles.tag}>{event.tag}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{event.title}</h3>
                            <p className={styles.cardText}>{event.text}</p>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className={`${styles.galleryArrow} ${styles.arrowRight}`}
                    onClick={() => scroll('right')}
                    aria-label="Altri eventi"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
