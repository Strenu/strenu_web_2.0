// src/supabaseClient.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';
// 👈 Importamos las variables desde nuestro nuevo archivo config
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../strenu_web_2.0/src/config'; 

// Inicializamos el cliente sin usar process.env
export const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);