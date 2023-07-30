import React, { useState } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Box, Modal } from "@mui/material";
import { Style } from "@mui/icons-material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height:"auto",
    objectFit: "100%", // Resmin içeriğe göre şekillenmesini sağlar
  },
}));

const useStyles2 = makeStyles((theme) => ({
  customBox: {
    color: 'red',
    fontSize: '24px',
    padding: '16px',
    // Diğer stil özelliklerini burada tanımlayabilirsiniz
  },
}));
function MyAvatar(){
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const classes2 = useStyles();
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);  

 };

 const handleAvatarChange = (event) => {
  setSelectedAvatar(event.target.value); // Radio button değiştiğinde seçilen avatar yolunu güncelleyin
};

const handleAvatarSave = () => {
  // İstenirse seçilen avatar yolunu burada kullanabilirsiniz
  setOpen(false);
};  
    return(
        <div>
           <Card className={classes.root} >
      <CardMedia
        className={classes.media}

        component="img"
       
        image="/avatars/avatar.png"
        title="User Avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Username
        </Typography>
        <Typography variant="body2" color="text.secondary">
          User info
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>Change Avatar</Button>
       
      </CardActions>
    </Card>
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  sx={classes2.customBox} >
    <RadioGroup
      aria-label="avatar"
      name="avatar"
      value={selectedAvatar} // Seçilen avatarı takip etmek için bir state ekleyin
      onChange={handleAvatarChange} // Seçilen avatarı güncellemek için bir işleyici ekleyin
    >
      {Array.from({ length: 6 }, (_, index) => index + 1).map((key) => {
        const labelId = `checkbox-list-secondary-label-${key}`;
        const avatarPath = `/avatars/avatar${key}.png`; // Avatar resimleri avatar1.png, avatar2.png gibi varsayılan olarak isimlendirilmiş olsun.
        return (
          <ListItem key={key} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={`Avatar ${key}`} src={avatarPath} />
            </ListItemAvatar>
            <ListItemText
              primary={key}
            />
            <FormControlLabel
              value={avatarPath} // Radio button'un değerini seçilen avatar resminin yolunu olarak ayarlayın
              control={<Radio />}
              label="Seç"
            />
          </ListItem>
        );
      })}
    </RadioGroup>
    <Button onClick={handleAvatarSave}>Kaydet</Button> {/* Seçilen avatarı kaydetmek için bir düğme ekleyin */}
  </Box>
</Modal>

        </div>
    )
}

export default MyAvatar;