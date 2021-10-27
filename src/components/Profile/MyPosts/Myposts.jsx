import React from 'react'
 import style from './Myposts.module.css'
 import Post from './Post/Post'

function Myposts() {
    return (
       <><div className={style.item}>
            My posts
        </div>
        <div>
            <Post />
            <Post />
            <Post />
          
            </div></>
        )
}

export default Myposts
