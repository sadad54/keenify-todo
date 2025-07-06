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
        <div style={styles.container}>
            <h1 style={styles.title}>Your Todo List</h1>

            <div style={styles.todoInputContainer}>
                <input
                    type="text"
                    placeholder="New todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    style={styles.input}
                />
                <button onClick={addTodo} style={styles.addButton}>Add</button>
            </div>

            <ul style={styles.todoList}>
                {todos.map((todo) => (
                    <li key={todo.id} style={styles.todoItem}>
                        <span>{todo.task}</span>
                        <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>Delete</button>
                    </li>
                ))}
            </ul>

            <button onClick={logout} style={styles.logoutButton}>Logout</button>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '30px',
        color: '#333',
    },
    todoInputContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
    },
    input: {
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        minWidth: '250px',
    },
    addButton: {
        padding: '12px 20px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#4f46e5',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '1rem',
    },
    todoList: {
        listStyleType: 'none',
        padding: 0,
        width: '100%',
        maxWidth: '400px',
    },
    todoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        marginBottom: '10px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    },
    deleteButton: {
        padding: '6px 12px',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: '#ef4444',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '0.9rem',
    },
    logoutButton: {
        marginTop: '20px',
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#4f46e5',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '1rem',
    },
}
