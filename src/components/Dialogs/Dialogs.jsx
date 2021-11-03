import React from "react"
import style from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem'
import Message from "./Massage/Message"


const Dialogs = (props)=> {

  
  let dialogElements = props.dialogsData
            .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  
  let messageElements = props.messageData 
            .map( message => <Message message={message.message}/>);


  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog}>
        {dialogElements}
        </div>
      </div>
      <div className={style.messages}>
     {messageElements} 
      </div>
    </div>
  )
  }
export default Dialogs;
