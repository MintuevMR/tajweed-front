import { createSlice, createAsyncThunk, PayloadAction, Draft, Dispatch } from "@reduxjs/toolkit";

interface UserState {
  user: UserItem;
  bookmarks: any[];
}

interface UserItem {
  _id: string;
  login: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  avatar: string; 
  __v: number;
}

const initialState: UserState = {
  user: {
    _id: "",
    login: "",
    firstName: "",
    lastName: "",
    role: "",
    password: "",
    avatar: "",
    __v: 0,
  },
  bookmarks: [],
};

// Инфо пользователя
export const userInfo = createAsyncThunk<UserItem, void, { rejectValue: Error }>(
  "user/Info",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const json = await res.json();
      return json as UserItem;
    } catch (error) {
      throw error; // используем throw вместо thunkAPI.rejectWithValue
    }
  }
);

// Изменение пользователя
export const userChangeInfo = createAsyncThunk<
  UserItem,
  { firstName: string; lastName: string }
>("user/Change", async ({ firstName, lastName }, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3000/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    });
    const json = await res.json();
    if (!res.ok) {
      return thunkAPI.rejectWithValue(json);
    }
    return json as UserItem;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const userChangeAvatar = createAsyncThunk<UserItem, any>(
  "user/ChangeAvatar",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/profile/change-img", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: data,
      });
      const json = await res.json();
      if (!res.ok) {
        return thunkAPI.rejectWithValue(json);
      }
      return json as UserItem;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const bookmark = createAsyncThunk<any, string>(
  "user/addBookmark",
  async (moduleId, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/bookmark", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({ moduleId }),
      });
      const json = await res.json();
      if (!res.ok) {
        return thunkAPI.rejectWithValue(json);
      }
      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userChangeInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userChangeAvatar.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(bookmark.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default userSlices.reducer;
