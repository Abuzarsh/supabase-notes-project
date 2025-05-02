import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://okcliuuefzhuizmsnqwp.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rY2xpdXVlZnpodWl6bXNucXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MjgxODIsImV4cCI6MjA2MTUwNDE4Mn0.hgUjQb_8hyh8wMIAVOTFhT-c9wpVK35HUci7nq1q5fI')

const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'abuzarshk1344@gmail.com',
    password: 'Abuzar@123'
  })

  if (error) {
    console.error('Login error:', error.message)
  } else {
    const accessToken = data.session.access_token
    console.log('JWT:', accessToken)
  }
}

login()
