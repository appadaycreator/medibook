import { serve } from 'https://deno.land/std@0.193.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
}

serve(async req => {
  const { method } = req
  if (method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (method === 'GET') {
    const { data, error } = await sb.from('appointments').select('*')
    if (error) return new Response(error.message, { status: 500, headers: corsHeaders })
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
  if (method === 'POST') {
    const payload = await req.json()
    const { error } = await sb.from('appointments').insert([payload])
    if (error) return new Response(error.message, { status: 500, headers: corsHeaders })
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
  if (method === 'PUT') {
    const payload = await req.json()
    const { id, ...updates } = payload
    const { error } = await sb.from('appointments').update(updates).eq('id', id)
    if (error) return new Response(error.message, { status: 500, headers: corsHeaders })
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
  return new Response('Not Found', { status: 404, headers: corsHeaders })
})
