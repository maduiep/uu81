import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack,List, ListItem } from '@mui/material';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const GetTime = ({date , type}) => {
  // const dateString = date.getTime();
  const dateObj =new Date();
  const dateString = dateObj.getTime();
  const month = dateObj.getMonth() + 1
  const year = dateObj.getFullYear()
  const hour = dateObj.getHours()
  const minute = dateObj.getMinutes()
  const second = dateObj.getSeconds()
  const time = `${month}/${year} ${hour}:${minute}:${second}`
  return time
}
const Event = ({data}) => {

  // const btnColor = {
  //   color: 'white'
  // }

  // const lineStyle = {
  //   width: '7rem',
  //   height: '1px',
  //   backgroundColor: 'gray'
  // }
  return (
   <div className="container">
     <div className="row min-vh-100">
        <div className="col-lg-3 col-sm-12 ">
          
        </div>
        
       <div className="col-sm-12 col-lg-6">
         <div className="row mt-5 mb-5">
              {
                data && data.map((item,i)=>{
                  return (
                      <>
                      <Card key={item.Event.id} sx={{ maxWidth: '90%', mb: '50px', mx: 'auto' }}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="140"
                          image={item.Event.image_url}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" color="text.primary">
                            {item.Event.title} | {GetTime(item.Event.created_at, 'date')}
                          </Typography>
                          <Typography variant="h6" color="text.secondary">
                              Venue: Dr Goodluck Ebele Jonathan, Yenagoa | November 25 - November 28 | ₦0.00 | 120 spaces
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button component={Link} to={`/event/${item.Event.id}`} variant="contained" size="small">View Details</Button>
                        </CardActions>
                      </Card>
                      </>
                    )
                  }
                )
              }
          </div>
       </div>
       <div className="col-lg-3 col-sm-12 mb-5">
            <Stack justifyContent="center" alignItems="center">
              <Typography variant="h4">Venues</Typography>
            </Stack>
            
            <List>
              <ListItem divider>
                <Link to='/'>All Venues</Link>
              </ListItem>
              <ListItem divider>
                <Link to='/'>Dr Goodluck Ebele Jonathan, Yenagoa (1)</Link>
              </ListItem>
            </List>
            <Stack justifyContent="center" alignItems="center">
                <Typography variant="h4">Activities</Typography>
            </Stack>
            <List sx={{ width: '100%'}}>
              <ListItem divider>
                <Link to='/'>All Activities</Link>
              </ListItem>
              <ListItem divider>
                <Link to='/'>Reunion (1)</Link>
              </ListItem>
              <ListItem divider>
                <Link to='/'>Workshop (0)</Link>
              </ListItem>
            </List>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <Typography variant="h4">Follow Us</Typography>
            </Stack>
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <Link to="https://www.facebook.com/yenagoa/" >
                    <FacebookIcon/>
                </Link>
                <Link to="https://www.instagram.com/yenagoa/" >
                    <TwitterIcon/>
                </Link>
              </Stack>
       </div>
     </div>
   </div>
  )
}

export default Event