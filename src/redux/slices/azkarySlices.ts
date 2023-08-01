import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AzkaryState {
  azkary: AzkaryItem[];
}

export interface AzkaryItem {
  id: string;
  headerText: string;
  number: string;
  arabText: string;
  translateText: string;
  transcriptText: string;
  discriptionText: string;
  footerCount: string;
  footerName: string;
  __v: number;
}

export const fetchAzkary = createAsyncThunk< AzkaryItem[], void, { rejectValue: string | unknown}>("fetch/azkary", async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/azkary`);
  
      const azkary = await res.json();
  
      if (azkary.error) {
        return thunkAPI.rejectWithValue(azkary);
      }
      return azkary;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });

  const azkarySclices = createSlice({
    name: "azkary",
    initialState: { azkary: [] } as AzkaryState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAzkary.fulfilled, (state, action) => {
          state.azkary = action.payload;
        })
    },
  });
  
  export default azkarySclices.reducer;