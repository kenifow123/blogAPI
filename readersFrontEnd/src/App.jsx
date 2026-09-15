import { useState } from 'react'
import Nav from "./components/Nav.jsx"
import styles from "./styles.module.css"
import { createContext } from "react";
import { Outlet } from "react-router-dom"
import {data} from "react-router";

export const AppContext = createContext({
    jwt: '',
    setJwt: null,
    posts: [],
    setPosts: null,
});

function App() {
    const [jwt, setJwt] = useState(() => localStorage.getItem("jwt"));
    const [posts, setPosts] = useState([]);
    return (
    <>
        <AppContext value={{jwt, setJwt, posts, setPosts}}>
            <Nav className={styles.nav}/>
            <Outlet/>
        </AppContext>
    </>
    )
}

export default App;