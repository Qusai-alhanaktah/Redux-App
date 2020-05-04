export const FETCH_POSTS = 'FETCH_POST';
export const NEW_POST = 'NEW_POST';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => 
        dispatch ({
            type: FETCH_POSTS,
            payload: data,
        })
    );
}


export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
    })
    .then(res => res.json())
    .then(data => 
        dispatch ({
            type: NEW_POST,
            payload: data,
        })
    );
}