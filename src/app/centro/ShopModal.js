'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './ShopModal.module.css';

export default function ShopModal({ shop, onClose }) {
    const scrollRef = useRef(null);

    if (!shop) return null;

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>

                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        {shop.logo && (
                            <div className={styles.logoWrapper}>
                                <Image
                                    src={shop.logo}
                                    alt={shop.name}
                                    width={70}
                                    height={70}
                                    className={styles.logo}
                                />
                            </div>
                        )}
                        <div className={styles.headerInfo}>
                            <h2 className={styles.name}>{shop.name}</h2>
                            <p className={styles.category}>{shop.categories.join(' • ')}</p>
                        </div>
                    </div>

                    <div className={styles.contactButtons}>
                        {shop.phone && (
                            <a href={`tel:${shop.phone}`} className={styles.callButton}>
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.63 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.62A2 2 0 0122 16.92z" />
                                </svg>
                                <span>Chiama il negozio</span>
                            </a>
                        )}

                        {shop.instagram && (
                            <a
                                href={shop.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.callButton} ${[2, 4, 6].includes(shop.id) ? styles.iconOnly : ''}`}
                                title="Visita Instagram"
                            >
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                {![2, 4, 6].includes(shop.id) && <span>Visita Instagram</span>}
                            </a>
                        )}

                        {shop.facebook && (
                            <a
                                href={shop.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.callButton} ${[2, 4, 6].includes(shop.id) ? styles.iconOnly : ''}`}
                                title="Visita Facebook"
                            >
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                                {![2, 4, 6].includes(shop.id) && <span>Visita Facebook</span>}
                            </a>
                        )}
                    </div>
                </div>

                <div className={shop.hours ? styles.content : styles.contentFull}>
                    <div className={styles.description}>
                        <h3>Descrizione</h3>
                        <p>{shop.fullDescription || shop.description}</p>
                    </div>

                    {shop.hours && (
                        <div className={styles.hoursSection}>
                            <h3>Orari di Apertura</h3>
                            <div className={styles.hoursGrid}>
                                {shop.hours.map((item, index) => (
                                    <div key={index} className={styles.hourRow}>
                                        <span className={styles.day}>{item.day}</span>
                                        <span className={styles.time}>{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {shop.descriptionExtra && (
                    <div className={styles.descriptionExtra}>
                        <p>{shop.descriptionExtra}</p>
                    </div>
                )}

                {shop.contacts && (
                    <div className={styles.contactBottomSection}>
                        <h3>Contatti</h3>
                        <ul className={styles.contactList}>
                            {shop.contacts.map((c, i) => (
                                <li key={i}>
                                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                                        <span className={styles.contactIcon}>{c.icon}</span>
                                        {c.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {shop.images && shop.images.length > 0 && (
                    <div className={styles.gallerySection}>
                        <h3>Gallery</h3>
                        <div className={styles.galleryWrapper}>
                            <button
                                className={`${styles.galleryArrow} ${styles.arrowLeft}`}
                                onClick={() => scroll('left')}
                                aria-label="Precedente"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>

                            <div className={styles.gallery} ref={scrollRef}>
                                {shop.images.map((img, index) => (
                                    <div key={index} className={styles.imageWrapper}>
                                        <Image
                                            src={img}
                                            alt={`${shop.name} - ${index + 1}`}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className={styles.galleryImage}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`${styles.galleryArrow} ${styles.arrowRight}`}
                                onClick={() => scroll('right')}
                                aria-label="Successivo"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
