export const postList = [
    {
        id: '1',
        header: 'Пост 1',
        text: 'Текст какой-то пост 1'
    },
    {
        id :'2',
        header: 'Пост 2',
        text: 'Текст какой-то пост 2'
    }
];

export const createPost = (post) => {
    post.id = postList.length + 1 + '';
    postList.push(post);
    return post.id;
};

export const aboutMe = {
    header: 'Привет! Я Никита Чернега.',
    text: 'Ляляляля. Как дела? Приветики.'
};
