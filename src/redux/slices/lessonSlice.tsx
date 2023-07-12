import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
  error: null,
  loading: null,
  lessons: []
}

export const fetchLessons = createAsyncThunk("fetch/lessons",  async(data, thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3000/lessons`);
        const lessons = await res.json();
        return lessons
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

const lessonSlice = createSlice({
    name: "lessons",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLessons.fulfilled, (state, action) => {
            state.lessons = action.payload
        })
        .addCase(fetchLessons.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})


export default lessonSlice.reducer;
