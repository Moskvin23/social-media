import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
    _state: {

        profilePage  : {
            postsData : [
                {id: 1, post: 'Hey :-))'},
                {id: 2, post: 'What`s up bro?'},
                {id: 3, post: 'I`m fine, and u?'}
            ]
        },

        messagePage : {
            messageData : [
                {id: 1, message: "Hey google!"},
                {id: 2, message: "What`s up Leo?"},
                {id: 3, message: "How`s it going?"}
              ],
              dialogsData : [
                {id: 1, name: 'Pasha'},
                {id: 2, name: 'Alyona'},
                {id: 3, name: 'Kolya'},
                {id: 4, name: 'Kostya'},
                {id: 5, name: 'Maria'},
                {id: 6, name: 'Valeriy'},
                {id: 7, name: 'Viktor'},
                {id: 8, name: 'Volodya'},
                {id: 9, name: 'Stepan'},
                {id: 10, name: 'Leonel'}
              ]
        }
           
    },
    getState(){
        return this._state;
    },
    _rerenderEntireTree (){
    },
    addPost(postData) {
        let newPost = {
            id: 5,
            post : postData   
        };
    
        this._state.profilePage.postsData.push(newPost);
        this._rerenderEntireTree(this._state);
    },
    subscriber(observer){
        this._rerenderEntireTree = observer
      },
    dispatch(action){
       this._state.profilePage = profileReducer(this._state.profilePage , action);
       this._state.messagePage = messageReducer(this._state.messagePage , action);

       this._rerenderEntireTree(this._state);
      }
}
   

     

    export default store;