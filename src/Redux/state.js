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
      ]
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

  updateNewPostText(newText) {

  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let post = {
        id: 5,
        message: this._state.profilePage.newPostText
      };
      this._state.profilePage.posts.push(post);
      this.updateNewPostText('');
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export default store;
window.store = store;
