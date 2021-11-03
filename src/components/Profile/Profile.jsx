import React from "react";
import MyPosts from "./MyPosts/MyPosts";



function Profile(props) {

  return (
   <div> 
    <div> here will be avatar + description</div>
       <MyPosts postsData={props.postsData}/>
     
      
    </div>
  );
}

export default Profile;
