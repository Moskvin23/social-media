import React from "react"
import style from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem'
import Message from "./Massage/Message"


const Dialogs = (props)=> {

  
  let dialogElements = props.state.dialogsData
            .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  
  let messageElements = props.state.messageData 
            .map( message => <Message message={message.message}/>);

const newMessageDataElement = React.useRef();
const addPost = ()=>{ const someText = newMessageDataElement.current.value;
console.log(someText)}
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog}>
        {dialogElements}
        </div>
      </div>
      <div className={style.messages}>
     {messageElements} 
     <textarea ref={newMessageDataElement}></textarea>
     <button onClick={addPost}>Add</button>
      </div>
    </div>
  )
  }
export default Dialogs;
