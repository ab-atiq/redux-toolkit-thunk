import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import books from "../../fakeData/books.json";

// First, create the thunk
export const fetchBooks = createAsyncThunk(
  "books/fetchByIdStatus",
  async () => {
    const response = await fetch(
      "https://redux-book-shelf.herokuapp.com/books"
    ).then((res) => res.json());

    return response.data;
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: {
    discover: [],
    readingList: [],
    finishedList: [],
  },
  reducers: {
    addToReadingList: (state, action) => {
      state.readingList.push(action.payload);
    },
    removeFromReadingList: (state, action) => {
      state.readingList = state.readingList.filter(
        (book) => book.id !== action.payload
      );
    },
    finishedFromReadingList: (state, action) => {
      state.finishedList.push(action.payload);
      state.readingList = state.readingList.filter(
        (book) => book.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.discover = action.payload;
    });
  },
});

export const {
  addToReadingList,
  removeFromReadingList,
  finishedFromReadingList,
} = bookSlice.actions;

export default bookSlice.reducer;
