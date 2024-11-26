import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, registerAPI, checkAuthAPI } from './authAPI';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await loginAPI(credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const response = await registerAPI(credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, thunkAPI) => {
  try {
    const response = await checkAuthAPI();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user; // Should be the username
        console.log('User set in Redux:', action.payload.user);
        localStorage.setItem('token', action.payload.token);
    })
      
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        console.log('abc:', state.user);
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
