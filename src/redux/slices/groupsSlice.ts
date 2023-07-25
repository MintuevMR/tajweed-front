import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};
export const fetchGroup = createAsyncThunk(
  "fetch/groups",
  async (data, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/groups`);
      const groups = await res.json();
      return groups;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      
    }
  }
);

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroup.fulfilled, (state, action) => {
        state.groups = action.payload;
      })
      .addCase(fetchGroup.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default groupsSlice.reducer;
