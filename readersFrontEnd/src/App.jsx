import { useState } from 'react'
import Nav from "./components/Nav.jsx"
import styles from "./styles.module.css"
import { createContext } from "react";
import { Outlet } from "react-router-dom"

export const AppContext = createContext({
    jwt: '',
    setJwt: null,
});

function App() {
  const [jwt, setJwt] = useState('');

  return (
    <>
        <AppContext value={{jwt, setJwt}}>
            <Nav className={styles.nav}/>
            <Outlet/>
        </AppContext>
    </>
  )
}

export default App;