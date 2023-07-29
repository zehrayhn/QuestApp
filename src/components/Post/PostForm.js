
import React, {useState} from "react";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import { Alert, Avatar, Button, Collapse, InputAdornment } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import { OutlinedInput } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {Button as MuiButton} from '@mui/material';

const useStyles=makeStyles((theme)=> ({
  root:{
    width:800,
    textAlign:"left",
    margin:20
  }
}))



function PostForm(props){
    const {userName,userId,refreshPosts}=props;
    const [expanded, setExpanded] = useState(false);
    const classes=useStyles();
    const [text,setText]=useState("");
    const [title,setTitle]=useState("");
    const [isSent,setIsSent]=useState(false);

    const savePost=()=>{
        fetch("/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization" : localStorage.getItem("tokenKey"),
          
          },
          body:JSON.stringify({
            title:title,
            userId:userId,
            text:text,

          }),
        }
        )
        .then((res)=>res.json())
        .catch((err)=>console.log("error"))
    }

      const handleSubmit=()=>{

        savePost();
        setIsSent(true);
        setTitle("");
        setText("");
        refreshPosts();
      }
      const handleTitle=(value)=>{
          setTitle(value);
          setIsSent(false);
      }
      const handleText=(value)=>{
        setText(value);
        setIsSent(false);
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      
      setIsSent(false);
    };

    const vertical = 'top'; // Snackbar'ın dikey pozisyonunu belirleyen değer ('top', 'bottom')
  const horizontal = 'center';

    return(
      <div className="postContainer">
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={isSent} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%'   }}>
  
    Your post is sent!
    
  </Alert>
</Snackbar>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Link   to={{ pathname: '/users/' + userId }} style={{ textDecoration: "none", boxShadow: "none", color: "white" }} > 
            <Avatar sx={{ bgcolor: red[500] }} className={classes.avatar}>
             {userName.charAt(0).toUpperCase()}

            </Avatar>
            </Link>
          }
          
          title={<OutlinedInput
            id="outlined-adornment-amount"
            multiline //cok satırlı
            placeholder="Title"
            inputProps={{maxLength:25}} //title a maks size verdik
            fullWidth
            value={title}
            onChange={(i)=> handleTitle(i.target.value)}
            >
           
          </OutlinedInput>}
          
        />
      
        <CardContent>
          <Typography variant="body2" color="text.secondary">
         
            <OutlinedInput
            id="outlined-adornment-amount"
            multiline //cok satırlı
            placeholder="Text"
            inputProps={{maxLength:250}} //title a maks size verdik
            fullWidth
            value={text}
            onChange={(i)=> handleText(i.target.value)}
            endAdornment={
                <InputAdornment position="end">
                <Button   variant="contained"
                style={{background: 'linear-gradient(45deg,#2196F3 30%, #21CBF3 90%)',
                color:'white'}} 
                onClick={handleSubmit}
        
        
                >
                  Post
                </Button>
                </InputAdornment>
            }
            >
           
          </OutlinedInput>
          </Typography>
        </CardContent>
       
      </Card>
      </div>
    )
} 
export default PostForm;