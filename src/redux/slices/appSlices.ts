import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: null,
  signUp: false,
  signIn: false,
};

// Регистрация пользователя
export const authSignUp = createAsyncThunk(
  "auth/SignUp",
  async (_, thunkAPI) => {
    try {
      return;
    } catch (error) {
      return;
    }
  }
);

// Вход пользователя
export const authSignIn = createAsyncThunk(
  "auth/SignIn",
  async (_, thunkAPI) => {
    try {
      return;
    } catch (error) {
      return;
    }
  }
);

const appSlices = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Регистрация
      .addCase(authSignUp.pending, (state, action) => {
        console.log(action);
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(authSignUp.rejected, (state, action) => {
        console.log(action);
      })
      //Вход
      .addCase(authSignIn.pending, (state, action) => {
        console.log(action);
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(authSignIn.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export default appSlices.reducer;
