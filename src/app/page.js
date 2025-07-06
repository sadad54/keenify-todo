import { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabaseClient'

export default function AuthPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLogin) {
            const { error } = await supabase.auth.signInWithPassword({ email, password })
            if (error) alert(error.message)
            else router.push('/dashboard')
        } else {
            const { error } = await supabase.auth.signUp({ email, password })
            if (error) alert(error.message)
            else alert('Signup successful! You can now log in.')
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
            </button>
        </div>
    )
}
