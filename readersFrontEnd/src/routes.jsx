import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import App from "./App.jsx"
import ErrorPage from "./components/ErrorPage.jsx"
import CreatePost from "./components/CreatePost.jsx";
import BlogHome from "./components/BlogHome.jsx";
import ViewPost from "./components/ViewPost.jsx";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            { path: "/signup", element: <Signup/> },
            { path: "/login", element: <Login/> },
            { path: "/createPost", element: <CreatePost/>} ,
            { path: "/signup", element: <Signup/> },
            { path: "/home", element: <BlogHome/> },
            { path: "/viewPost/:postId", element: <ViewPost/> },
        ]
    },
]

export default routes;