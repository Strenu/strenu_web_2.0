import React from 'react';
import FeatureCard from './FeatureCard';
import styles from './Features.module.css';

const features = [
  { icon: '💡', title: 'Diseño Minimalista', description: 'Una interfaz limpia y enfocada que reduce la fatiga visual y potencia la productividad.' },
  { icon: '🔒', title: 'Seguridad Empresarial', description: 'Protección de datos de extremo a extremo con autenticación y cifrado de grado militar.' },
  { icon: '⚡', title: 'Rendimiento Extremo', description: 'Construido con las últimas tecnologías de React y Vite para una velocidad de carga instantánea.' },
  { icon: '⚙️', title: 'Integración Modular', description: 'Conecta tus herramientas existentes fácilmente gracias a nuestra API abierta y bien documentada.' },
  { icon: '🌎', title: 'Escalabilidad Global', description: 'Nuestra arquitectura soporta desde pequeños equipos hasta empresas con millones de usuarios.' },
  { icon: '🛠️', title: 'Soporte Dedicado', description: 'Acceso prioritario a nuestros ingenieros para resolver cualquier problema rápidamente.' },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Funcionalidades Clave</h2>
      <p className={styles.subheading}>
        Tecnología de punta y diseño enfocado en la experiencia del usuario.
      </p>
      <div className={styles.cardGrid}>
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;