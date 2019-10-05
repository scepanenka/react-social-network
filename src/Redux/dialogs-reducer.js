const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;
    case SEND_MESSAGE:
      let text = state.newMessageText;
      state.newMessageText = '';
      let newMessage = {
        id: 4,
        message: text
      };
      state.messages.push(newMessage);
      return state;
    default: return state;
  }
};


export const SendMessageActionCreator = () => {
  return {type: SEND_MESSAGE}
};
export const UpdateNewMessageTextCreator = (text) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text}
};


export default dialogsReducer;
