const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    {id: 1, message: "Hello!"},
    {id: 2, message: "How are you?!"},
    {id: 3, message: "Lol))) I'm fine!"},
  ],
  dialogs: [
    {id: 1, name: "Aliaksandr"},
    {id: 2, name: "Zmicer"},
    {id: 3, name: "Yura"},
    {id: 4, name: "Mikalaj"},
    {id: 4, name: "Andrey"},
    {id: 5, name: "Victar"}
  ],
  newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
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
