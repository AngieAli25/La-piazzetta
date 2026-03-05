import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src="/icons/pittogramma-la-piazzetta-3.png"
                        alt="La Piazzetta"
                        width={40}
                        height={40}
                        style={{ objectFit: 'contain' }}
                    />
                </Link>
            </div>

            <div className={styles.links}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/centro" className={styles.link}>Il Centro</Link>
                <Link href="/contatti" className={styles.link}>Contatti</Link>
            </div>

            <Link href="/centro#elenco-negozi" className={styles.cta}>
                Scopri i negozi
                <div className={styles.arrow}>
                    <Image
                        src="/icons/pallinofreccia.svg"
                        alt="Arrow"
                        width={24}
                        height={24}
                    />
                </div>
            </Link>
        </nav>
    );
}
