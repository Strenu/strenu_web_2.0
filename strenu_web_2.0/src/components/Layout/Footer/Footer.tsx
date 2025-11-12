import React from 'react';
import styles from './Footer.module.css';

// Datos de ejemplo para las columnas de navegación
const navColumns = [
  {
    title: 'Producto',
    links: [
      { name: 'Características', href: '/features' },
      { name: 'Precios', href: '/pricing' },
      { name: 'Integraciones', href: '/integrations' },
    ],
  },
  {
    title: 'Compañía',
    links: [
      { name: 'Acerca de', href: '/about' },
      { name: 'Trabaja con nosotros', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Soporte',
    links: [
      { name: 'Documentación', href: '/docs' },
      { name: 'Estado del servicio', href: '/status' },
      { name: 'Contacto', href: '/contact' },
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', icon: '🐙', href: 'https://github.com/tuempresa' },
  { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/tuempresa' },
  { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/tuempresa' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Sección Superior: Logo, Derechos y Redes */}
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <span className={styles.logoText}>Strenu</span>
            <p className={styles.copyright}>
              © {currentYear} Strenu. Todos los derechos reservados.
            </p>
          </div>
          
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Sección Media: Columnas de Navegación */}
        <div className={styles.navColumnsContainer}>
          {navColumns.map((col) => (
            <div key={col.title} className={styles.navColumn}>
              <h4 className={styles.columnTitle}>{col.title}</h4>
              <ul className={styles.navList}>
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className={styles.navLink}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Sección Inferior: Legal (Sutil) */}
        <div className={styles.legalSection}>
             <a href="/privacy" className={styles.legalLink}>Política de Privacidad</a>
             <a href="/terms" className={styles.legalLink}>Términos del Servicio</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;