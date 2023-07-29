import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  surahs: [],
  loading: false,
  error: null,
};

export const fetchSurahs = createAsyncThunk(
  "quran/fetchSurahs",

  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://api.alquran.cloud/v1/surah");
      const surahs = res.json();
      return surahs;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const quranSlice = createSlice({
  name: "quran",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSurahs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSurahs.fulfilled, (state, action) => {
        state.loading = false;
        state.surahs = action.payload.data;
      })
      .addCase(fetchSurahs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quranSlice.reducer;
