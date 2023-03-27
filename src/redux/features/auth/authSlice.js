import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: [],
  token: localStorage.getItem("token"),
  isLoading: false,
  status: null,
  sub: localStorage.getItem("subToken"),
};

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );
  return JSON.parse(jsonPayload);
}

export const authExit = createAsyncThunk("auth/exit", async (data, thunkAPI) => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("subToken");
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ username, password }) => {
    try {
      const response = await fetch("http://localhost:4000/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.token) {
        window.localStorage.setItem("token", data.token);
        const user = await parseJwt(data.token);
        window.localStorage.setItem("sub", user.subscription);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const loginUser = createAsyncThunk("auth/loginUser", async ({ username, password }) => {
  try {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.token) {
      window.localStorage.setItem("token", data.token);
    }
    if (data.subToken) {
      window.localStorage.setItem("subToken", data.subToken);
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const subscriptionUser = createAsyncThunk("auth/subUser", async ({ userId, bool }) => {
  try {
    const response = await fetch(`http://localhost:4000/user${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscription: bool }),
    });
    const data = await response.json();
    if (bool) {
      window.localStorage.setItem("subToken", data.subToken);
      return data;
    } else {
      localStorage.removeItem("subToken");
    }
    return null;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

export const getUsers = createAsyncThunk("get/users", async () => {
  try {
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const getUser = createAsyncThunk("get/users", async ({ id }) => {
  try {
    const response = await fetch(`http://localhost:4000/user:${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    throw error;
  }
});

export const deleteUserByName = createAsyncThunk("delete/user", async (username, thunkAPI) => {
  try {
    await fetch(`http://localhost:4000/${username}`, {
      method: "DELETE",
    });
    return username;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.users = [];
      state.token = null;
      state.isLoading = false;
      state.status = null;
    },
  },
  extraReducers: {
    [subscriptionUser.fulfilled]: (state, action) => {
      state.sub = action.payload;
    },
    [getUser.fulfilled]: (state, action) => {
      state.sub = action.payload.subscription;
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = parseJwt(state.token);
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [registerUser.rejectWithValue]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = parseJwt(state.token);
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [authExit.fulfilled]: (state, action) => {
      state.token = null;
      state.user = null;
      state.sub = null;
    },
    [loginUser.rejectWithValue]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.user = parseJwt(state.token);
    },
    [deleteUserByName.fulfilled]: (state, action) => {
      state.users = state.users.filter((user) => user.username !== action.payload);
    },
  },
});

export const checkIsAuth = (state) => Boolean(state.auth.token);
export const { logout } = authSlice.actions;
export default authSlice.reducer;
