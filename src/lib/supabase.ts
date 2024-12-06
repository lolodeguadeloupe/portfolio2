import { createClient } from '@supabase/supabase-js'

// Configuration locale pour le développement
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'http://localhost:5432'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'local-dev-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'public',
  },
  auth: {
    persistSession: true,
  },
})

export interface Contact {
  id?: number
  created_at?: string
  name: string
  email: string
  message: string
  status?: 'new' | 'read' | 'replied'
}
