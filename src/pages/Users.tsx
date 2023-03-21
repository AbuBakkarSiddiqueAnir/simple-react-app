

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { Table } from '../components'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUserList } from '../redux/slice/UserList';




function Users() {

  const dispatch = useAppDispatch();
  const {data, isLoading, error} = useAppSelector((state) => state.userList);

  useEffect(() => {
    dispatch(fetchUserList(2));
  }, []);



  return (
    <div className='px-8'>
      <h2 className='font-semibold text-2xl leading-7 text-[#323B4B]'>Users List</h2>
      <div className='py-10'>
      <Table data={data?.data}/>
      </div>

    </div>
  )
}

export default Users




const d = [
  {
      id:1,
      email:'anirmdd@gmail.com',
      user:'anir',
      options:'df'
  },
  {
      id:1,
      email:'anirmdd@gmail.com',
      user:'anir',
      options:'df'
  },
  {
      id:1,
      email:'anirmdd@gmail.com',
      user:'anir',
      options:'df'
  },
  {
      id:1,
      email:'anirmdd@gmail.com',
      user:'anir',
      options:'df'
  },
]

