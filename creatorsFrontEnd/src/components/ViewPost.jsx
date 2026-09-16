import {useEffect} from "react";
import { useContext, useState } from "react";
import { AppContext } from "../App.jsx";
const url = import.meta.env.VITE_API_URL;
import { useParams } from "react-router-dom";
import styles from "../styles.module.css";
import { useNavigate } from "react-router-dom";

const ViewPost = () => {
    const { jwt } = useContext(AppContext);
    const [post, setPost] = useState(null);
    const { postId } = useParams();
    const navigate = useNavigate();

    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const response = await fetch(`${url}/api/blog/${postId}/createComment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization : `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                "content" : formData.get("commentContent"),
            }),
        })
        window.location.reload();
    }

    useEffect(() => {
        async function getPost(){
            const response = await fetch(`${url}/api/blog/${postId}`, {
                headers: {
                    Authorization : `Bearer ${jwt}`,
                    "Content-Type": "application/json"
                },
            });
            // console.log(await response.json())
            setPost(await response.json());
            // console.log(post);
        }

        getPost();

    }, [postId, jwt]);

    if (!post) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <div className='postDiv'>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>

            <div className="commentFormDiv">
                <form onSubmit={handleCommentSubmit}>
                    <label htmlFor="commentContent">Enter Comment:<input type="textarea" name="commentContent"/></label>
                    <button>Submit Comment</button>
                </form>
            </div>

            <div className="commentsDiv">
                {post.comments.map((comment, index) => (
                    <div key={post.id} className={styles.card}>
                        <p>Comment {index}: {comment.content}</p>
                    </div>
                ))}

            </div>
        </>
    )


}

export default ViewPost;