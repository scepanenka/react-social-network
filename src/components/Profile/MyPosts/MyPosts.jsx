import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = (props.posts).map(p => <Post message={p.message}/>);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <textarea ref={newPostElement}
                    onChange={onPostChange}
                    cols="50" rows="5"
                    value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    )
};

export default MyPosts;
