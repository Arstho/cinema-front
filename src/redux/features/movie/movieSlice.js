import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  status: "",
  error: null,
};

export const fetchMovies = createAsyncThunk("fetch/movies", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/movie");
    return res.json();
  } catch (error) {
    return error;
  }
});

export const addMovie = createAsyncThunk(
  "add/movie",
  async (
    {
      name,
      description,
      preview,
      ref,
      country,
      category,
      genre,
      director,
      budget,
      duration,
      release,
      raiting,
    },
    thunkAPI,
  ) => {
    try {
      const movie = await fetch("http://localhost:4000/movie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          preview,
          ref,
          country,
          category,
          genre,
          director,
          budget,
          duration,
          release,
          raiting,
        }),
      });
      return movie.json();
    } catch (error) {
      return error;
    }
  },
);

export const deleteMovie = createAsyncThunk("delete/movie", async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/movie/${id}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (error) {
    return error;
  }
});

export const updateMovie = createAsyncThunk("updete/movie", async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/movie/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    return res.json();
  } catch (error) {
    return error;
  }
});

export const moviesSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //
      .addCase(addMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies.push(action.payload);
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //
      .addCase(deleteMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = state.movies.filter((movie) => movie.id !== action.payload.id);
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //
      .addCase(updateMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedMovie = action.payload;
        const existingMovie = state.movies.find((movie) => movie.id === updatedMovie.id);
        if (existingMovie) {
          Object.assign(existingMovie, updatedMovie);
        }
      })
      .addCase(updateMovie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
