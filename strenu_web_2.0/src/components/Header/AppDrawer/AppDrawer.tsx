import React from 'react';
import styles from '../Navbar/Navbar.module.css'; // Usaremos el mismo CSS por ahora, o podrías crear uno específico

interface AppItem {
  id: number;
  name: string;
  icon: string; // URL o nombre del icono (ej. SVG)
  href: string;
}

// Datos de ejemplo para las aplicaciones
const apps: AppItem[] = [
  { id: 1, name: 'Analytics', icon: '📈', href: '/analytics' },
  { id: 2, name: 'Billing', icon: '💳', href: '/billing' },
  { id: 3, name: 'Settings', icon: '⚙️', href: '/settings' },
  { id: 4, name: 'Status', icon: '✅', href: '/status' },
];

interface AppDrawerProps {
    onClose: () => void; // Función para cerrar el cajón
}

const AppDrawer: React.FC<AppDrawerProps> = ({ onClose }) => {
  return (
    <div className={styles.appDrawer} onMouseLeave={onClose}>
      <h3 className={styles.drawerTitle}>🚀 Servicios de la Empresa</h3>
      <div className={styles.appGrid}>
        {apps.map(app => (
          <a key={app.id} href={app.href} className={styles.appItem}>
            <span className={styles.appIcon}>{app.icon}</span>
            <span className={styles.appName}>{app.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AppDrawer;