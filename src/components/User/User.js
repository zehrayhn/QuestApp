import { Avatar } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import MyAvatar from "../Avatar/MyAvatar";

function User(){

    const {userId} = useParams();
    return(
        <div>
            <MyAvatar/>
        </div>
    )
}

export default User;