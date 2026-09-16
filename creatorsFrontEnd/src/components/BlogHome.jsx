const url = import.meta.env.VITE_API_URL;
import {useContext, useState} from "react";
import { AppContext }from '../App.jsx'
import { useEffect } from "react";
import styles from "../styles.module.css"
import { Link } from "react-router-dom";


const BlogHome =  () => {
    const { posts, setPosts, jwt} = useContext(AppContext);
    useEffect( () => {
        async function getPosts() {
            //creatorFrontEnd only gets posts that the user started
            const response = await fetch(`${url}/api/blog/creator`, {
                headers: {
                    Authorization : `Bearer ${jwt}`,
                    "Content-Type": "application/json"
                },
            });
            setPosts(await response.json());
        }

        getPosts();
    }, [jwt])



    return (
        <div className="blogDiv">
            <h1>Blog Home - All Posts</h1>
            <div className="postsDiv">
                {posts.map((post) => (
                    <div className={styles.card}>
                        <h3>Title: {post.title}</h3>
                        <Link to={`/viewPost/${post.id}`}>View Post</Link>
                        {post.published ?
                            <Link>Hide Post</Link>
                            :
                            <Link to={`/publishPost/${post.id}`}>Publish Post</Link>
                        }
                    </div>
                )



                )}
            </div>
        </div>
    )
}

export default BlogHome;