const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
  posts: [
    {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. "},
    {id: 2, message: "Ku-ku"},
    {
      id: 3, message: "Animi asperiores cupiditate delectus eos expedita facilis," +
        " illum in ipsum laborum natus, nostrum sunt totam unde vel. Assumenda quae repudiandae ullam."
    },
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
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
