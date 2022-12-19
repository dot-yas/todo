import Head from "next/head"
import styles from "../styles/Home.module.css"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import AddIcon from "@mui/icons-material/Add"
import DeleteIcon from "@mui/icons-material/Delete"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogTitle from "@mui/material/DialogTitle"
import { useState } from "react"
import { atom, useRecoilState } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

const todoState = atom({
  key: 'todoState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export default function Home() {
  const [todos, setTodos] = useRecoilState<string[]>(todoState)
  const [open, setOpen] = useState(false)

  const addTodo = () => {
    if (todos.includes("")) {
      return
    } else {
      setTodos([...todos, ""])
    }
  }

  const editTodo = (insertIndex: number, newValue: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((value, index) =>
        index === insertIndex ? newValue : value
      )
    )
  }

  const deleteTodo = (deleteIndex: number) => {
    setTodos(() => todos.filter((value, index) => index !== deleteIndex))
  }

  const deleteAll = () => {
    setOpen(false)
    setTodos([])
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Stack spacing={2}>
          <div>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              onClick={addTodo}
            >
              Add
            </Button>
          </div>

          {todos.map((todo, index) => (
            <div className={styles.text_line} key={index}>
              <TextField
                label=""
                variant="standard"
                value={todo}
                onChange={(e) => editTodo(index, e.target.value)}
              />
              <IconButton aria-label="delete" onClick={() => deleteTodo(index)}>
                <DeleteIcon />
              </IconButton>
            </div>
          ))}

          <div>
            <Button
              startIcon={<DeleteIcon />}
              variant="contained"
              color="error"
              onClick={handleClickOpen}
            >
              Delete All
            </Button>
          </div>
        </Stack>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"すべて削除しますか？"}
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleClose} autoFocus>Cancel</Button>
            <Button onClick={deleteAll}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </main>

      <footer className={styles.footer}>Powered by {"yas"}</footer>
    </div>
  )
}