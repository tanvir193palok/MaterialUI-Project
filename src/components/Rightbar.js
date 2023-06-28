import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../Images/Image1.jpg'
import Image2 from '../Images/Image2.jpg'
import Image3 from '../Images/Image3.jpg'
import Image4 from '../Images/Image4.jpg'
import img1 from '../Images/img1.jpg'
import img3 from '../Images/img3.jpg'
import img5 from '../Images/img5.jpg'

const Rightbar = () => {
  return (
    <Box flex={1.3} p={2} sx={{ display: { xs: "none", sm: "block"}}}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
        <Avatar alt="Travis Howard" src={Image2} />
        <Avatar alt="Cindy Baker" src={Image3} />
        <Avatar alt="Agnes Walker" src={Image4} />
        <Avatar alt="Remy Sharp" src={Image1} />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img 
              src={img1}
              alt="Dish" 
            />
          </ImageListItem>

          <ImageListItem>
          <img 
            src={img3}
            alt="Dish" 
          />
        </ImageListItem>

        <ImageListItem>
        <img 
          src={img5}
          alt="Place" 
        />
      </ImageListItem>
      </ImageList>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
        Latest Conversation
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Image1} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={Image2} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={Image3} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar
