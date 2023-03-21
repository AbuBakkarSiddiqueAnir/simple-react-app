

import React from 'react'
import { Table } from '../components'

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

function Users() {
  return (
    <div className='px-8'>
      <h2 className='font-semibold text-2xl leading-7 text-[#323B4B]'>Users List</h2>
      <div className='py-10'>
      <Table data={d}/>
      </div>

    </div>
  )
}

export default Users
