import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src={'https://media.istockphoto.com/id/498296158/photo/juneau-alaska.jpg?s=612x612&w=0&k=20&c=73MXWklww8sOUmMOteSg_raQOo7b6DczRNIOiZO2TFs='}/>
            </div>
            <div>
                ava + discribtion
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;