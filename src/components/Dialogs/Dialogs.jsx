import React from "react";
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Button from "@material-ui/core/Button";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogElements = (state.dialogs).map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  let messagesElements = (state.messages).map(message => <Message id={message.id} message={message.message}/>);
  let newMessageText = state.newMessageText;

  let onNewMessageChange = (e) => {
    let newText = e.target.value;
    props.updateNewMessageText(newText);
  };

  let onSendMessageClick = () => {
    props.sendMessage();
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
        <Button onClick={onSendMessageClick} variant="contained" color="primary">Send message</Button>
      </div>
    </div>
  )
};

export default Dialogs;
