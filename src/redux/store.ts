import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./slice/AuthSlice";
import userListSlice from "./slice/UserListSlice"

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    userList: userListSlice,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store