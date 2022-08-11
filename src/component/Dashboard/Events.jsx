import { useState, useEffect, useCallback, useRef } from "react";
import { axiosGet } from '../../api/axios'
import { useDispatch, useSelector } from 'react-redux'
import { allEvents } from '../../app/eventSlice';
import { IconButton, Menu, MenuItem, ListItemIcon, Table, Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid,Button } from "@mui/material";
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import Chip from '@mui/material/Chip';

import Modal from '@mui/material/Modal';

import { Link } from 'react-router-dom';
import AddEvent from './AddEvent';
import { DataGrid } from "@mui/x-data-grid";
import { updateEvents } from "../../app/eventSlice";
import { deleteEvents } from './../../app/eventSlice';

const Events = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const { events } = useSelector(state => state.event)

  // const [rows, setRows] = useState()

  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  useEffect(()=>{
    getEvents();
  },[]) 
  
  const getEvents = ()=>{
    const payload ={
      limit:10,
      skip:0
    }
    dispatch(allEvents(payload));
  }
  // const getRows = () => {
    
  //   setRows(rowss);
  //   console.log("Rows: ", rowss);
  // }
  const rows = events?.map(event => ({
    name: event.Event?.title,
    id: event.Event?.id,
    edition: event.Event?.space_allowed, 	
    type: event.Event?.type,
    spacesAllowed: event.Event?.space_allowed, 	
    spacesLeft: event.Event?.space_allowed, 	
    cost: event.Event?.cost, 	
    status: event.Event?.status, 	
    Action: event.Event?.id,
  }));
  
  // useEffect(()=>{
  //   if(events){
  //     getRows();
  //   }
  // },[events])


  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'edition', headerName: 'Edition', width: 80 },
    { field: 'type', headerName: 'Type', width: 50 },
    { 
      field: 'spacesAllowed', 
      headerName: 'Spaces Allowed', 
      width: 150, 
      renderCell: (rowData) => {
      return(
      <>
        <Typography>{rowData.value}</Typography> 
        <Chip label={rowData.value +' Spaces Taken'} size="small" color="success" />
      </>
      )}
    },
    { field: 'spacesLeft', headerName: 'Spaces Left', width: 90 },
    { 
      field: 'cost', 
      headerName: 'Cost', 
      width: 70, 
      renderCell: (rowData) => <><Typography>{'₦ ' + rowData.value}</Typography></> },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: 130, 
      renderCell: (rowData) => {
        return (
          <Chip 
            label={rowData.value ? 'Approved' : 'Not Approved'} 
            size="small" color={rowData.value ? "success":"error"} 
            variant="outlined" 
            // onClick={(e,row)=>handleApprove(rowData.id)}
          />
        )
      }  
    },
    { 
      field: 'Action', 
      headerName: 'Action', 
      width: 150 , 
      renderCell: (params) => {
      return(
        <>
          <IconButton aria-label="delete" onClick={()=>handleApprove(params.value)}>
            <CheckIcon />
          </IconButton>
          {/* <IconButton aria-label="delete" onClick={()=>handleApprove(params.value)}>
            <EditIcon />
          </IconButton> */}
          <IconButton aria-label="delete" onClick={()=>handleDelete(params.value)}>
            <DeleteIcon />
          </IconButton>
        </>
      )}
  },

  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  const handleDelete = (id) => {
      console.log('console: %d',id)
      dispatch(deleteEvents(id))
  };

  const handleApprove = (id) => {
      const data = new FormData();
      data.append('status', true);

      dispatch(updateEvents(id,data))
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
          <AddEvent close={handleModalClose} reload={getEvents}/>
        </Box>
      </Modal>
        {
          events && (
            <DataGrid 
              rows={rows}
              columns={columns}
              autoHeight
            />
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