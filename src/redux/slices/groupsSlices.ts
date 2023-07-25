import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

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
        .addCase(createGroups.fulfilled, (state, action) => {
            state.groups = action.payload
        })
    }
})

export default groupsSlice.reducer;