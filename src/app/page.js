// src/app/page.js
"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabaseClient'

export default function AuthPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLogin) {
            const { error } = await supabase.auth.signInWithPassword({ email, password })
            if (error) {
                alert(error.message)
            } else {
                router.push('/dashboard')
            }
        } else {
            const { error } = await supabase.auth.signUp({ email, password })
            if (error) {
                alert(error.message)
            } else {
                alert('Signup successful! You can now log in.')
                setIsLogin(true)
            }
        }
    }

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: '10px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ padding: '10px' }}
                />
                <button type="submit" style={{ padding: '10px' }}>
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)} style={{ marginTop: '10px' }}>
                {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
            </button>
        </div>
    )
}
