import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* CAPA 1: Video de Fondo */}
      <video autoPlay loop muted className={styles.backgroundVideo}>
        {/* Asegúrate de que la ruta a tu video sea correcta */}
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

      {/* CAPA 2: Overlay Oscuro y Difuminado */}
      <div className={styles.overlay}></div>

      {/* CAPA 3: Contenido Principal de la Hero Section */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          El Futuro de la Colaboración Empresarial
        </h1>
        <p className={styles.subtitle}>
          Soluciones modulares y escalables construidas con la velocidad y seguridad que tu negocio necesita.
        </p>
        
        {/* Botón Principal con color de acento Marrón Tierra */}
        <button className={styles.primaryButton}>
          Empezar Ahora (Es Gratis)
        </button>
      </div>
    </section>
  );
};

export default HeroSection;