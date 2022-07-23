/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../app/authSlice';
// import { Link } from 'react-router-dom'

// import { ListItemIcon, ListItemText } from '@mui/material';
import { alpha } from '@mui/material/styles';
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

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';


import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

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

const Navcontainer = styled.div`
  width:100%;
  background-color: ${props=> props.dash ? '#fff': props.bg ? '#fff':'transparent'};
  padding:${props=>props.mobile ? '20px 20px':'20px 70px'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  box-shadow: ${props => props.dash ? '0px 0px 10px #ccc': 'none'};
  
`
const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.dash ? ' #000': ' #ffffff'};
  text-decoration: none;
  h6{
    margin:0;
  }
  img{
    width: 50px;
    height: 40px;
  }
`
const NavMenu = styled.ul`
  display: ${ props=> props.mobile ? 'none':'flex'};
  align-items: center;
  color: #ffffff;
  list-style-type: none;
  position: relative;
  margin: 0;
  img{
    width: 50px;
    height: 40px;
  }
`
const NavMobileBtn = styled.button`
  display: ${props=>props.mobile ? 'flex':'none'};
  border: none;
  outline: none;
  background-color: #fff;
  padding: 5px ;
  border-radius: 5px;
`
const NavMobileMenu = styled.div`
  display: ${props=> props.mobile ? 'block':'none'};
  background-color: #000;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  right:${props => props.open ? '0':'-100%'};
  z-index: 1;
  transition: all .3s ease-in-out;
`
const NavClose = styled.div`
  background-color: #fff;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 20px;
  right:20px;
  border-radius: 50%;
  color: #000;
  display:flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0,0,0,.5);
  &:hover{
    cursor: pointer;
  }
`
const NavDropdownbtn = styled.button`
  padding: 5px 50px;
  border:1px solid #ccc;
  border-radius: 5px;
  color: #000;
  background-color: #fff;
  svg{
    margin-left: 20px;
  }
  &:hover{
    cursor: pointer;
    box-shadow:0px 0px 3px #ccc;

  }
`
const NavDropdown = styled.div`
  width: 300px;
  min-height: 300px;
  overflow: hidden;
  padding:20px 50px;
  position: absolute;
  background-color: #fff;
  top: 50px;
  box-shadow: 0px 0px 7px rgba(0,0,0, 0.3);
  border-radius: 5px;
  display: ${props => props.open ? 'flex':'none'};
  flex-flow: column;
  justify-content: center;
  align-items: center;
  a{
    text-decoration: none;
    padding: 10px ;
    width: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    color: #000;
    svg{
      margin-right: 20px;
    }
  }
`
const NavMobileMenuList = styled.ul`
  width: 80%;
  padding: 150px 0px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 0 auto;
  a{
      width: 100%;
      display: flex;
      padding: 10px 0px;
      justify-content: center;
      margin-bottom: 20px;
      text-decoration:none;
      border: 1px solid #ccc;
      color:#fff;
      border-radius: 5px;
      &:hover{
        color: #000;
        background-color: #fff;
      }
  }

`
const Navbar = () => {
    const dispatch = useDispatch();

    const [navBackground, setNavBackground] = useState('navbar-transparent')
    const [navMove, setNavMove] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const { isLoggedIn, userId, user } = useSelector((state)=> state.auth)
    const [username,setusername]=useState('');
    const [role,setRole]=useState(false);
    const [menu ,setMenu] = useState(false);
    const [mobile ,setMobile] = useState(false);
    const [navdash ,setNavdash] = useState(false);
    const [dropdown ,setDropdown] = useState(false);
    let location = useLocation();
    useEffect(()=>{
      console.log(location);
      if(location.pathname == '/dashboard'){
        setNavdash(true)
      }
    },[location])
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
    useEffect(()=>{
      
      console.log('mobile: ',isMobile);

      if (isMobile){
        setMobile(true)
      }else{
        setMobile(false)
      }
        
    },[isMobile])
    const navRef = useRef()

    navRef.current = navBackground
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      // setAnchorEl(null);
      setDropdown(!dropdown)
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
     <Navcontainer bg={navMove} dash={navdash} mobile={mobile}>
        <NavLogo to="/" dash={navdash} >
            <img className="navbar_logo" src="/assets/uu81_logo1.png" alt="LOGO"/>
            <h6>UNIQUE UNIPORT81</h6>
        </NavLogo>
        <NavMobileBtn mobile={isMobile} onClick={e => setMenu(!menu)}>
          <MenuIcon/>
        </NavMobileBtn>
        <NavMobileMenu mobile={isMobile} open={menu}>
            <NavClose onClick={e => setMenu(!menu)}>
              <CloseIcon/>
            </NavClose>
            <NavMobileMenuList>

                {
                  isLoggedIn ? (
                    <>
                      { role ? (
                        <>
                          {  
                            AdminMenuList.map((item,index)=>{
                                    return(
                                      <Link key={index}  to={item.path} onClick={e => setMenu(!menu)}>
                                          {item.icon}
                                          {item.name}
                                      </Link>
                                    )
                            })
                          }
                        </>
                        ):(
                          <>
                            {
                              menuList.map((item,index)=>{
                                    return(
                                      <Link key={index}  to={item.path} onClick={e => setMenu(!menu)}>
                                          {item.icon}
                                          {item.name}
                                      </Link>
                                    )
                              })
                            }
                          </>
                        )
                      }
                      <Link to={'/'} onClick={Handlelogout} >
                        Logout
                      </Link>
                  </>
                ):(
                  <>
                
                    <Link to={'/register'} onClick={e => setMenu(!menu)} className="">
                      Register
                    </Link>
                    <Link to={'/login'} onClick={e => setMenu(!menu)} className="">
                      SignIn
                    </Link>
                  </>
                )
              }

            </NavMobileMenuList>
        </NavMobileMenu>
        <NavMenu mobile={isMobile}>
          {
            isLoggedIn ? (
                  <>
                    <NavDropdownbtn onClick={e => setDropdown(!dropdown)}>{username} <ExpandMoreIcon/></NavDropdownbtn>
                    <NavDropdown open={dropdown}>
                      {
                        role ? (
                          <>
                            {AdminMenuList.map((item,index)=>{
                              return(
                                <Link key={index} to={item.path} onClick={handleClose}>
                                    {item.icon}
                                    {item.name}
                                </Link>
                              )
                            })}
                          </>
                        ):( 
                          <>
                            {menuList.map((item,index)=>{
                              return(
                                <Link key={index} to={item.path} onClick={handleClose}>
                                    {item.icon}
                                    {item.name}
                                </Link>
                              )
                            })}
                          </>
                        )
                      }
                      
                      <Divider sx={{ my: 0.5 }} />
                      <Link to={'/'} onClick={Handlelogout} disableRipple>
                          Logout
                      </Link>
                    </NavDropdown>
                  </>
                ):(
                  <>
                    <li class="nav-item">
                      <Link to={'/register'} className={navMove ? 'navbar_btn border ':'navbar_btn '}>
                        Register
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={'/login'} className={navMove ? 'navbar_btn border ':'navbar_btn '}>
                        SignIn
                      </Link>
                    </li>
                  </>
                )
              } 
 
        </NavMenu>
     </Navcontainer>
    </>
  )
}

export default Navbar