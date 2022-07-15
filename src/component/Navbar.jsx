import React,{ useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../app/authSlice';
// import { Link } from 'react-router-dom'

import { ListItemIcon, ListItemText } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import PasswordIcon from '@mui/icons-material/Password';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PaymentsIcon from '@mui/icons-material/Payments';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Container from '@mui/material/Container';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import CreditCardIcon from '@mui/icons-material/CreditCard';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
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
    path: '/dashboard/profile',
    icon: <ManageAccountsIcon/>
  },
  {
    name: 'Change password',
    path: '/dashboard/password',
    icon: <PasswordIcon/>
  }
]
const AdminMenuList = [
  {
    name: 'Manage Events',
    path: '/dashboard/events',
    icon: <CalendarMonthIcon/>
  },
  {
    name: 'Manage Users',
    path: '/dashboard/users',
    icon: <GroupIcon/>
  },
  {
    name: 'Manage Finance',
    path: '/dashboard/finance',
    icon: <CreditCardIcon/>
  },
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
    path: '/dashboard/profile',
    icon: <ManageAccountsIcon/>
  },
  {
    name: 'Change password',
    path: '/dashboard/password',
    icon: <PasswordIcon/>
  }
]
const Navbar = () => {
const dispatch = useDispatch();

const [navBackground, setNavBackground] = useState('navbar-transparent')
const [navMove, setNavMove] = useState(false);
const [anchorEl, setAnchorEl] = React.useState(null);

const { isLoggedIn, userId, user } = useSelector((state)=> state.auth)
const [username,setusername]=useState('');
const [role,setRole]=useState(false);
useEffect(()=>{
  if(user){
    // setusername(user.)
    console.log('this guy ->',user);
    setusername(user.first_name+' '+user.last_name);
    if(user.admin){
      setRole(true);
    }
  } 
},[user])

const navRef = useRef()

navRef.current = navBackground
const open = Boolean(anchorEl);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

const handleScroll = () => {
  const show = window.scrollY > 1;
  console.log(show);

  if (show) {
      setNavBackground('navbar-color fixed ')
      setNavMove(true)
  } else {
      setNavBackground('navbar-transparent')
      setNavMove(false)
  }
}
const Handlelogout = ()=>{
  setAnchorEl(null);
  dispatch(logout());
}

useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
}, [])

  return (
    <>
      <nav style={{ zIndex:'10000' }} className={`navbar navbar-expand-lg ${ navRef.current }`}>
        <div className="container-fluid d-flex justify-content-around">
          <div className={ navMove ? 'brand tb':'brand'}>
            <img className="navbar_logo" src="/assets/uu81_logo1.png" alt="LOGO"/>
            <h6>UNIQUE UNIPORT81</h6>
          </div>
          <div 
            className="" id="navbarSupportedContent">
            <form className="d-flex btn-style">
              {
                isLoggedIn ? (
                  <>
                  {/* <button onClick={Handlelogout} className="navbar_btn ">
                    Logout
                  </button> */}
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? 'demo-customized-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      variant="contained"
                      disableElevation
                      onClick={handleClick}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      {username}
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      {
                        role ? (
                          <>
                            {AdminMenuList.map((item,index)=>{
                              return(
                                <MenuItem key={index} component={Link} to={item.path} onClick={handleClose}>
                                    {item.icon}
                                    {item.name}
                                </MenuItem>
                              )
                            })}
                          </>
                        ):( 
                          <>
                            {menuList.map((item,index)=>{
                              return(
                                <MenuItem key={index} component={Link} to={item.path} onClick={handleClose}>
                                    {item.icon}
                                    {item.name}
                                </MenuItem>
                              )
                            })}
                          </>
                        )
                      }
                      
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={Handlelogout} disableRipple>
                          Logout
                      </MenuItem>
                    </StyledMenu>
                  </>
                ):(
                  <>
                    <Link to={'/register'} className={navMove ? 'navbar_btn border':'navbar_btn '}>
                      Register
                    </Link>
                    <Link to={'/login'} className={navMove ? 'navbar_btn border':'navbar_btn '}>
                      SignIn
                    </Link>
                  </>
                )
              }
              
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar