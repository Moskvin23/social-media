import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'


 function MyPosts(props) {
  
  
    let postElements = props.postsData.map(p => <Post post={p.post}/>)

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
