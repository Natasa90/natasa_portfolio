import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tgvopbumatasvwzurhvu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndm9wYnVtYXRhc3Z3enVyaHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2NjYxMTUsImV4cCI6MjAzOTI0MjExNX0.O2-L72Ka0db1OGHWSSnDoYvMIb3mQcNLzDvqmYta6-4'

let supabase: any | null = null 

if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey)
} else {
    console.error('Supabase URL and key must be provided.')
}
export {supabase} 