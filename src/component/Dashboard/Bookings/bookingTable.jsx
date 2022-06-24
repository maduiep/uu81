import { useState, useEffect } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { axiosGet } from "../../../api/axios";
function createData(name, calories, fat, carbs, protein, action) {
    return { name, calories, fat, carbs, protein, action };
}
  
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0,2),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3,3),
    createData('Eclair', 262, 16.0, 24, 6.0,4),
    createData('Cupcake', 305, 3.7, 67, 4.3, 5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 6),
];

const BookingTable = ()=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [bookings, setBookings] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };

    const GetBookings = async ()=>{
        const payload = {
          limit:10,
          skip:0
        }
        const res = await axiosGet.get('/bookings/user',payload);
        const resData = res.data;
        setBookings(resData);
        console.log(resData);
    }

    useEffect(()=>{
      GetBookings();
    },[])


    return(
      <>
        {
          bookings && (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    <TableCell align="right">Action</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  { bookings?.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      <TableCell align="right">
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
                            <MenuItem divider={true} sx={{ color:'red', }}> <ListItemIcon><DeleteIcon sx={{color:'red'}}/></ListItemIcon><Typography color='danger'>Delete</Typography></MenuItem>
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