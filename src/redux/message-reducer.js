const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

 const messageReducer = (state, action)=>{
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