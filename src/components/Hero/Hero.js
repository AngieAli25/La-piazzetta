'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

import { useState, useEffect } from 'react';

function Counter({ end, duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        let animationFrameId;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [end, duration]);

    return <>{count.toLocaleString('it-IT')}</>;
}

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Il tuo shopping a misura di famiglia</h1>
                <p className={styles.subtitle}>
                    Nel cuore di Rivoli, 20 negozi selezionati e il Superstore Coop ti aspettano in un ambiente <br /> accogliente dove qualità, servizio e convenienza si incontrano ogni giorno.
                </p>
                <Link href="/centro#elenco-negozi" className={styles.cta}>
                    Scopri i negozi
                    <Image src="/icons/pallinofreccia.svg" alt="Arrow" width={24} height={24} />
                </Link>
            </div>

            <div className={styles.stats}>
                <div className={styles.statItem}>
                    <span className={styles.statValue}><Counter end={20} />+</span>
                    <span className={styles.statLabel}>Negozi e servizi</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statValue}><Counter end={30} />+</span>
                    <span className={styles.statLabel}>Anni con voi</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statValue}><Counter end={200} />+</span>
                    <span className={styles.statLabel}>Posti auto gratuiti</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statValue}><Counter end={1000} />+</span>
                    <span className={styles.statLabel}>Famiglie ogni giorno</span>
                </div>
            </div>

            <div className={styles.scrollDown}>
                Scrolla giù
            </div>
        </section>
    );
}
