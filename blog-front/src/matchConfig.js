import Main from "./pages/Main/Main.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import NewPostPage from "./pages/NewPostPage/NewPostPage.jsx";

const matchConfig = [
    {
        path: '/posts/newpost',
        component: NewPostPage,
        exact: false
    },
    {
        path: '/posts/:postId',
        component: PostPage,
        exact: false
    },
    {
        path: '/about',
        component: AboutMe,
        exact: false
    },
    {
        path: '/',
        component: Main,
        exact: false
    }
];

export default matchConfig;