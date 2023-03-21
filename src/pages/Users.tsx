

import React, { useEffect, useState } from 'react'
import { Pagination, Table } from '../components'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUserList } from '../redux/slice/UserList';

function Users() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.userList);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if(data.length < 1)  dispatch(fetchUserList(1));
    setCurrentPage(data?.page)
  }, []);

  const fetchPageData = (page: number) => {
    dispatch(fetchUserList(page));
    setCurrentPage(page)
  }


  return (
    <div className='px-8'>
      <h2 className='font-semibold text-2xl leading-7 text-[#323B4B]'>Users List</h2>
      <div className='py-10'>
        <Table data={data?.data} />
      </div>
      <Pagination currentPage={currentPage} totalPages={data?.total_pages} onPageChange={fetchPageData} />

    </div>
  )
}

export default Users

