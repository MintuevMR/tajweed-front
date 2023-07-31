import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
//import { ThunkAPI } from "@reduxjs/toolkit/dist/configureStore";

import {
  handleUserInfoFulfilled,
  handleUserChangeInfoPending,
  handleUserChangeInfoFulfilled,
  handleUserChangeInfoRejected,
  handleUserChangeAvatarFulfilled,
  handleBookmarkFulfilled,
  handleUserAllFulfilled,
} from "./userHendlers";

interface UserState {
  user: UserItem;
  users: UserItem[];
  bookmarks: IBookmarks[];
  error: unknown;
}

interface IBookmarks {
  _id: string;
  name: string;
  title: string;
  description: string;
  text: string;
  ref: string;
  __v: number;
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
  user: {} as UserItem,
  users: [],
  bookmarks: [],
  error: null,
};

type AsyncThunkReturnType = UserItem;

// Инфо пользователя
export const userInfo = createAsyncThunk<
  AsyncThunkReturnType,
  void,
  { state: RootState }
>("user/Info", async (_, thunkAPI) => {
  // const { application } = thunkAPI.getState() as {
  //   application: { token: string };
  // };

  try {
    const res = await fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const json = await res.json();
    return json;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

// Изменение пользователя
export const userChangeInfo = createAsyncThunk<
  AsyncThunkReturnType,
  { firstName: string; lastName: string },
  { state: RootState }
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

    if (json.error) {
      return thunkAPI.rejectWithValue(json.error);
    }

    return json;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const userChangeAvatar = createAsyncThunk<
  void,
  FormData,
  { state: RootState }
>("user/ChangeAvatar", async (data: FormData, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3000/profile/change-img", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
      body: data,
    });
    const json = await res.json();
    return json;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const bookmark = createAsyncThunk<
  AsyncThunkReturnType,
  void,
  { state: RootState }
>("user/addBookmark", async (moduleId, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3000/bookmark", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
      body: JSON.stringify({ moduleId }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const userAll = createAsyncThunk("user/all", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3000/users");
    const user = await res.json();
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userInfo.fulfilled, handleUserInfoFulfilled)
      .addCase(userChangeInfo.pending, handleUserChangeInfoPending)
      .addCase(userChangeInfo.fulfilled, handleUserChangeInfoFulfilled)
      .addCase(userChangeInfo.rejected, handleUserChangeInfoRejected)
      .addCase(userChangeAvatar.fulfilled, handleUserChangeAvatarFulfilled)
      .addCase(bookmark.fulfilled, handleBookmarkFulfilled)
      .addCase(userAll.fulfilled, handleUserAllFulfilled);
  },
});

export default userSlices.reducer;
