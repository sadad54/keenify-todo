// src/app/dashboard/page.js
"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../../lib/supabaseClient'

export default function Dashboard() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const router = useRouter()

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            router.push('/')
            return
        }

        const { data, error } = await supabase
            .from('todos')
            .select('*')
            .eq('user_id', user.id)

        if (error) console.log(error)
        else setTodos(data)
    }

    const addTodo = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        if (newTodo.trim() === '') return

        const { error } = await supabase
            .from('todos')
            .insert([{ user_id: user.id, task: newTodo }])

        if (error) console.log(error)
        else {
            setNewTodo('')
            fetchTodos()
        }
    }

    const deleteTodo = async (id) => {
        const { error } = await supabase
            .from('todos')
            .delete()
            .eq('id', id)

        if (error) console.log(error)
        else fetchTodos()
    }

    const logout = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Your Todo List</h1>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="New todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    style={{ padding: '10px', marginRight: '10px' }}
                />
                <button onClick={addTodo} style={{ padding: '10px' }}>Add</button>
            </div>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ marginBottom: '10px' }}>
                        {todo.task}
                        <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>Delete</button>
                    </li>
                ))}
            </ul>

            <button onClick={logout} style={{ marginTop: '20px', padding: '10px' }}>Logout</button>
        </div>
    )
}
