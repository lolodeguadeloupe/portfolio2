import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  },
  global: {
    headers: {
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    }
  }
})

export const getContacts = async () => {
  const { data, error } = await supabase
    .from('contacts')
    .select('id, name, email, message, status, created_at')

  if (error) {
    console.error(error)
    throw error
  }

  return data
}

export interface Contact {
  id?: number
  name: string
  email: string
  message: string
  status?: string
  created_at?: string
}
