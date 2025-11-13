import React, { useState, useEffect } from 'react';
import PriceCard from './PriceCard';
import styles from './Pricing.module.css';
import { supabase } from '../../../../supabaseClient';

// Define la interfaz de datos tal como la devuelve la Función SQL (RPC)
interface Plan {
    plan_name: string;
    price: number;
    period: string;
    is_recommended: boolean;
    features: string[];
}

const PricingSection: React.FC = () => {
    const [pricingPlans, setPricingPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Usamos el slug de la aplicación principal que queremos mostrar
        const APP_SLUG = 'strenu-hub'; 

        const fetchPlans = async () => {
            setLoading(true);
            
            // 🚀 LLAMADA DIRECTA A LA FUNCIÓN RPC CREADA EN SUPABASE
            const { data, error } = await supabase.rpc('get_pricing_plans_for_app', { 
                app_slug: APP_SLUG 
            });

            if (error) {
                console.error("Error al obtener los planes (RPC):", error);
                // Aquí podrías usar un conjunto de datos estático de fallback si la DB falla
                setPricingPlans([]); 
            } else {
                // Los datos ya vienen 'aplanados' y ordenados de la función SQL
                setPricingPlans(data as Plan[]);
            }
            setLoading(false);
        };

        fetchPlans();
    }, []); // El array vacío asegura que se ejecuta solo una vez al montar

    if (loading) {
        return <section className={styles.section}><p>Cargando planes de precios STRENU...</p></section>;
    }

    if (pricingPlans.length === 0) {
        return <section className={styles.section}><p>No se encontraron planes de suscripción para esta aplicación.</p></section>;
    }

    return (
        <section className={styles.section} id="pricing">
            <h2 className={styles.heading}>Planes Simples, Resultados Potentes</h2>
            <p className={styles.subheading}>
                Elige el plan que mejor se adapte al tamaño y ambición de tu equipo. Sin contratos, cambia en cualquier momento.
            </p>
            <div className={styles.cardGrid}>
                {pricingPlans.map((plan, index) => (
                    <PriceCard 
                        key={index} 
                        plan={plan.plan_name} 
                        price={plan.price}
                        period={plan.period}
                        features={plan.features}
                        isRecommended={plan.is_recommended}
                    />
                ))}
            </div>
        </section>
    );
};

export default PricingSection;