import React from 'react';
import styles from './CTA.module.css';

const CTASection: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.ctaBox}>
                <h2 className={styles.title}>
                    Comienza Hoy Mismo. Es Simple, Rápido y Gratis.
                </h2>
                <p className={styles.subtitle}>
                    Únete a las miles de empresas que ya están transformando su colaboración con Tu Empresa.
                </p>
                <a href="/signup" className={styles.button}>
                    Empezar Prueba Gratuita →
                </a>
            </div>
        </section>
    );
};

export default CTASection;