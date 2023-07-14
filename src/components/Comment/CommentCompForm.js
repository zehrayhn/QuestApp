import React from "react";
import { Link } from "react-router-dom";
import { CardContent, InputAdornment, OutlinedInput, Avatar, Button } from "@mui/material";
import { red } from "@mui/material/colors";
//import { makeStyles} from "@mui/styles";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Value } from "sass";

const theme = createTheme();

const CommentContent = styled(CardContent)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  }));
  
  const CommentOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    width: "100%",
   // height: theme.spacing(4),
    minHeight: 64,
    padding: theme.spacing(1),
    color: "black"
  }));
  
  const CommentLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    boxShadow: "none",
    color: "white",
  }));

function CommentCompForm(props){
    const {userId,userName,postId}=props;
    //const classes=useStyles();
    const[text,setText]=useState("");
    const saveComment=()=>{
        fetch("/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

          },
          body:JSON.stringify({
            postId:postId,
            userId:userId,
            text:text,

          }),
        }
        )
        .then((res)=>res.json())
        .catch((err)=>console.log("error"))
    }
    const handleSubmit=()=>{
        saveComment();
        setText("");

    }
    const handleChange=(event) => {
         setText(event.target.value);

    }

    return(
        <ThemeProvider theme={theme}>
        <CommentContent>
          <CommentOutlinedInput
    
            id="outlined-adornment-amount"
            multiline
            inputProps={{ maxLength: 250 }}
            fullWidth
            onChange={handleChange}
            //value={text}
            
            startAdornment={
              <InputAdornment position="start">
                <CommentLink to={{ pathname: '/users/' + userId }}>
                  <Avatar sx={{ bgcolor: red[500] }}>
                    {userName.charAt(0).toUpperCase()}
                  </Avatar>
                </CommentLink>
              </InputAdornment>
            }

            endAdornment={
                <InputAdornment position="end">
              
                    <Button
                       variant="contained"
                       style={{background: 'linear-gradient(45deg,#2196F3 30%, #21CBF3 90%)',
                       color:'white'}} 
                       onClick={handleSubmit}>Comment
                </Button>
              
                </InputAdornment>
            }
            value={text}
            style={{ color: "black", background: "white" }}
          />
        </CommentContent>
      </ThemeProvider>
    );
     
 
    
}


export default CommentCompForm;
