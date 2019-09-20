import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <Post message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. '/>
            <Post message={'Animi asperiores cupiditate delectus eos expedita facilis\n' +
            '    id, illum in ipsum laborum natus, nostrum sunt totam unde vel. Assumenda quae repudiandae ullam.'}/>
        </div>
    )
}

export default MyPosts;
