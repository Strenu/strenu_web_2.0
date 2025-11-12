import React from 'react';
import styles from './Pricing.module.css';

interface PriceCardProps {
    plan: string;
    price: number;
    period: string;
    features: string[];
    isRecommended: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({ plan, price, period, features, isRecommended }) => {
    // Determina las clases y el texto del botón
    const cardClass = isRecommended ? styles.cardRecommended : styles.card;
    const buttonClass = isRecommended ? styles.buttonAccent : styles.buttonDefault;
    const buttonText = isRecommended ? 'Comenzar (Recomendado)' : 'Seleccionar Plan';

    return (
        <div className={cardClass}>
            <h3 className={styles.planName}>{plan}</h3>
            
            <div className={styles.priceDisplay}>
                <span className={styles.priceValue}>
                    {price === 0 ? 'Gratis' : `$${price}`}
                </span>
                {price > 0 && <span className={styles.pricePeriod}>/{period}</span>}
            </div>

            <ul className={styles.featureList}>
                {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                        <span className={styles.featureIcon}>✔</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <button className={buttonClass}>
                {buttonText}
            </button>
        </div>
    );
};

export default PriceCard;