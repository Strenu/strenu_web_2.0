import React from 'react';
import PriceCard from './PriceCard';
import styles from './Pricing.module.css';

const pricingPlans = [
    {
        plan: 'Básico',
        price: 0,
        period: 'siempre',
        features: ['Hasta 5 usuarios', 'Almacenamiento de 1 GB', 'Soporte Básico', 'Funciones Esenciales'],
        isRecommended: false,
    },
    {
        plan: 'Pro',
        price: 49,
        period: 'mes',
        features: ['Usuarios Ilimitados', 'Almacenamiento de 100 GB', 'Soporte Prioritario', 'Analíticas Avanzadas', 'Integraciones Premium'],
        isRecommended: true, // <-- Este será el plan destacado
    },
    {
        plan: 'Empresarial',
        price: 199,
        period: 'mes',
        features: ['Todo en Pro', 'Soporte 24/7', 'Gestión de Cuentas Dedicada', 'SLA Garantizado', 'Personalización total'],
        isRecommended: false,
    },
];

const PricingSection: React.FC = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Planes Simples, Resultados Potentes</h2>
            <p className={styles.subheading}>
                Elige el plan que mejor se adapte al tamaño y ambición de tu equipo. Sin contratos, cambia en cualquier momento.
            </p>
            <div className={styles.cardGrid}>
                {pricingPlans.map((plan) => (
                    <PriceCard key={plan.plan} {...plan} />
                ))}
            </div>
        </section>
    );
};

export default PricingSection;