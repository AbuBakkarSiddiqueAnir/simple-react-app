import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../lib/constants";

type authPostDataType = {
  email:string,
  password:string
}

export const signUp = createAsyncThunk("signup/user", async (data:authPostDataType) => {
  const response = await fetch(`${API_URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result)
  return result;
});

export const signIn = createAsyncThunk("signIn/user", async (data:authPostDataType) => {
  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
});



type authStateType = {
  token: string | null;
  isLoggedIn:boolean;
  isLoading: boolean;
  error: string;
};
const initialState: authStateType = {
  token: null,
  isLoggedIn:false,
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = localStorage.getItem("token");

    },
    logout: (state, action) => {
      state.token = null;
      state.isLoggedIn = false
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signUp.fulfilled.type]: (state, { payload: { error, message } }) => {
      state.isLoading = false;
      if (error) {
        state.error = error;
      } else {
        state.error = message;
      }
    },
    [signUp.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [signIn.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [signIn.fulfilled.type]: (state, { payload: { error, token } }) => {
      state.isLoading = false;
      console.log(token)
      if (error) {
        state.error = error;
      } else {
        state.token = token;
        state.isLoggedIn = true
        localStorage.setItem("token", token);
      }
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
