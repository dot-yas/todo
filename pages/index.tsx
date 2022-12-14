import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function Home() {

  const [todos, setTodos] = useState<string[]>([])

  const addTodo = () => {
    setTodos([...todos, ""]);
  };

  const editTodo = (insertIndex: number, newValue: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((value, index) => (index == insertIndex ? newValue : value))
    )
  }

  const deleteTodo = (deleteIndex: number) => {
    setTodos((prevTodos) =>
      prevTodos.filter((value, index) => index != deleteIndex)
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
        </ul>

        <div>
          <Button variant="contained" onClick={addTodo}>Add</Button>
        </div>
        
        {todos.map((todo, index) => (
          <div className={styles.text_line}>
            <TextField className={styles.text_field} id="text_field" label="" variant="standard" onChange={e => editTodo(index, e.target.value) }/>
            <Button variant="contained" onClick={() => deleteTodo(index)}>delete</Button>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
          Powered by {'yas'}
      </footer>
    </div>
  )
}
