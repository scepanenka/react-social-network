import React from "react";
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogElements = (props.state.dialogs)
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  let messagesElements = (props.state.messages)
    .map(message => <Message id={message.id} message={message.message}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>

    </div>
  )
};

export default Dialogs;
