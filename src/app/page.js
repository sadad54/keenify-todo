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
        <div style={styles.container}>
            <h1 style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)} style={styles.toggleButton}>
                {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
            </button>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        width: '100%',
        maxWidth: '350px',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    input: {
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '1rem',
    },
    button: {
        padding: '12px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#4f46e5',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
    },
    toggleButton: {
        marginTop: '15px',
        background: 'none',
        border: 'none',
        color: '#4f46e5',
        cursor: 'pointer',
        fontSize: '0.9rem',
    }
}
