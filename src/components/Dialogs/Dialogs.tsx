import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={'s.dialog'}>
                    Tom
                </div>
                <div className={'s.dialog' + ' ' + s.active}>
                    Kate
                </div>
                <div className={'s.dialog'}>
                    Elena
                </div>
                <div className={'s.dialog'}>
                    Mike
                </div>
                <div className={'s.dialog'}>
                    Ida
                </div>
                <div className={'s.dialog'}>
                    Lee
                </div>
            </div>
            <div className={'s.messages'}>
                <div className={'s.dialog'}>Hi!</div>
                <div className={'s.dialog'}>How is your mood?</div>
                <div className={'s.dialog'}>Nice</div>
            </div>
        </div>
    );
};

export default Dialogs;
