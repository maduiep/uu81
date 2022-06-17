import React from 'react'
import { Outlet,Link as RouterLink } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import LogoutIcon from '@mui/icons-material/Logout';
import PasswordIcon from '@mui/icons-material/Password';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PaymentsIcon from '@mui/icons-material/Payments';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Container from '@mui/material/Container';

const SideMenu = styled.div`
  width: 80%;
  height: 100vh;
  border: 1px solid #ccc;
  border-top-right-radius: 20px;
  background-color: #2a0d6dc7;
  padding-top: 70px;
  a{
    color: #fff;
  }
  svg{
    fill:#fff
  }
  /* padding: 20px; */
`
const menuList = [
  {
    name: 'My Bookings',
    path: '/dashboard/bookings',
    icon: <CalendarTodayIcon/>
  },
  {
    name: 'Payments',
    path: '/dashboard/payments',
    icon: <PaymentsIcon/>
  },
  {
    name: 'Profile',
    path: '/dashboard/bookings',
    icon: <ManageAccountsIcon/>
  },
  {
    name: 'Change password',
    path: '/dashboard/password',
    icon: <PasswordIcon/>
  }
]
const SideBar =({data})=>{
  return (
    <SideMenu>
        <List>
          { data?.map((item, i)=>{
              return (
                <ListItem key={i} className="">
                  <ListItemButton component={ RouterLink } color='inherit' underline="none"  to={item.path}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name}/>
                  </ListItemButton>
                </ListItem >
              );
            })
          }
        </List>
    </SideMenu>
  )
}
const DashLayout = () => {
  return (
    <>
        <Navbar />
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <SideBar data={menuList}/>
            </Grid>
            <Grid item xs={8}>
              <Container maxWidth="md" sx={{
                paddingTop:5
              }}>
                <Outlet/>
              </Container>
            </Grid>
          </Grid>
        <Footer />
    </>
  )
}

export default DashLayout