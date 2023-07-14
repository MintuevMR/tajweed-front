import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
}

export const getBookmarksUser = createAsyncThunk(
  "get/bookmarks",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/bookmarks${id}`)
      const userBookmarks = await res.json()
      return userBookmarks.bookmarkLesson
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)

export const addBookmark = createAsyncThunk(
  "add/bookmark",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/bookmarks`, {
        method: 'PATCH',
        headers: {
          'Content-Type':'application/json',
          Authorization: `Bearer ${thunkAPI.getState().application.token}`
        },
        body: JSON.stringify({id})
      })
      const updated = await res.json()
      return updated
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)

export const createBasket = createAsyncThunk(
  "post/bookmarks",
  async (data, thunkAPI) => {
    try {
      const createBookmarkBasket = await fetch('http://localhost:3000/bookmarks', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        }
      })
      const bookmarksBasket = await createBookmarkBasket.json()
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)


const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookmarksUser.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })
      .addCase(addBookmark.fulfilled, (state, action) => {
        state.bookmarks.push(action.payload);
      });
  },
});

export default bookmarksSlice.reducer;