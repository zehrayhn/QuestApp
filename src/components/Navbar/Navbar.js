import React from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { makeStyles } from '@mui/styles';
import { LockOpen } from "@mui/icons-material";

// eslint-disable-next-line no-unused-vars


//const HomeLink = styled(Link)({
 // textDecoration: 'none',
 // color: 'white',
  //marginLeft: '16px', // Sola hizalama
//});
const useStyles=makeStyles((theme)=> ({
  homeLink:{
    textDecoration: 'none',
    marginLeft: '16px',
    color: 'white'
  }
}))


   function Navbar(){
    let userId=5;
    const navigate = useNavigate(); 
  

    const onClick = () => {
      localStorage.removeItem("tokenKey")
      localStorage.removeItem("currentUser")
      localStorage.removeItem("userName")
      navigate("/");
    }
  
    
    return(
        <div>
              <AppBar position="static">
        <Toolbar>
          <IconButton
         
            edge="start"
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"component="div" sx={{ flexGrow: 1, textAlign: 'left'  }} >
          <Link  style={{ textDecoration: "none", boxShadow: "none", color: "white" }}  to="/">Home</Link>
          </Typography>
          <Typography variant="h6">
            {localStorage.getItem("currentUser") == null ? (<Link to="/auth">login/Register</Link>) : (
           <div><IconButton onClick={onClick}><LockOpen></LockOpen></IconButton>
          <Link to={{ pathname: '/users/' + localStorage.getItem("currentUser") }} style={{ textDecoration: "none", boxShadow: "none", color: "white" }} >Profile</Link>
          </div>)} 

          </Typography>
        </Toolbar>
      </AppBar>
            
        </div>
    );
}

export default Navbar; 