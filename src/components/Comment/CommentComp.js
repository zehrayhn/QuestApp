import React from "react";
import { Link } from "react-router-dom";
import { CardContent, InputAdornment, OutlinedInput, Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
//import { makeStyles} from "@mui/styles";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
    padding: theme.spacing(1)
  }));
  
  const CommentLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    boxShadow: "none",
    color: "white",
  }));

function CommentComp(props){
    const {text,userId,userName}=props;
    //const classes=useStyles();

    return(
        <ThemeProvider theme={theme}>
        <CommentContent>
          <CommentOutlinedInput
            disabled
            id="outlined-adornment-amount"
            multiline
            inputProps={{ maxLength: 25 }}
            fullWidth
            value={text}
            startAdornment={
              <InputAdornment position="start">
                <CommentLink to={{ pathname: '/users/' + userId }}>
                  <Avatar sx={{ bgcolor: red[500] }}>
                    {userName.charAt(0).toUpperCase()}
                  </Avatar>
                </CommentLink>
              </InputAdornment>
            }
            style={{ color: "black", background: "white" }}
          />
        </CommentContent>
      </ThemeProvider>
    );
     
 
    
}

export default CommentComp;
