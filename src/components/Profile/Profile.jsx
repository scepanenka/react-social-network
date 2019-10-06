import React from 'react';
import s from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.profileWrapper}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
};

export default Profile;
