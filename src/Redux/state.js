const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state : {
    profilePage: {
      posts: [
        {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. "},
        {id: 2, message: "Ku-ku"},
        {
          id: 3, message: "Animi asperiores cupiditate delectus eos expedita facilis," +
            " illum in ipsum laborum natus, nostrum sunt totam unde vel. Assumenda quae repudiandae ullam."
        },
      ],
      newPostText: ''
    },
    dialogsPage: {
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
    }
  },
  _callSubscriber() {

  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
  this._callSubscriber = observer;
},

  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let post = {
        id: 5,
        message: this._state.profilePage.newPostText
      };
      this._state.profilePage.posts.push(post);
      this._updateNewPostText('');
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let text = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = '';
      let newMessage = {
        id: 4,
        message: text
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._callSubscriber(this._state);
    }
  }
};

export const AddPostCreator = () => {
  return {type: ADD_POST}
};
export const UpdateNewPostTextCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
};

export const SendMessageCreator = () => {
  return {type: SEND_MESSAGE}
};
export const UpdateNewMessageTextCreator = (text) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text}
};


export default store;
window.store = store;
