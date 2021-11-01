import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'


let postsData = [
    {id: 1, post: 'Hey :-))'},
    {id: 2, post: 'What`s up bro?'},
    {id: 3, post: 'I`m fine, and u?'}
    ]



 function MyPosts(props) {
  
  
    let postElements = postsData.map(p => <Post post={p.post}/>)

    return (
        <div className={style.postsBlock}>
            <h2 className={style.h3}>My posts</h2>
            <div>
            <textarea></textarea>
            <button>Add</button>
            
            </div>
        <div className={style.posts}>
        {postElements}
           
            </div>
            </div>
        )
}

export default MyPosts;
