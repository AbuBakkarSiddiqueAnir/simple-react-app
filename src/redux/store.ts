import { configureStore } from "@reduxjs/toolkit"

import userListSlice from "./slice/UserList"

const store = configureStore({
  reducer: {
    // auth: authSlice.reducer,
    userList: userListSlice,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store