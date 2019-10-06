import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import Button from "@material-ui/core/Button";


const MyPosts = (props) => {

  let postsElements = (props.posts).map(p => <Post message={p.message}/>);
  let newPostElement = React.createRef();

  let onAddPost = () => {
    debugger;
    props.AddPost();
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
          <Button variant="contained" color="primary" onClick={onAddPost}>
            Add post
          </Button>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    )
};

export default MyPosts;
