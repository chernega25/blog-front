import Main from "./pages/Main/Main.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";

const matchConfig = [
    {
        path: '/posts/:postId',
        component: PostPage,
        exact: false
    },
    {
        path: '/',
        component: Main,
        exact: false
    }
];

export default matchConfig;