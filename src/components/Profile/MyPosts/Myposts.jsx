import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post' 

 function MyPosts(props) {
    let postElements = 
    props.postsData.map(p => <Post post={p.post}/>)

  let newPostDataElement = React.createRef();

  let addPost = () => {
      let text = newPostDataElement.current.value;
      props.addPost(text);
  }
   

    return (
        <div className={style.postsBlock}>
            <h2 className={style.h3}>My posts</h2>
            <div>
            <textarea ref={newPostDataElement}></textarea>
            <button onClick={  addPost  }>Add</button>
            </div>
        <div className={style.posts}>
        {postElements}
           
            </div>
            </div>
        )
    }

export default MyPosts;
