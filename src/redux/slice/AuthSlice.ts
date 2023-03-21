import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../lib/constants";
import { authPostDataType, authStateType } from "../../types/types";

export const signUp = createAsyncThunk(
  "signup/user",
  async (data: authPostDataType) => {
    const response = await fetch(`${API_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  }
);

export const signIn = createAsyncThunk(
  "signIn/user",
  async (data: authPostDataType) => {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  }
);

const initialState: authStateType = {
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signUp.fulfilled.type]: (
      state,
      { payload: { error, message, token } }
    ) => {
      state.isLoading = false;
      state.token = token;
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
      if (error) {
        state.error = error;
      } else {
        state.token = token;
        state.isLoggedIn = true;
        localStorage.setItem("token", token);
      }
    },
  },
});

export const {logout } = authSlice.actions;

export default authSlice.reducer;
