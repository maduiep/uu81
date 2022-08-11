import React from 'react'
import { useState, useEffect } from "react";
import { axiosGet } from '../../api/axios'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Menu, MenuItem, ListItemIcon, Table, Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid,Button } from "@mui/material";
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Chip from '@mui/material/Chip';

import Modal from '@mui/material/Modal';

import { Link } from 'react-router-dom';
import { allUsers, deleteUsers } from '../../app/userSlice';
import { DataGrid } from '@mui/x-data-grid';
import swal from 'sweetalert';

const Users = () => {
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.user)

  // const [user, setEvents] = useState()

  // const [openModal, setOpenModal] = useState(false);
  // const handleModalOpen = () => setOpenModal(true);
  // const handleModalClose = () => setOpenModal(false);

  useEffect(()=>{
    const payload = {
      limit:10,
      skip:0
    }
    dispatch(allUsers(payload));
  },[dispatch])

  useEffect(()=>{
    if(users){
      console.log("Events: ", users);
    }
  },[users])
 
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

  const rows = users?.map(user => ({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone_number,
      admin: user.admin,
      status: user.is_host,
      created_at: user.created_at,
      actions: user.id,
  }));

  const columns = [
    { field: 'first_name', headerName: 'First Name', width: 150 },
    { field: 'last_name', headerName: 'Last Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'phone', headerName: 'Phone', width: 100 },
    { 
      field: 'admin', 
      headerName: 'Role', 
      width: 150, 
      renderCell: (rowData) => {
        return (
          <Chip 
            label={rowData.value ? "Admin":"Not Admin"} 
            size="small" 
            color={rowData.value ? "success":"error"} 
            variant="outlined" 
          />
        )
      },
    },
    { 
      field: 'status', 
      headerName: 'Is Host', 
      width: 100,
      renderCell: (rowData) => {
        return (
          <Chip 
            label={rowData.value ? "Host":"Not Host"} 
            size="small" 
            color={rowData.value ? "success":"error"} 
            variant="outlined" 
          />
        )
      }, 
    },
    { field: 'created_at', headerName: 'Created At', width: 150 },
    { 
      field: 'actions', 
      headerName: 'Actions', 
      width: 100,
      renderCell: (params) => {
        return(
          <>
            {/* <IconButton aria-label="delete" onClick={()=>handleApprove(params.value)}>
              <EditIcon />
            </IconButton> */}
            <IconButton aria-label="delete" onClick={()=>handleDelete(params.value)}>
              <DeleteIcon />
            </IconButton>
          </>
        )
    }
    },
  ];

  const handleDelete = (id) => {
    console.log('console: %d',id)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("User! has been deleted!", {
          icon: "success",
        });
        dispatch(deleteUsers(id))
      } else {
        swal("User Not Deleted!");
      }
    });
  }
  return (
    <>
      {
          users && (
            <DataGrid 
              rows={rows}
              columns={columns}
              autoHeight
            /> 
          )
        }
        {
          !users && (
            <>
              
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ height:'50vh' }}
              >
                <Typography variant="caption">No Users Available</Typography>
              </Grid>
            </>
          )
        }
    </>
  )
}

export default Users