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

export const createGroups = createAsyncThunk(
  "create/groups",
  async (groups, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ groups }),
      });
      const json = await res.json();
      return json;
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
      })
      .addCase(createGroups.fulfilled, (state, action) => {
        state.groups = action.payload;
      });
  },
});

export default groupsSlice.reducer;
