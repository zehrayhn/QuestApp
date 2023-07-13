import React from "react";
import { Link } from "react-router-dom";
import { CardContent, InputAdornment, OutlinedInput, Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import { makeStyles} from "@mui/styles";

const useStyles=makeStyles((theme) => ({
    comment: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    Link: {
        textDecoderation: "none",
        boxShadow: "none",
        color: "white"
    }
}));

function CommentComp(props){
    const {text,userId,userName}=props;
    const classes=useStyles();

    return(
       
        <CardContent className={classes.comment}>
           <OutlinedInput
                disabled
                 id="outlined-adornment-amount"
                 multiline //cok satırlı            
                 inputProps={{maxLength:25}} //title a maks size verdik
                 fullWidth
                 value={text}   
        
                 startAdornment={
                    <InputAdornment position="start">
                               <Link   to={{ pathname: '/users/' + userId }} style={{ textDecoration: "none", boxShadow: "none", color: "white" }} > 
                                    <Avatar sx={{ bgcolor: red[500] }} className={classes.avatar}>
                                        {userName.charAt(0).toUpperCase()}

                                    </Avatar>
                                </Link>
 
                    </InputAdornment>
                 }
                 style = {{ color : "black",background: 'white'}}
            /> </CardContent>
 
    )
}

export default CommentComp;
