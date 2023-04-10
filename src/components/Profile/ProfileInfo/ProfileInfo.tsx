import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={'https://media.istockphoto.com/id/498296158/photo/juneau-alaska.jpg?s=612x612&w=0&k=20&c=73MXWklww8sOUmMOteSg_raQOo7b6DczRNIOiZO2TFs='}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + discribtion
            </div>
        </div>
    );
};

export default ProfileInfo;