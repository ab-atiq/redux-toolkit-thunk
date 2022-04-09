import { createSlice } from "@reduxjs/toolkit";
import books from "../../fakeData/books.json";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    discover: books,
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
});

export const {
  addToReadingList,
  removeFromReadingList,
  finishedFromReadingList,
} = bookSlice.actions;

export default bookSlice.reducer;
