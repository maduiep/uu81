import { useState, useEffect } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { axiosGet } from "../../../api/axios";
import { getBooking } from "../../../app/bookingSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



const BookingTable = ()=>{
    const [anchorEl, setAnchorEl] = useState(null);
    // const [bookings, setBookings] = useState(null);
    const open = Boolean(anchorEl);

    const dispatch = useDispatch()
    
    const { bookings } = useSelector(state => state.book)
    
    useEffect(()=>{
      dispatch(getBooking());
    },[])
    
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
    

    return(
      <>
        {
          bookings && (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Title)</TableCell>
                    <TableCell align="right">Space Allowed</TableCell>
                    {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    <TableCell align="right">Action</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  { bookings?.map((row) => (
                    <TableRow key={row.event.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {row.event.title}
                      </TableCell>
                      <TableCell align="center">{row.event.space_allowed}</TableCell>
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
                            <MenuItem onClick={handledelete(row.id)} divider={true} sx={{ color:'red', }}> <ListItemIcon><DeleteIcon sx={{color:'red'}}/></ListItemIcon><Typography color='danger'>Delete</Typography></MenuItem>
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
          !bookings && (
            <>
              
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ height:'50vh' }}
              >
                <Typography variant="caption">No Bookings Available</Typography>
              </Grid>
            </>
          )
        }
      </>
    )
}   

export default BookingTable;