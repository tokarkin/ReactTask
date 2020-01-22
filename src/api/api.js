import * as axios from 'axios';

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://bloggy-api.herokuapp.com/',
})

export const postsApi = {
    getAllPosts(){
        return instance.get(`/posts`).then(responce =>{
            return responce.data
        })
    },
    createPosts(body){
        return instance.post(`/posts`,body)
    },
    updatePosts(body){
        return instance.put(`/posts/`+body.id,body)
    },
    deletePosts(id){
        return instance.delete(`/posts/`+id)
    },
    getComments(id){
        return instance.get(`/posts/${id}?_embed=comments`)
    },
    createComment(body,id){
        return instance.post(`/comments`,body,id)
    },
}