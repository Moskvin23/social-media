const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData : [
        {id: 1, post: 'Hey :-))'},
        {id: 2, post: 'What`s up bro?'},
        {id: 3, post: 'I`m fine, and u?'}
    ],
    newPostText: 'some text'
}

const profileReducer = (state = initialState,action)=>{

    if(action.type === 'ADD_POST'){
        let newPost = {
            id: 4,
            post: state.newPostText
        };
        state.postsData.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;
    }

    return state;
}

export default profileReducer;