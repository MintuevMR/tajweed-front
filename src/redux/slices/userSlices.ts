import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

// Инфо пользователя
export const userInfo = createAsyncThunk(
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
        return json;
      } catch (error) {
        thunkAPI.rejectWithValue(error);
      }
    }
  );

// Изменение пользователя
export const userChangeInfo = createAsyncThunk(
  "user/Change",
  async ({ firstName, lastName }, thunkAPI) => {
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
      return json;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);


export const userChangeAvatar = createAsyncThunk(
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
        return json;
      } catch (error) {
        thunkAPI.rejectWithValue(error);
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
        state.user = action.payload
      })
      .addCase(userChangeInfo.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(userChangeAvatar.fulfilled, (state, action) => {
        state.user = action.payload
      })
  },
});

export default userSlices.reducer;
