import React from 'react'
import { axiosGet } from './../../api/axios';

const Users = () => {
    const getUsers= async ()=>{
      const response = await axiosGet.get('/')
    }
  return (
    <div>Users</div>
  )
}

export default Users