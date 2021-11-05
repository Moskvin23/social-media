const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    messageData : [
        {id: 1, message: "Hey google!"},
        {id: 2, message: "What`s up Leo?"},
        {id: 3, message: "How`s it going?"}
      ],
      newMessage: ''
}
 const messageReducer = (state = initialState, action)=>{
    if (action.type === UPDATE_NEW_MESSAGE){
        state.newMessage = action.body;
    }   else if (action.type === SEND_MESSAGE) {
        let body = state.newMessage;
        state.newMessage = '';
        state.messageData.push({id: 6, message: body});
    }
    return state;
}
export default messageReducer;