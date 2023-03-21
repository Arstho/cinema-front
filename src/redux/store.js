import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import categorySlice from './features/category/categorySlice'
import genreSlice  from './features/genre/genreSlice'
import moviesSlice  from './features/movie/movieSlice'


export const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
    genre: genreSlice,
    movie: moviesSlice
  },
})
