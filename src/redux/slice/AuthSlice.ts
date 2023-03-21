import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../lib/constants";

export const signUp = createAsyncThunk("signup/user", async (data) => {
  const response = await fetch(`${API_URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
});

export const signIn = createAsyncThunk("signIn/user", async (data) => {
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

export interface User {
  email: string;
  name: string;
  id: string;
  isLoggedIn: boolean;
}

type authStateType = {
  token: string;
  loading: boolean;
  error: string;
};
const initialState: authStateType = {
  token: "",
  loading: false,
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
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signUp.fulfilled.type]: (state, { payload: { error, message } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.error = message;
      }
    },
    [signUp.pending.type]: (state, action) => {
      state.loading = true;
    },
    [signIn.pending.type]: (state, action) => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, { payload: { error, token } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.token = token;
        localStorage.setItem("token", token);
      }
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
