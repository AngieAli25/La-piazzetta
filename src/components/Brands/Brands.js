'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Brands.module.css';

export default function Brands() {
    const scrollRef = useRef(null);

    // Array of logo filenames (1.png to 18.png)
    const logos = Array.from({ length: 18 }, (_, i) => `${i + 1}.png`);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 2.016; // pixels per frame

        const scroll = () => {
            scrollAmount += scrollSpeed;

            // Reset scroll when reaching halfway (since we duplicate the logos)
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
            }

            scrollContainer.scrollLeft = scrollAmount;
            requestAnimationFrame(scroll);
        };

        const animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>I nostri negozi</h3>
                <Link href="/centro" className={styles.discoverBtn}>
                    Scopri
                    <Image src="/icons/pallinofreccia_white.svg" alt="Arrow" width={24} height={24} />
                </Link>
            </div>
            <div className={styles.logoWrapper}>
                <div className={styles.logos} ref={scrollRef}>
                    {/* Duplicate logos for seamless loop */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={`${logo}-${index}`} className={styles.logo}>
                            <Image
                                src={`/loghi-negozi/${logo}`}
                                alt={`Logo ${logo}`}
                                width={1053}
                                height={527}
                                quality={100}
                                style={{ objectFit: 'contain', width: '351px', height: '176px' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
