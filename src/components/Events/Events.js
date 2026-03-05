import Image from 'next/image';
import styles from './Events.module.css';

export default function Events() {
    const events = [
        {
            title: 'Natale a La Piazzetta',
            text: 'Vivi la magia del Natale con noi: luci, decorazioni e tanti eventi speciali per grandi e piccini in attesa della festa più amata.',
            image: '/images/event_natale_v5.jpg',
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
            tag: 'Halloween',
            objectPosition: 'center 60%'
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Eventi</h2>
            <p className={styles.description}>
                Oltre alla varietà di negozi, il Centro Commerciale La Piazzetta di Rivoli rende più vivace lo shopping grazie a numerosi eventi organizzati durante l'anno:
                sfilate di moda, promozioni speciali, mostre e attività coinvolgenti per tutta la famiglia.
            </p>
            <div className={styles.grid}>
                {events.map((event, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                style={{ objectFit: 'cover', objectPosition: event.objectPosition || 'center' }}
                            />
                            <span className={styles.tag}>{event.tag}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{event.title}</h3>
                        <p className={styles.cardText}>{event.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
