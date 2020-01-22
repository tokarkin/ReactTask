import {postsApi} from "../api/api";
const GET_ALL_POSTS= 'GET_ALL_POSTS';
const ADD_NEW_POST= 'ADD_NEW_POST';
const EDIT_NEW_POST = 'EDIT_NEW_POST';
const DELETE_POST= 'DELETE_POST';
const GET_COMMENTS='GET_COMMENTS';
const ADD_COMMENTS= 'ADD_COMMENTS';


let initialState= {
    allPosts:[ ],
    editPost:{},
    commnets:[{body:'test'}],

}
let idTask= 0;
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                allPosts: action.posts,
            }
        case DELETE_POST:
            let id = action.post.id;

            return {
                ...state,
                allPosts: [...state.allPosts.filter(el=> el.id !== id )]
            }
        case EDIT_NEW_POST:
            return {
                ...state,
                allPosts: [...state.allPosts.map(post => post.id === action.editPost.id ? action.editPost: post )]
            }
        case ADD_NEW_POST:

            return {
                ...state,
                allPosts: [...state.allPosts, {id: state.allPosts.length+1, ...action.newPosts}]
            }
        case GET_COMMENTS:
            return {
                ...state,
                commnets: action.comment
            }
        case ADD_COMMENTS:
            return{
                ...state,
                commnets: action.comment.data.comments
            }
        default:
            return state;
    }
};
export const setAllPosts = (posts) => {
    return {
        type: GET_ALL_POSTS,
        posts,
    }
};
export const getCommentsCreator = (comment) => {
    return {
        type: GET_COMMENTS,
        comment,
    }
};
export const addComments = (comment) => {
    return {
        type: ADD_COMMENTS,
        comment,
    }
};
export  const deleteTask = (post)=>{
    return{
        type: DELETE_POST,
        post
    }
}
export const newPost = (newPosts) => {
    return {
        type: ADD_NEW_POST,
        newPosts,
    }
};
export const editNewPost = (editPost) => {
    return {
        type: EDIT_NEW_POST,
        editPost,
    }
};
export const getComments = (id)=> (dispatch)=>{
        postsApi.getComments(id).then(data=>{
            dispatch(getCommentsCreator(data));
            console.log(data.data.comments);
        })
};
export const postComments = (formData, id )=>(dispatch)=>{
    postsApi.createComment(formData,id).then(data=>{
        if(data.status ===200){
            dispatch(addComments(formData))
        }
    })
}

export const getAllPosts = () => (dispatch) => {
    postsApi.getAllPosts().then(data => {
        dispatch(setAllPosts(data));

    })
};

export const sendNewPost = (formData)=> (dispatch)=>{
    console.log(formData)
    postsApi.createPosts(formData);
    dispatch(newPost(formData))
}


export const editNewPosts = (editPost) => (dispatch) => {
    postsApi.updatePosts(editPost).then(data => {
        if (data.status === 200) {
            dispatch(editNewPost(editPost))
        }
    })
};


export const deletePost = (post) => (dispatch) => {
    postsApi.deletePosts(post.id).then(data => {
        if (data.status === 200) {
            dispatch((deleteTask(post)));
        }
    })
};

export default postReducer;
