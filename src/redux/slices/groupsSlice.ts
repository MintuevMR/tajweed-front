import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

export const fetchGroups = createAsyncThunk(
  "fetch/groups",
  async (_, thunkAPI) => {
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
export const addUserInGroup = createAsyncThunk(
  "addUser/groups",
  async ({ groupId, userId }, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:3000/group/${groupId}/add-user/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      return { groupId, data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUserInGroup = createAsyncThunk(
  "deleteUser/groups",
  async ({ groupId, userId }, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:3000/group/${groupId}/delete-user/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      return { groupId, data };
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
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.groups = action.payload;
      })
      .addCase(fetchGroups.rejected, (state, action) => {
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
      })

      .addCase(addUserInGroup.fulfilled, (state, action) => {
        state.groups = state.groups.map((item) => {
          if (item._id === action.payload.groupId) {
            item.users.push(action.payload.data);
          }
          return item;
        });
      })

      .addCase(deleteUserInGroup.fulfilled, (state, action) => {
        state.groups = state.groups.map((item) => {
          if (item._id === action.payload.groupId) {
            item.users = item.users.filter(
              (user) => user._id !== action.payload.data._id
            );
          }
          return item;
        });
        console.log(state.groups);
      })

      .addDefaultCase((state) => state);
  },
});

export default groupsSlice.reducer;
