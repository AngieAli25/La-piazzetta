'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.brandColumn}>
                    <div className={styles.logo}>
                        <Image
                            src="/icons/pittogramma-la-piazzetta-3.png"
                            alt="La Piazzetta"
                            width={40}
                            height={40}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <p className={styles.description}>
                        Il centro commerciale di Rivoli dove qualità e convenienza si incontrano dal lunedì alla domenica.
                    </p>
                    <p className={styles.vat}>P.I. 07080070019</p>
                </div>

                <div className={styles.linksColumn}>
                    <div className={`${styles.column} ${styles.menuColumn}`}>
                        <h4 className={styles.columnTitle}>Menu</h4>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/centro" className={styles.link}>Il Centro</Link>
                        <Link href="/contatti" className={styles.link}>Contatti</Link>
                    </div>
                    <div className={`${styles.column} ${styles.contactColumn}`}>
                        <h4 className={styles.columnTitle}>Contact us</h4>
                        <p className={styles.contactInfo}>Via Nizza 5, 10098 Rivoli (TO)</p>
                        <a href="mailto:c.c.lapiazzetta@gmail.com" className={styles.contactInfo}>c.c.lapiazzetta@gmail.com</a>
                        <div className={styles.socials}>
                            <a href="https://www.facebook.com/CentroCommLaPiazzetta/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>f</a>
                            <a href="https://www.instagram.com/lapiazzettarivoli" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>ig</a>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Orari</h4>
                        <div className={styles.hoursBlock}>
                            <p className={styles.hoursSubTitle}>GALLERIA</p>
                            <p className={styles.contactInfo}>Lun - Sab 9:00 - 20:00</p>
                            <p className={styles.contactInfo}>Domenica Chiuso</p>
                        </div>
                        <div className={styles.hoursBlock}>
                            <p className={styles.hoursSubTitle}>COOP</p>
                            <p className={styles.contactInfo}>Lun - Sab 9:00 - 20:00</p>
                            <p className={styles.contactInfo}>Domenica 9:00 - 13:00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>Copyright © 2026 | All Rights Reserved. Designed & Powered by meravigliä</p>
                <div className={styles.bottomLinks}>
                    <button
                        onClick={() => setIsLegalModalOpen(true)}
                        className={styles.modalTrigger}
                    >
                        Informazioni Legali
                    </button>
                    <Link href="/privacy">Privacy Policy e Cookie Policy</Link>
                </div>
            </div>

            {isLegalModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsLegalModalOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={() => setIsLegalModalOpen(false)}>×</button>
                        <h3 className={styles.modalTitle}>Informazioni legali</h3>
                        <p className={styles.modalText}>
                            I testi, le informazioni e gli altri dati pubblicati in questo sito nonchè i link ad altri siti presenti sul web hanno esclusivamente scopo informativo e non assumono alcun carattere di ufficialità. Non assume alcuna responsabilità per eventuali errori od omissioni di qualsiasi tipo e per qualunque tipo di danno diretto, indiretto o accidentale derivante dalla lettura o dall'impiego delle informazioni pubblicate, o di qualsiasi forma di contenuto presente nel sito o per l'accesso o l'uso del materiale contenuto in altri siti.
                        </p>
                    </div>
                </div>
            )}
        </footer>
    );
}
