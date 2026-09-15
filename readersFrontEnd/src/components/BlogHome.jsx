const url = import.meta.env.VITE_API_URL;
import { useContext } from "react";
import { AppContext }from '../App.jsx'
import { useEffect } from "react";

const BlogHome = () => {
    const { jwt, setJwt } = useContext(AppContext);
    useEffect( () => {
        async function getPosts() {
            const response = await fetch(`${url}/api/blog`, {
                headers: {
                    Authorization : `Bearer ${jwt}`,
                },
            });

        }

        getPosts();
    }, [jwt])

    return (
        <div className="blogDiv">
            <h1>Blog Home - All Posts</h1>
            <div className="postsDiv">

            </div>
        </div>
    )
}

export default BlogHome;