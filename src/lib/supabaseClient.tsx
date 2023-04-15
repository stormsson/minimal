import { SupabaseClient, createClient } from '@supabase/supabase-js'

export const supabase:SupabaseClient = createClient(process.env.SUPABASE_DOMAIN!, process.env.SUPABASE_KEY!)
