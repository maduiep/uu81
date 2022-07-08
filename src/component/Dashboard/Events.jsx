import { useState, useEffect } from "react";
import { axiosGet } from '../../api/axios'
import { useDispatch, useSelector } from 'react-redux'
import { allEvents } from '../../app/eventSlice';
import { IconButton, Menu, MenuItem, ListItemIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const Events = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // const [bookings, setBookings] = useState(null);
  const dispatch = useDispatch();
  const { events } = useSelector(state => state.event)

  const [event, setEvents] = useState()

  useEffect(()=>{
    const payload ={
      limit:10,
      skip:0
    }
    dispatch(allEvents(payload));
  },[])

  useEffect(()=>{
    if(events){
      console.log("Events: ", events);
    }
  },[events])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  const handledelete = (id) => {
      // setAnchorEl(null);
      console.log('console: %d',id)
  };
  return (
    <>
        {
          events && (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="center">Space Allowed</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { events?.map((row) => (
                    <TableRow key={row.Event.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {row.Event.title}
                      </TableCell>
                      <TableCell align="center">{row.Event.space_allowed}</TableCell>
                      <TableCell align="center">
                        <IconButton
                            onClick={handleClick}
                            aria-controls={open ? 'amenu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <MoreVertIcon/>
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            id="amenu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                        >
                            <MenuItem onClick={handledelete(row.Event.id)} divider={true} sx={{ color:'red', }}> <ListItemIcon><DeleteIcon sx={{color:'red'}}/></ListItemIcon><Typography color='danger'>Delete</Typography></MenuItem>
                            <MenuItem> <ListItemIcon><EditIcon sx={{color:'blue'}}/></ListItemIcon><Typography color='blue'>Edit</Typography></MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
        }
        {
          !events && (
            <>
              
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ height:'50vh' }}
              >
                <Typography variant="caption">No Events Available</Typography>
              </Grid>
            </>
          )
        }
      </>
  )
}

export default Events