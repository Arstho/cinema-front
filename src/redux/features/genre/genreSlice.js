import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: [],
};

export const fetchGenres = createAsyncThunk(
  "fetch/genres",
  async (_, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/genre");
      return res.json();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const fetchGenreById = createAsyncThunk(
  "fetch/genreById",
  async (id, thunkApi) => {
    try {
      const res = await fetch(`http://localhost:4000/genre/${id}`);
      return res.json();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const addGenre = createAsyncThunk(
  "add/genre",
  async (name, thunkApi) => {
    try {
      const addedGenre = await fetch("http://localhost:4000/genre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
        }),
      });
      return addedGenre.json();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const patchGenre = createAsyncThunk(
  "patch/genre",
  async ({ id, name }, thunkApi) => {
    try {
      const patchedGenre = await fetch(
        `http://localhost:4000/genre/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
          }),
        }
      );
      return patchedGenre.json();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const deleteGenre = createAsyncThunk(
  "delete/genre",
  async (id, thunkApi) => {
    try {
      const deletedGenre = await fetch(
        `http://localhost:4000/genre/${id}`,
        {
          method: "DELETE",
        }
      );
      return deletedGenre.json();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genre = action.payload;
      })
      .addCase(fetchGenreById.fulfilled, (state, action) => {
        state.genre = action.payload;
      })
      .addCase(addGenre.fulfilled, (state, action) => {
        state.genre.push(action.payload);
      })
      .addCase(patchGenre.fulfilled, (state, action) => {
        state.genre = state.genre.map((item) => {
          if (item._id === action.payload._id) {
            item = action.payload;
          }
          return item;
        });
      })
      .addCase(deleteGenre.fulfilled, (state, action) => {
        state.genre = state.categories.filter(
          (item) => item._id !== action.payload._id
        );
      });
  },
});

export default categoriesSlice.reducer;
