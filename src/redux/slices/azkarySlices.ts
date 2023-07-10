import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    azkary: [],
}

export const fetchAzkary = createAsyncThunk("fetch/azkary", async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/azkary`);
  
      const azkary = await res.json();
  
      if (azkary.error) {
        return thunkAPI.rejectWithValue(azkary);
      }
      return azkary;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  const azkarySclices = createSlice({
    name: "azkary",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAzkary.fulfilled, (state, action) => {
          console.log(action.payload);
          state.azkary = action.payload;
        })

    },
  });
  
  export default azkarySclices.reducer;