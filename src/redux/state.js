let rerenderEntireTree = ()=> {
   
}

    let state = {

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
           
    }

    export let addPost = (postData)=> {
    let newPost = {
        id: 5,
        post : postData   
    };

    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}
export let subscriber = (observer)=>{
    rerenderEntireTree = observer
  }

    export default state;