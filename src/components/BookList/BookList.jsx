import React from "react";
import { useGlobalContext } from "../../context.js";
import Book from "../BookList/Book.jsx";
import Loading from "../Loader/Loader.jsx";
import coverImg from "../../images/not-found.png";
import "./BookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  // Add cover fallback for each book
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  // Show loader
  if (loading) return <Loading />;

  // Handle empty results
  if (!booksWithCovers.length) {
    return (
      <section className="booklist">
        <div className="container">
          <div className="section-title">
            <h2>{resultTitle}</h2>
          </div>
          <p className="text-center fs-18 fw-5">
            No results found. Try searching for another title.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {booksWithCovers.slice(0, 30).map((item, index) => (
            <Book key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
