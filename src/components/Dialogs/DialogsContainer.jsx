import React from "react";
import {SendMessageActionCreator, UpdateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onNewMessageChange = (newText) => {
    props.store.dispatch(UpdateNewMessageTextCreator(newText));
  };

  let onSendMessageClick = () => {
    props.store.dispatch(SendMessageActionCreator());
  };


  return (
    <Dialogs updateNewMessageText={onNewMessageChange}
             sendMessage={onSendMessageClick}
             dialogsPage = {state} />
  )
};

export default DialogsContainer;
