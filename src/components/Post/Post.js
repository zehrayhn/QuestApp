
import React, {useEffect, useState,useRef} from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import { Avatar, Box, Button, Collapse, Container } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore, LocalCafe } from "@mui/icons-material";

import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import CommentComp from '../Comment/CommentComp';

//import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';
import CommentCompForm from '../Comment/CommentCompForm';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    textAlign: "left",
    margin: 20
  }
}));





function Post(props){
    const {title,text,userName,userId,postId,comment,likes}=props;
    const [expanded, setExpanded] = useState(false);
    const classes=useStyles();

    const [error,setError]=useState(null);
    const [isLoaded,setIsLoaded]=useState(false);
    const [commentList,setCommentList]=useState([]);
    const isInitialMount=useRef(true);
    //const likeCount = likes ? likes.length : 0;
    const [likeCountc, setLikeCountc]=useState(likes.length);
    const [isLiked,setIsLiked] = useState(false);
    const [likeId, setLikeId] =useState(null);
    const [likeList, setLikeList] = useState(likes);
   let disabled =localStorage.getItem("currentUser") == null ? true: false;
  

    const handleExpandClick = () => {
        setExpanded(!expanded);
        if(!expanded){
        refreshComments();}
        console.log(commentList);
      };

      const handleLike = () => {
        if(!disabled){
        setIsLiked(!isLiked);
        if(!isLiked){
          saveLike();
          setLikeCountc(likeCountc + 1);
        }
        else{
        deleteLike();  
        setLikeCountc(likeCountc - 1);
        }
      }
      }

      const refreshComments=()=>{
        fetch("/comments?postId="+postId)
        .then(res => res.json())
        .then(
            (result) =>{
                setIsLoaded(true);
                setCommentList(result)
            },
            (error)=>{
                setIsLoaded(true);
                setError(error)
            }
        )

    }

    const saveLike = () => {
      fetch("/likes",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
        body: JSON.stringify({
          postId: postId,
          userId : localStorage.getItem("currentUser"),

        }),

      })
        .then((res) => res.json())
        
        .catch((err) => console.log(err))

    }

    const deleteLike = () => {
      fetch("/likes/"+likeId,{
        method: "DELETE",
        headers: {
     
          "Authorization" : localStorage.getItem("tokenKey"),
        },
      }) 
       // .then((res) => res.json())
    
        .catch((err) => console.log(err))
    }

    const checkLikes = () => {
    
      
      if (likes && Array.isArray(likes) && likes.length > 0) {
        const likeControl = likes.find((like => ""+like.userId === localStorage.getItem("currentUser")));
        if (likeControl != null) {
          setLikeId(likeControl.id)
        
          setIsLiked(true);
        }
      }
     
      }


    useEffect(()=>{
      if (isInitialMount.current) 
        isInitialMount.current=false;
        else
      refreshComments();
    },[commentList])

    useEffect(() => {
      checkLikes();},[])

    return(
      
      <div className="postContainer">
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Link   to={{ pathname: '/users/' + userId }} style={{ textDecoration: "none", boxShadow: "none", color: "white" }} > 
            <Avatar sx={{ bgcolor: red[500] }} className={classes.avatar}>
             {userName.charAt(0).toUpperCase()}

            </Avatar>
            </Link>
          }
          
          title={title}
          
        />
      
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
  
  <IconButton 
 
  onClick={handleLike}
  aria-label="add to favorites">
    <FavoriteIcon style={isLiked ? {color:"red"} : null} />

  </IconButton>
 {likeCountc}
  <div style={{ marginLeft: "auto" }}>
    <IconButton
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <CommentIcon/>
    </IconButton>
  </div>
</CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit >
        <Container className={classes.container}>
            {error ? 
              "Error"
             : isLoaded ? 
              commentList.map(comment => (<CommentComp userId = {1}  userName = {"USER"} text = {comment.text}></CommentComp>)) : 
              "loading"}

             {disabled? "" : <CommentCompForm userId = {1}  userName = {"USER"} postId = {postId}></CommentCompForm>}
            </Container>
        </Collapse>
      </Card>
      </div>
    )
} 
export default Post;