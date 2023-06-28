import React from 'react'
import Image1 from '../Images/Image1.jpg'
import img2 from '../Images/img2.jpg'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Post = () => {
  return (
    <div>
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar 
          src={Image1}
          sx={{width: 30, height: 30}}
          />
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Tanvir Ahmed Palok"
      subheader="6 Jun, 2023"
    />
    <CardMedia
      component="img"
      height="20%"
      image={img2}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
  </Card>
    </div>
  )
}

export default Post
