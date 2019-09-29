import React from 'react'
import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <div>
          <div>
            <img className={s.avatar} src="https://avatarko.ru/img/kartinka/1/multfilm_gomer.png" alt="ava"/>
          </div>
        </div>
    )
};

export default ProfileInfo;
