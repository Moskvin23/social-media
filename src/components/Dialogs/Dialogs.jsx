import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";


const Dialog = (props) => {
  return <div className={style.dialog}>
    <NavLink to={`"/dialogs/1" + ${props.id}`}>{props.name}</NavLink>
  </div>
}
const Message = (props) => {
  return   <div className={style.dialog}>{props.message}</div>
}
   
const Dialogs = (props)=> {
  let dialogsData = [
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
  ];
  
  let dialogElements = dialogsData
            .map( dialog => <Dialog name={dialog.name} id={dialog.id}/>)


  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog}>
        {dialogElements}
        </div>
      </div>
      <div className={style.messages}>
     
        <div className={style.dialog}>What's</div>
        <div className={style.dialog}>How are u?</div>
      </div>
    </div>
  )
  }
export default Dialogs;
