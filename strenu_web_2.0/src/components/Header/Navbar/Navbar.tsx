import React, { useState } from 'react';
import styles from './Navbar.module.css';
import AppDrawer from '../AppDrawer/AppDrawer';

interface NavLink {
  name: string;
  href: string;
}

// Datos de ejemplo para los enlaces principales
const mainLinks: NavLink[] = [
  { name: 'Producto', href: '/product' },
  { name: 'Precios', href: '/pricing' },
  { name: 'Documentación', href: '/docs' },
  { name: 'Blog', href: '/blog' },
];

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        
        {/* IZQUIERDA: Logo y Nombre de la Empresa */}
        <a href="/" className={styles.brand}>
          {/*  (Logo) */}
          <span className={styles.logoText}>Strenu</span>
        </a>

        {/* CENTRO: Apartados Principales */}
        <nav className={styles.navLinks}>
          {mainLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* DERECHA: Cajón de Apps/Acciones */}
        <div className={styles.actions}>
          {/* Contenedor relativo para posicionar el dropdown */}
          <div className={styles.drawerContainer}> 
            <button 
              className={styles.appButton} 
              onClick={toggleDrawer}
              aria-expanded={isDrawerOpen} 
              aria-label="Abrir menú de aplicaciones"
            >
              {/* Ícono de 9 puntos (simulado) */}
              <span style={{ display: 'block', lineHeight: '0.3' }}>...</span>
              <span style={{ display: 'block', lineHeight: '0.3' }}>...</span>
            </button>
            
            {/* Renderizar el Cajón de Apps si el estado es true */}
            {isDrawerOpen && <AppDrawer onClose={() => setIsDrawerOpen(false)} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;