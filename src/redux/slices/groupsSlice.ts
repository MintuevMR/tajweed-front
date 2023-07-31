import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Item from "antd/es/list/Item";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
}

interface Group {
  _id: string;
  groups: string;
  users: User[];
}

interface GroupsState {
  groups: Group[];
  error?: any; 
}

const initialState: GroupsState = {
  groups: [],
};

type GroupIdAndUserId = { groupId: string; userId: string; };

export const fetchGroups = createAsyncThunk<Group[], void>(
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

export const createGroups = createAsyncThunk<Group[], string>(
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

export const deleteGroups = createAsyncThunk<string, string>(
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

export const updateGroupsInStore = createAsyncThunk<{ groupId: string; updatedGroupName: string }, { groupId: string; updatedGroupName: string }>(
  "edit/groups",
  async ({ groupId, updatedGroupName }, thunkAPI) => {
    try {
      await fetch(`http://localhost:3000/group/${groupId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ groups: updatedGroupName }),
      });
      return { groupId, updatedGroupName };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUserInGroup = createAsyncThunk<
{ groupId: string; data: any },
GroupIdAndUserId,
{ rejectValue: unknown }
>(
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

export const deleteUserInGroup = createAsyncThunk<
{ groupId: string; userId: string },
GroupIdAndUserId,
{ rejectValue: unknown }
>(
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

      return { groupId, userId };
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

      .addCase(createGroups.fulfilled, (state, action: PayloadAction<Group[]>) => {
        state.groups.push(...action.payload);
      })

      .addCase(deleteGroups.fulfilled, (state, action) => {
        state.groups = state.groups.filter(
          (group) => group._id !== action.payload
        );
      })
      .addCase(deleteGroups.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(updateGroupsInStore.fulfilled, (state, action: PayloadAction<{ groupId: string; updatedGroupName: string }>) => {
        state.groups = state.groups.map(item => {
          if(item._id === action.payload.groupId) {
            return {...item, groups: action.payload.updatedGroupName}
          }
          return item
        })
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
              (user) => user._id !== action.payload.userId
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
