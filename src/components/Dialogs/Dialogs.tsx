import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props:any) => {
    let path = '/dialogs/' + props.id;
    return  <div className={'s.dialog' + ' ' + s.active}>
        <NavLink to={'path'}>{props.name}</NavLink>
    </div>
}

const Message = (props:any) => {
    return <div className={'s.dialog'}>{props.message}</div>
}

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Tom'} id={'1'} />
                <DialogItem name={'Kate'} id={'2'} />
                <DialogItem name={'Elena'} id={'3'} />
                <DialogItem name={'Mike'} id={'4'} />
                <DialogItem name={'Ida'} id={'5'} />
                <DialogItem name={'Lee'} id={'6'} />
            </div>
            <div className={'s.messages'}>
                <Message message={'Hi!'}/>
                <Message message={'How is your mood?'}/>
                <Message message={'Nice'}/>
            </div>
        </div>
    );
};

export default Dialogs;
