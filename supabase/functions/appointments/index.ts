import { serve } from 'https://deno.land/std@0.193.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

serve(async req => {
  const { method } = req
  if (method === 'GET') {
    const { data, error } = await sb.from('appointments').select('*')
    if (error) return new Response(error.message, { status: 500 })
    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
  }
  if (method === 'POST') {
    const payload = await req.json()
    const { error } = await sb.from('appointments').insert([payload])
    if (error) return new Response(error.message, { status: 500 })
    return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } })
  }
  if (method === 'PUT') {
    const payload = await req.json()
    const { id, ...updates } = payload
    const { error } = await sb.from('appointments').update(updates).eq('id', id)
    if (error) return new Response(error.message, { status: 500 })
    return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } })
  }
  return new Response('Not Found', { status: 404 })
})
