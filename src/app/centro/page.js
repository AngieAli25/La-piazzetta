'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ShopModal from './ShopModal';
import { shops, allCategories } from '@/data/shops';
import styles from './negozi.module.css';
import Image from 'next/image';

export default function Negozi() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedShop, setSelectedShop] = useState(null);

    const toggleCategory = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredShops = useMemo(() => {
        if (selectedCategories.length === 0) return shops;
        return shops.filter(shop =>
            shop.categories.some(cat => selectedCategories.includes(cat))
        );
    }, [selectedCategories]);

    // Sort alphabetically
    const sortedShops = [...filteredShops].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className={styles.pageContainer}>
            <Navbar />

            <div className={styles.hero}>
                <h1 className={styles.heroTitle}>I Nostri Negozi</h1>
                <p className={styles.heroSubtitle}>
                    Scopri tutti i brand e i servizi del centro commerciale.<br />
                    Moda, tecnologia, casa e molto altro.
                </p>
            </div>

            <main className={styles.mainWrapper}>
                {/* Sidebar Filters */}
                <aside className={styles.sidebar}>
                    <div className={styles.filtersHeader}>
                        <span className={styles.filtersTitle}>Categorie</span>
                    </div>

                    <div className={styles.filterGroup}>
                        <div className={styles.filterList}>
                            {allCategories.map(category => (
                                <div
                                    key={category}
                                    className={styles.filterItem}
                                    onClick={() => toggleCategory(category)}
                                >
                                    <div className={`${styles.checkbox} ${selectedCategories.includes(category) ? styles.active : ''}`}>
                                        {selectedCategories.includes(category) && <span className={styles.checkboxIcon}>✓</span>}
                                    </div>
                                    <span>{category}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Shop List Content */}
                <section className={styles.content}>
                    <div className={styles.introSection}>
                        <p className={styles.introText}>
                            I nostri esercizi propongono prodotti d'eccellenza e sono accomunati dall'attenzione rigorosa nei confronti della qualità,
                            del servizio e dei prezzi concorrenziali. Entrare nel mondo La Piazzetta significa riscoprire il significato di un
                            consumo di qualità e consapevole, in un ambiente caldo, accogliente e familiare, dove sentirsi davvero benvenuti.
                        </p>
                        <p className={styles.introText}>
                            A differenza della maggior parte dei centri commerciali, gli esercizi presenti sono stati selezionati con cura per
                            soddisfare tutte le esigenze del nucleo familiare. Al Centro Commerciale La Piazzetta di Rivoli troverete tutto ciò
                            di cui avete bisogno in un unico luogo, semplificando i vostri acquisti in un'atmosfera ricca di opportunità.
                        </p>
                    </div>

                    <div className={styles.contentHeader} id="elenco-negozi">
                        <span className={styles.contentTitle}>TUTTI I NEGOZI —</span>
                    </div>

                    <div className={styles.shopList}>
                        {sortedShops.map(shop => (
                            <div
                                key={shop.id}
                                className={styles.shopItem}
                                onClick={() => setSelectedShop(shop)}
                            >
                                {shop.logo && (
                                    <div className={styles.logoWrapper}>
                                        <Image
                                            src={shop.logo}
                                            alt={shop.name}
                                            width={60}
                                            height={60}
                                            className={styles.shopLogo}
                                        />
                                    </div>
                                )}
                                <div className={styles.shopInfo}>
                                    <span className={styles.shopName}>{shop.name}</span>
                                    <span className={styles.shopDescription}>{shop.description}</span>
                                    {shop.tags && (
                                        <div className={styles.tags}>
                                            {shop.tags.map(tag => (
                                                <span key={tag} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className={styles.shopActions}>
                                    <div className={styles.actionIcon} title="Dettagli" style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {selectedShop && (
                <ShopModal
                    shop={selectedShop}
                    onClose={() => setSelectedShop(null)}
                />
            )}

            <Footer />
        </div>
    );
}
