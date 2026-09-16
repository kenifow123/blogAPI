import { useNavigate } from 'react-router-dom';
const url = import.meta.env.VITE_API_URL;


const Signup = () => {

    const handleSignup = async (event) => {
        const navigate = useNavigate();
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch(`${url}/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": formData.get("email"),
                "name": formData.get("name"),
                "password": formData.get("password"),
                "username": formData.get("username"),
            }),
        })

        const data = await response;
        navigate('/login')
    }

    return (
        <>
            <h1>Signup</h1>

            <form onSubmit={handleSignup} method="POST">
                <label htmlFor="email">Email:<input type="text" name="email"/></label>
                <label htmlFor="name">Name:<input type="text" name="name"/></label>
                <label htmlFor="username">New Username:<input type="text" name="username"/></label>
                <label htmlFor="password">New Password:<input type="text" name="password"/></label>
                <label htmlFor="confirmPassword">Confirm Password:<input type="text" name="confirmPassword"/></label>

                <button>Submit</button>

            </form>
        </>
    )
}

export default Signup;