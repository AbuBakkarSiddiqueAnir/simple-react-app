import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { API_URL } from '../../lib/constants';


export const fetchUserList = createAsyncThunk('userList/fetchUserList', async (page: number = 1) => {
  const response = await fetch(`${API_URL}/api/users?page=${page}`);
  const data = await response.json();
  return data;
});


const initialState = {
  data: [],
  isLoading: false,
  error: null,
  message:''
};

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserList.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUserList.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;

    },
    [fetchUserList.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.message = "Data fetching failed";
    },
  },
});

export default userListSlice.reducer;

