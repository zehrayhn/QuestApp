import { Input } from "@mui/icons-material";
import { Button, FormControl, FormHelperText, FormLabel, InputLabel, OutlinedInput } from "@mui/material";
import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";

function Auth(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate= useNavigate();

    const handleUsername = (value) => {
        setUsername(value)
    }
    const handlePassword = (value) => {
        setPassword(value)
    }

    const sendRequest = (path) => {
        fetch("/auth/"+path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body : JSON.stringify({
                userName : username,
                password : password,
            }),
        }).then((res) =>{if (!res.ok) {throw new Error("response hatalı");
    } return res.json();
})
        .then((result) =>{ console.log("response data: ", result);
                        localStorage.setItem("tokenKey", result.message);
                        localStorage.setItem("currentUser", result.userId);
                        console.log("response data2: ", result);
                        localStorage.setItem("userName", username);
                        navigate("/");
                })//backend tarafından gelen token ı localStorage a kaydederiz.
                    
        .catch((err) => console.error("fetch hatası : ", err))
    };

    const handleButton=(path)=>{
        sendRequest(path)
        setUsername("")
        setPassword("")
        
    }

  
    return(
        <FormControl>
        <FormLabel>Username</FormLabel>
        <OutlinedInput onChange = {(i) => handleUsername(i.target.value)} />
        <FormLabel>Password</FormLabel>
        <OutlinedInput onChange = {(i) => handlePassword(i.target.value)}/>
        <Button variant = "contained" 
            style = {{marginTop : 40,
            background : 'linear-gradient(45deg, #2196F3 30%, #21cbf3 90%)' ,
            color : 'white'}} 
            onClick= {() => handleButton("register")}>Register</Button>
            <FormHelperText style={{margin:20}}>Are you already registered?</FormHelperText>
            <Button variant = "contained" 
            style = {{
            background : 'linear-gradient(45deg, #2196F3 30%, #21cbf3 90%)' ,
            color : 'white'}}
            onClick={() => handleButton("login")}>Login</Button>    

      </FormControl>
    )
}

export default Auth;