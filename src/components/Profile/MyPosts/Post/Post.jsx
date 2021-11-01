import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Post.module.css'




function Post(props) {
    
    return (
       <div className={style.item}>
          {props.post}
       </div>
    );
}

export default Post
