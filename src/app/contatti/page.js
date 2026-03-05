import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './contatti.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Contatti() {
    return (
        <div className={styles.pageContainer}>
            <Navbar />

            <main className={styles.mainContent}>
                <div className={styles.hero}>
                    <h1 className={styles.heroTitle}>Contattaci</h1>
                    <p className={styles.heroSubtitle}>
                        Siamo qui per rispondere a tutte le tue domande.<br />
                        Vienici a trovare o scrivici un messaggio.
                    </p>
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>I nostri recapiti</h2>

                        <div className={styles.contactInfoItem}>
                            <span className={styles.infoLabel}>Indirizzo</span>
                            <p className={styles.infoValue}>Via Nizza 5, 10098 Rivoli (TO)</p>
                        </div>

                        <div className={styles.contactInfoItem}>
                            <span className={styles.infoLabel}>Email</span>
                            <a href="mailto:c.c.lapiazzetta@gmail.com" className={`${styles.infoValue} ${styles.infoLink}`}>
                                c.c.lapiazzetta@gmail.com
                            </a>
                        </div>

                        <div className={styles.contactInfoItem}>
                            <span className={styles.infoLabel}>Orari Galleria</span>
                            <p className={styles.infoValue}>Lun - Sab: 9:00 - 20:00</p>
                            <p className={styles.infoValue}>Domenica: Chiuso</p>
                        </div>

                        <div className={styles.contactInfoItem}>
                            <span className={styles.infoLabel}>Orari COOP</span>
                            <p className={styles.infoValue}>Lun - Sab: 9:00 - 20:00</p>
                            <p className={styles.infoValue}>Domenica: 9:00 - 13:00</p>
                        </div>

                        <div className={styles.locationList}>
                            <h3 className={styles.infoLabel} style={{ marginBottom: '1rem' }}>Come raggiungerci</h3>

                            <div className={styles.locationItem}>
                                <Image src="/icons/pallinofreccia.svg" alt="Ingresso" width={24} height={24} className={styles.locationIcon} />
                                <p className={styles.locationText}>
                                    <strong>Ingresso Galleria</strong><br />
                                    Via Nizza 5 (contiguo Coop)
                                </p>
                            </div>

                            <div className={styles.locationItem}>
                                <Image src="/icons/pallinofreccia.svg" alt="Parcheggio" width={24} height={24} className={styles.locationIcon} />
                                <p className={styles.locationText}>
                                    <strong>Parcheggio multipiano</strong><br />
                                    Via Auriletto (accesso diretto)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Scrivici</h2>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="nome" className={styles.label}>Nome*</label>
                                <input type="text" id="nome" name="nome" className={styles.input} placeholder="Il tuo nome" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="cognome" className={styles.label}>Cognome*</label>
                                <input type="text" id="cognome" name="cognome" className={styles.input} placeholder="Il tuo cognome" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email*</label>
                                <input type="email" id="email" name="email" className={styles.input} placeholder="latua@email.com" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="telefono" className={styles.label}>Telefono*</label>
                                <input type="tel" id="telefono" name="telefono" className={styles.input} placeholder="+39 300 000 0000" required />
                            </div>

                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="message" className={styles.label}>Messaggio</label>
                                <textarea id="message" name="message" className={styles.textarea} placeholder="Come possiamo aiutarti?"></textarea>
                            </div>

                            <div className={styles.privacyGroup}>
                                <input type="checkbox" id="privacy" name="privacy" className={styles.checkbox} required />
                                <label htmlFor="privacy">
                                    Ho letto l’<Link href="/privacy" className={styles.privacyLink}>informativa</Link> e autorizzo il trattamento dei miei dati personali per le finalità ivi indicate.
                                </label>
                            </div>

                            <button type="submit" className={styles.submitButton}>Invia Messaggio</button>
                        </form>
                    </div>
                </div>



                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.574212405578!2d7.5209717!3d45.0741478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47884020bbf36fdd%3A0x611f916bc2121816!2sCentro%20Commerciale%20La%20Piazzetta!5e0!3m2!1sit!2sit!4v1770828305965!5m2!1sit!2sit"
                        className={styles.iframe}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </main>

            <Footer />
        </div>
    );
}
