import React from "react";
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {SendMessageActionCreator, UpdateNewMessageTextCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let dialogElements = (state.dialogs).map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  let messagesElements = (state.messages).map(message => <Message id={message.id} message={message.message}/>);
  let newMessageText = state.newMessageText;

  let onNewMessageChange = (e) => {
    let newText = e.target.value;
    props.store.dispatch(UpdateNewMessageTextCreator(newText));
  };

  let onSendMessageClick = () => {
    props.store.dispatch(SendMessageActionCreator());
  };


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea value={newMessageText}
                    onChange={onNewMessageChange}
                    placeholder='Enter your message'
                    cols="20" rows="5"/>
        </div>
        <button onClick={onSendMessageClick}>Send message</button>
      </div>
    </div>
  )
};

export default Dialogs;
