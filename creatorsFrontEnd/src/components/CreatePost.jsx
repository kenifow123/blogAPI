const url = import.meta.env.VITE_API_URL;
import { useContext } from "react";
import { AppContext } from '../App.jsx'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
    const { jwt, setJwt, posts, setPosts} = useContext(AppContext);
    const navigate = useNavigate();

    //create post submit button
    const handleCreatePost = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget.form);
        const response = await fetch(`${url}/api/blog/createPost`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization : `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                "title": formData.get("title"),
                "content": formData.get("content"),
            })
        })
        const data = await response.json();
        console.log(data);
        navigate('/home');
    }

    //create post save draft buton
    const handleSavePostDraft = async (event) => {
        event.preventDefault();
    }


    return (
        <>
            <h1>Create Post</h1>
            <form>
                <label htmlFor="title">Title:<input type="text" name="title"/></label>
                <label htmlFor="content">Comment content:<input type="text" name="content"/></label>
                <button onClick={handleCreatePost}>Submit</button>
                <button onClick={handleSavePostDraft}>Save as Draft</button>
            </form>
        </>
    )
}

export default CreatePost;