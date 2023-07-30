import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Ayahs {
  audio: string;
  text: string;
}

interface Surah {
  ayahs: Ayahs[];
  englishName: string;
  englishNameTranslation: string;
  name: string;
  number: number;
  numberOfAyahs: number;
  revelationType: string;
}

interface QuranState {
  surahs: Surah[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  surahs: [],
  loading: false,
  error: null,
};

export const fetchSurahs = createAsyncThunk<Surah[], void, { rejectValue: string | unknown}>(
  "quran/fetchSurahs",

  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://api.alquran.cloud/v1/surah");
      const surahs = res.json();
      return surahs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
      .addCase(fetchSurahs.fulfilled, (state, action: PayloadAction<Surah[]>) => {
        state.loading = false;
        state.surahs = action.payload.data;
      })
      .addCase(fetchSurahs.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quranSlice.reducer;
