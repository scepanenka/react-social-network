const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 5,
        message: state.newPostText
      };
      state.posts.push(post);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default: return state;
  }
};

export const AddPostActionCreator = () => {
  return {type: ADD_POST}
};
export const UpdateNewPostTextCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
};

export default profileReducer;
