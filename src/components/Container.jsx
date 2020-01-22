import React,{Component} from "react";
import {connect} from "react-redux";
import {deletePost, editNewPosts, getAllPosts, getComments, postComments, sendNewPost} from "../redux/posts-reducer";
import RenderAllPosts from "./RenderAllPosts";
import {Route} from "react-router-dom";
import EditPost from "./EditPost";
import {initialize} from "redux-form";
import CreateNewPost from "./CreateNewPosts";




class Container extends Component {
    componentDidMount() {
        this.props.getPosts();

    }
    onSubmit=(formData)=>{
        console.log(formData);
        if(formData.title !== ' '){
        this.props.editNewPosts(formData);
        }
    };
    onCreate = (formData)=>{
        console.log(formData);
        if(formData.title&&formData.body !== ' '){
            this.props.sendNewPost(formData);
        }
    }
    render() {
        return( <div>
                 <RenderAllPosts comments={this.props.comments.data} editPost={this.props.editPost} initialize={this.props.initialize}
                                 deletePost={this.props.deletePost}  posts={this.props.posts}
                                 postComments={this.props.postComments}
                                 getComments={this.props.getComments}/>
                 <Route path='/edit/:id?' render={()=> <EditPost onSubmit={this.onSubmit} />} />
                <CreateNewPost  onSubmit={this.onCreate} />
            </div>

        ) }
}

let moveStateToProps = (state) => {
    return {
        posts: state.posts.allPosts,
        comments: state.posts.commnets,

    }
};
let mapDispatchToProps  = dispatch=>{

    return{
        getPosts: ()=>dispatch(getAllPosts()),
        editNewPosts:(post)=> dispatch(editNewPosts(post)),
        initialize: (post)=> dispatch(initialize('edit-post',post)),
        sendNewPost:(formData)=> dispatch(sendNewPost(formData)),
        deletePost:(post)=> dispatch(deletePost(post)),
        getComments:(id)=>dispatch(getComments(id)),
        postComments:(formData,id)=>dispatch(postComments(formData,id))
    }

}





export default connect(moveStateToProps,mapDispatchToProps)(Container);



