// src/components/Sections/Testimonials.tsx

import React, { useState, useEffect, useCallback } from 'react';
import styles from './Testimonials.module.css';
import { supabase } from '../../../../supabaseClient'; 

// Interfaz actualizada para incluir la ruta de la imagen/logo
interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  logo_path: string; // Nueva propiedad
}

// Subcomponente para renderizar cada tarjeta
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div className={styles.card}>
            {/* Contenedor del logo y la información de la persona */}
            <header className={styles.header}>
                {/* Asume que las imágenes están en /public/logos/ */}
                <img 
                    src={`/logos/${testimonial.logo_path}`} 
                    alt={`Logo de ${testimonial.company}`}
                    className={styles.logo}
                />
            </header>
            
            <blockquote className={styles.quote}>
                "{testimonial.quote}"
            </blockquote>
            
            <footer className={styles.footer}>
                <p className={styles.name}>
                    — {testimonial.name}
                </p>
                <p className={styles.titleCompany}>
                    {testimonial.title} en <span className={styles.company}>{testimonial.company}</span>
                </p>
            </footer>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [isAnimating, setIsAnimating] = useState(false); // Estado para controlar la animación

    // ------------------------------------------
    // Lógica de navegación con animación
    // ------------------------------------------
    const navigate = useCallback((newIndex: number) => {
        if (isAnimating || testimonialsData.length <= 1) return;
        
        setIsAnimating(true);
        // Empieza la animación de salida (fadeOut en CSS)
        setTimeout(() => {
            setCurrentIndex(newIndex);
            // Pequeña pausa para asegurar la re-renderización antes del fadeIn
            setTimeout(() => setIsAnimating(false), 50); 
        }, 350); // Tiempo debe coincidir con la duración de la transición CSS
    }, [isAnimating, testimonialsData.length]);

    const nextTestimonial = useCallback(() => {
        const newIndex = (currentIndex + 1) % testimonialsData.length;
        navigate(newIndex);
    }, [currentIndex, testimonialsData.length, navigate]);

    const prevTestimonial = () => {
        const newIndex = (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
        navigate(newIndex);
    };

    // ------------------------------------------
    // Carga de datos desde Supabase
    // ------------------------------------------
    useEffect(() => {
        const fetchTestimonials = async () => {
            setLoading(true);
            
            // Consulta a Supabase, incluyendo la nueva columna 'logo_path'
            const { data, error } = await supabase
                .from('testimonials')
                .select('quote, name, title, company, logo_path') 
                .order('display_order', { ascending: true });
            
            if (error) {
                console.error("Error al cargar testimonios:", error);
                setError("No se pudieron cargar los testimonios.");
                setTestimonialsData([]);
            } else {
                setTestimonialsData(data as Testimonial[]);
                setCurrentIndex(0);
            }
            setLoading(false);
        };
        fetchTestimonials();
    }, []);

    // ------------------------------------------
    // Carrusel Automático
    // ------------------------------------------
    useEffect(() => {
        if (testimonialsData.length > 1 && !isAnimating) {
            const interval = setInterval(nextTestimonial, 7000); // 7 segundos
            return () => clearInterval(interval);
        }
    }, [testimonialsData.length, nextTestimonial, isAnimating]);


    // ------------------------------------------
    // Manejo de Estados y Renderizado
    // ------------------------------------------
    if (loading) {
        return (
            <section className={styles.container}>
                <p className={styles.loadingMessage}>Cargando validación de impacto...</p>
            </section>
        );
    }
    
    if (error || testimonialsData.length === 0) {
        return null; 
    }

    const currentTestimonial = testimonialsData[currentIndex];

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>Validación de Impacto.</h2>
            <p className={styles.subheading}>Empresas líderes confían en la velocidad y la seguridad modular de STRENU para escalar sus operaciones.</p>
            
            <div className={styles.carouselWrapper}>
                <button className={`${styles.navButton} ${styles.left}`} onClick={prevTestimonial}>&lt;</button>
                
                {/* Aplica la clase de animación basado en el estado isAnimating */}
                <div className={`${styles.carouselContent} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}
                     key={currentIndex}> 
                    <TestimonialCard testimonial={currentTestimonial} />
                </div>

                <button className={`${styles.navButton} ${styles.right}`} onClick={nextTestimonial}>&gt;</button>
            </div>

            {/* Indicadores de Posición */}
            <div className={styles.indicatorWrapper}>
                {testimonialsData.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                        onClick={() => navigate(index)} // Usa navigate para animar el cambio
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;