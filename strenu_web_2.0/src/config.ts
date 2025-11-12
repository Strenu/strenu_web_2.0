// src/config.ts
// Usamos import.meta.env, que está tipado y es estándar en entornos modernos como Vite.

// Accedemos directamente a las variables de entorno. 
// TypeScript y el bundler (Vite/Rollup) se encargarán del tipado.
// Asegúrate de usar el prefijo correcto (ej: VITE_APP_...)

export const SUPABASE_URL: string = import.meta.env.VITE_APP_SUPABASE_URL || import.meta.env.REACT_APP_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY: string = import.meta.env.VITE_APP_SUPABASE_ANON_KEY || import.meta.env.REACT_APP_SUPABASE_ANON_KEY || '';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error("Error: Las variables de entorno de Supabase no están configuradas correctamente. Asegúrate de usar el prefijo correcto (VITE_APP_ o REACT_APP_).");
}