import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/createPost">Create Post</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;