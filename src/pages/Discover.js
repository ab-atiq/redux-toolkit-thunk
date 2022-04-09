import React, { useEffect } from "react";
import Book from "../components/Book/Book";
// import books from '../fakeData/books.json'
import PageLayout from "../components/PageLayout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../Redux/Slices/bookSlice";

const Discover = () => {
  const dispatch = useDispatch();

  // call the fetchBooks function
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const discover = useSelector((state) => state.books.discover);

  return (
    <PageLayout>
      {discover.map((book) => (
        <Book key={book.id} book={book} discover={discover} />
      ))}
    </PageLayout>
  );
};

export default Discover;
