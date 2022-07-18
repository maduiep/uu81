import { useState, useEffect } from "react";
import { axiosGet } from '../../api/axios'
import { useDispatch, useSelector } from 'react-redux'
import { allEvents } from '../../app/eventSlice';
import { IconButton, Menu, MenuItem, ListItemIcon, Table, Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid,Button } from "@mui/material";
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Chip from '@mui/material/Chip';

import Modal from '@mui/material/Modal';

import { Link } from 'react-router-dom';
// import {  } from '@mui/material/Button';
import AddEvent from './AddEvent';

const Events = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const { events } = useSelector(state => state.event)

  const [event, setEvents] = useState()

  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

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
  const handleApprove = (id) => {
      // setAnchorEl(null);
      console.log('console: %d',id)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {  xs:'90%', md:'60%' },
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
  };
  return (
    <>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{
              marginBottom: '2rem'
            }}>
            <Button variant="contained" color="primary"  onClick={handleModalOpen}>
              Create Event
            </Button>
            </Box>
          </Grid>
        </Grid>
        <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddEvent/>
        </Box>
      </Modal>
        {
          events && (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Event Name</TableCell>
                    <TableCell>Edition</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Spaces Allowed</TableCell>
                    <TableCell>Spaces Left</TableCell>
                    <TableCell>Cost</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                    {/* <TableCell>Title</TableCell>
                    <TableCell align="center">Space Allowed</TableCell>
                    <TableCell align="center">Action</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  { events?.map((row) => (
                    <TableRow key={row.Event.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="center"></TableCell>
                      <TableCell component="th" scope="row">
                        <Link to={'/'}>{row.Event.title}</Link>
                      </TableCell>
                      <TableCell align="center">
                        {row.Event.space_allowed}
                      </TableCell>
                      <TableCell align="center">
                        {row.Event.space_allowed}
                      </TableCell>
                      <TableCell align="center">
                        <Typography>
                          {row.Event.space_allowed}
                        </Typography>
                        <Chip label={row.Event.space_available +' Spaces Taken'} size="small" color="success" />
                      </TableCell>
                      <TableCell align="center">
                        {row.Event.space_available}
                      </TableCell>
                      <TableCell align="center">
                        {'₦ ' + row.Event.cost}

                      </TableCell>
                      <TableCell align="center">
                        <Chip label={row.Event.status ? 'Approved' : 'Not Approved'} size="small" color={row.Event.status ? "success":"error"} variant="outlined" />
                      </TableCell>
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
                            <MenuItem onClick={(e) => handleApprove(e, row.Event.id)}>
                              <Typography color='danger'>Approve</Typography>
                            </MenuItem>
                            <MenuItem>
                              <Typography color='danger'>Unaprove</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handledelete(row.Event.id)} divider={true} sx={{ color:'red', }}> 
                              <ListItemIcon>
                                <DeleteIcon sx={{color:'red'}}/>
                              </ListItemIcon>
                              <Typography color='danger'>Delete</Typography>
                            </MenuItem>
                            {/* <MenuItem> <ListItemIcon><EditIcon sx={{color:'blue'}}/></ListItemIcon><Typography color='blue'>Edit</Typography></MenuItem> */}
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