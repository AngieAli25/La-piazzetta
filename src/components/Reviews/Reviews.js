'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './Reviews.module.css';

export default function Reviews() {
    const scrollRef = useRef(null);

    const reviews = [
        {
            id: 1,
            author: 'Carola Pontarolo',
            rating: 5,
            text: 'Comodo, le attività all\'interno sono tutte ben accessibili'
        },
        {
            id: 2,
            author: 'Cesare Leone',
            rating: 5,
            text: 'Ottimo luogo ~ bene organizzato ~ Vetrine dei negozi addobbati professionalmente e invitanti agli acquisti.'
        },
        {
            id: 3,
            author: 'Silvana P.',
            rating: 5,
            text: 'Ci sono vari negozi, c\'è la Coop, un bel parcheggio a più piani, anche chi ha problemi di deambulazione può accedere senza barriere architettoniche, ci si può fermare a chiacchierare, a mangiare...'
        },
        {
            id: 4,
            author: 'angeldark78',
            rating: 5,
            text: 'Un centro commerciale piuttosto diverso dal solito, pieno di negozi particolari, è piuttosto piccolo ma decisamente bello esteticamente è pieno di negozianti disponibili e gentili.'
        },
        {
            id: 5,
            author: 'Gemma Torres',
            rating: 5,
            text: 'Luogo tranquillo, pulito, per passeggiata rilassante con bei negozi.'
        },
        {
            id: 6,
            author: 'Giuseppe Cannariato',
            rating: 5,
            text: 'Piccolo ma accogliente e con dentro un po\' di tutto.'
        },
        {
            id: 7,
            author: 'Rocco Renzo Vizzuso',
            rating: 5,
            text: 'Ci sono parecchi negozi compresa la coop e il posteggio e gratuito per i primi 90 minuti.'
        },
        {
            id: 8,
            author: 'Miki Bis',
            rating: 5,
            text: 'Bel posto bei negozietti. Piccolo ma trovi tutto quello di cui hai bisogno dalla profumeria lavanderia bar estetica ecc ecc'
        },
        {
            id: 9,
            author: 'Saverio Sblendorio',
            rating: 5,
            text: 'Veloce, in centro città, piccola galleria ma ottimamente attrezzata, alla fine del percorso trovate una coop! Davvero tanta roba!'
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 320; // card width + gap
            const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const renderStars = (rating) => {
        return (
            <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Recensioni</h2>
            <div className={styles.carouselContainer}>
                <button
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={() => scroll('left')}
                    aria-label="Scorri a sinistra"
                >
                    ‹
                </button>

                <div className={styles.carouselWrapper}>
                    <div className={styles.grid} ref={scrollRef}>
                        {reviews.map((review) => (
                            <div key={review.id} className={styles.card}>
                                <div className={styles.header}>
                                    <div className={styles.authorInfo}>
                                        <p className={styles.author}>{review.author}</p>
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                                <p className={styles.quote}>{review.text}</p>
                                <div className={styles.decoration}>
                                    <Image src="/icons/lines.png" alt="" width={120} height={120} style={{ objectFit: 'contain' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={() => scroll('right')}
                    aria-label="Scorri a destra"
                >
                    ›
                </button>
            </div>
        </section>
    );
}
