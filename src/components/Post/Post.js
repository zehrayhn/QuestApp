
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
import { ExpandMore } from "@mui/icons-material";

import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import CommentComp from '../Comment/CommentComp';

//import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    textAlign: "left",
    margin: 20
  }
}));





function Post(props){
    const {title,text,userName,userId,postId,comment}=props;
    const [expanded, setExpanded] = useState(false);
    const classes=useStyles();
    const [liked,setLiked]=useState(false);
    const [error,setError]=useState(null);
    const [isLoaded,setIsLoaded]=useState(false);
    const [commentList,setCommentList]=useState([]);
    const isInitialMount=useRef(true);


    const handleExpandClick = () => {
        setExpanded(!expanded);
        if(!expanded){
        refreshComments();}
        console.log(commentList);
      };

      const handleLike=()=>{
        setLiked(!liked);
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


    useEffect(()=>{
      if (isInitialMount.current) 
        isInitialMount.current=false;
        else
      refreshComments();
    },[commentList])

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
    <FavoriteIcon style={liked? {color:"red"} : null} />

  </IconButton>
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
            </Container>
        </Collapse>
      </Card>
      </div>
    )
} 
export default Post;