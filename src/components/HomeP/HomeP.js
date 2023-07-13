import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { Container  } from "@mui/material";
import { ClassNames } from "@emotion/react";
import { makeStyles } from '@mui/styles';
import PostForm from "../Post/PostForm";

const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f5ff",
  
  };
function HomeP(){
     const [error, setError]=useState(null);
    const[isLoaded,setIsLoaded]=useState(false);
    const [postList,setPostList]=useState([]);
    
    const refreshPosts=()=>{
        fetch("/posts/userId")
        .then(res => res.json())
        .then(
            (result) =>{
                setIsLoaded(true);
                setPostList(result)
            },
            (error)=>{
                setIsLoaded(true);
                setError(error)
            }
        )

    }
//eğer data dönerse postlistemizin içini doldurucaaz
    useEffect(() =>{
      refreshPosts()

    }, [postList])

    if(error){
        return <div>Error !!!</div>;

    }else if(!isLoaded){
        return <div>loading...</div>;
    }else{
        return(
            <div style={containerStyle}>
                <PostForm userId={1} userName={"ddd"} refreshPosts={refreshPosts} />
        {postList.map((post) => (
          <Post postId={post.id} userId={post.userId || ''} userName={post.userName || ''} 
          title={post.title} text={post.text} />
        ))}
      </div>

        );
    } 
    
}

export default HomeP;