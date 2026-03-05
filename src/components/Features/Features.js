import Image from 'next/image';
import styles from './Features.module.css';

const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="white" />
    </svg>
);

export default function Features() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Perché scegliere La Piazzetta</h2>
            <p className={styles.description}>
                Un centro commerciale diverso dagli altri: negozi selezionati con cura, un'atmosfera familiare e tutto ciò che serve per la tua quotidianità.
            </p>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Image src="/icons/star.svg" alt="Quality" width={24} height={24} />
                    </div>
                    <h3 className={styles.cardTitle}>Qualità selezionata</h3>
                    <p className={styles.cardText}>
                        Ogni negozio è stato scelto per offrirti prodotti d'eccellenza con un'attenzione rigorosa alla qualità e prezzi sempre competitivi.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <HeartIcon />
                    </div>
                    <h3 className={styles.cardTitle}>Tutto per la famiglia</h3>
                    <p className={styles.cardText}>
                        Dall'abbigliamento alla spesa quotidiana, dall'estetica ai servizi: in un unico luogo trovi risposta a tutte le esigenze del tuo nucleo familiare.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Image src="/icons/car.svg" alt="Parking" width={24} height={24} />
                    </div>
                    <h3 className={styles.cardTitle}>Parcheggio comodo</h3>
                    <p className={styles.cardText}>
                        Ampio parcheggio multipiano (primi 90 min gratuiti, dopo 0,90€/ora). Accesso diretto alla galleria: arrivi in auto e sei già a fare shopping.
                    </p>
                </div>
            </div>
        </section>
    );
}
