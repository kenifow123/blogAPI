const url = import.meta.env.VITE_API_URL;
import { useContext } from "react";
import { AppContext } from '../App.jsx'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const { jwt, setJwt } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch(`${url}/api/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username" : formData.get("username"),
                "password" : formData.get("password"),
            }),
        });
        const data = await response.json();
        setJwt(data.token);
        navigate('/home');

    }
    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleLogin} method="POST">
                <label htmlFor="username">Username:<input type="text" name="username"/></label>
                <label htmlFor="password">Password:<input type="text" name="password"/></label>
                <button>Submit</button>
            </form>


        </>

    );
}

export default Login;