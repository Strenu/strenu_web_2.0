import React from 'react';
import styles from './Features.module.css';

interface FeatureCardProps {
  icon: string; // Icono (podría ser un emoji o un componente SVG)
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default FeatureCard;