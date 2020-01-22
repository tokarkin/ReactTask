import React from "react";

import ListOfPosts from "./ListOfPosts";

function RenderAllPosts(props) {
    let onSubmit=(formData,id)=>{
        props.postComments(formData,id);
    }
    console.log(props)
    let allPosts = props.posts.map(post => <ListOfPosts onSubmit={onSubmit} deletePost={props.deletePost}
                                                        initialize={props.initialize}
                                                     comments={props.comments}
                                                        key={post.id} post={post}  getComments={props.getComments}
    />)
    return (
        <div >
            {allPosts}
        </div>
    )
}

export default RenderAllPosts;