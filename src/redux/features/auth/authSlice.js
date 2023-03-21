import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
  user: null,
  users: [],
  token: null,
  isLoading: false,
  status: null,
}

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ username, password }) => {
    try {
      const { data } = await axios.post('/registration', {
        username,
        password,
      })
      if (data.token) {
        window.localStorage.setItem('token', data.token)
      }
      return data
    } catch (error) {
      console.log(error)
    }
  },
)

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }) => {
    try {
      const { data } = await axios.post('/login', {
        username,
        password,
      })
      if (data.token) {
        window.localStorage.setItem('token', data.token)
      }
      return data
    } catch (error) {
      console.log(error)
    }
  },
)

export const getUsers = createAsyncThunk("get/users", async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const deleteUserByName = createAsyncThunk(
  "delete/user",
  async (username, thunkAPI) => {
    try {
      await fetch(`/${username}`, {
        method: "DELETE",
      });
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.users = []
      state.token = null  
      state.isLoading = false
      state.status = null
    },
  },
  extraReducers: {
    // Register user
    [registerUser.pending]: (state) => {
      state.isLoading = true
      state.status = null
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false
      state.status = action.payload.message
      state.user = action.payload.user
      state.token = action.payload.token
    },
    [registerUser.rejectWithValue]: (state, action) => {
      state.status = action.payload.message
      state.isLoading = false
    },
    // Login user
    [loginUser.pending]: (state) => {
      state.isLoading = true
      state.status = null
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false
      state.status = action.payload.message
      state.user = action.payload.user
      state.token = action.payload.token
    },
    [loginUser.rejectWithValue]: (state, action) => {
      state.status = action.payload.message
      state.isLoading = false
    },
    // get users
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    // Проверка авторизации
    [deleteUserByName.fulfilled]: (state, action) => {
      state.users = state.users.filter(
        (user) => user.username !== action.payload
      );
    }
  },
})

export const checkIsAuth = (state) => Boolean(state.auth.token)
export const { logout } = authSlice.actions
export default authSlice.reducer