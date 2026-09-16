import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import styles from './styles.module.css'
import Nav from "./components/Nav.jsx";
import { Outlet } from "react-router-dom";
import { createContext } from "react";


export const AppContext = createContext({
  jwt: '',
  setJwt: null,
  posts: [],
  setPosts: null,
});

function App() {
  const [jwt, setJwt] = useState(() => localStorage.getItem("jwt"));
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0)


  return (
    <>
      <AppContext value={{jwt, setJwt, posts, setPosts}}>
        <Nav className={styles.nav}/>
        <Outlet />
      </AppContext>

    </>
  )
}

export default App
