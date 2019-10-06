import React from 'react'
import {AddPostActionCreator, UpdateNewPostTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    debugger;
    props.store.dispatch(AddPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(UpdateNewPostTextCreator(text));
  };

    return (
      <MyPosts updateNewPostText={onPostChange}
               AddPost={addPost}
               posts={state.profilePage.posts}
               newPostText={state.profilePage.newPostText}/>
    )
};

export default MyPostsContainer;
