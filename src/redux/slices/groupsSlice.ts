import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

export const fetchGroups = createAsyncThunk(
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

export const fetchGroup = createAsyncThunk(
  "fetch/group",
  async (data, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/group${groupId}`);
      const group = await res.json();
      return group;
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

export const deleteGroups = createAsyncThunk(
  "delete/groups",
  async (groupId, thunkAPI) => {
    try {
      await fetch(`http://localhost:3000/group/${groupId}`, {
        method: "DELETE",
      });
      return groupId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateGroupsInStore = createAsyncThunk(
  "edit/groups",
  async ({ groupId, updatedGroupName }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/group/${groupId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ groups: updatedGroupName }),
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
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.groups = action.payload;
      })
      .addCase(fetchGroup.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(createGroups.fulfilled, (state, action) => {
        state.groups.push(action.payload);
      })
      .addCase(deleteGroups.fulfilled, (state, action) => {
        state.groups = state.groups.filter(
          (group) => group._id !== action.payload
        );
      })
      .addCase(deleteGroups.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateGroupsInStore.fulfilled, (state, action) => {
        const index = state.groups.findIndex(
          (group) => group._id === action.payload._id
        );
        if (index !== -1) {
          state.groups[index].groups = action.payload.groups;
        }
      })
      .addCase(updateGroupsInStore.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default groupsSlice.reducer;
