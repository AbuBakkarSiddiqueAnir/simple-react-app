

import React, { useEffect, useState } from 'react'
import { Pagination, Table } from '../components'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUserList } from '../redux/slice/UserListSlice';

function Users() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.userList);
  const [currentPage, setCurrentPage] = useState(1);
  const [MorePage, setMorePage] = useState(false)

  const fetchPageData = (page: number) => {
    if (page > data?.total_pages) {
      setMorePage(true)
      return
    }

    dispatch(fetchUserList(page));
    setCurrentPage(page)
  }

  useEffect(() => {

    if (data.length < 1) dispatch(fetchUserList(1));
    setCurrentPage(data?.page)

  }, [data]);

  return (
    <div className='px-8'>
      <h2 className='font-semibold text-2xl leading-7 text-[#323B4B]'>Users List</h2>
      <div className='py-10'>
        {MorePage ? (
          <div>
            No more pages available
          </div>
        ) : (
          <Table data={data?.data} />
        )}
      </div>
      <Pagination currentPage={currentPage} totalPages={data?.total_pages} onPageChange={fetchPageData} />

    </div>
  )
}

export default Users

