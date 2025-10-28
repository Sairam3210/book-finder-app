import React, { useState, useContext, useEffect, useCallback } from "react";

const BASE_URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("Your Search Results");

  // Fetch books from Open Library API
  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${searchTerm}`);
      const data = await response.json();

      if (data && data.docs) {
        const newBooks = data.docs.slice(0, 30).map((book) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = book;

          return {
            id: key,
            author: author_name || ["Unknown Author"],
            cover_id: cover_i,
            edition_count: edition_count || "N/A",
            first_publish_year: first_publish_year || "Unknown",
            title: title || "No Title",
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 0) {
          setResultTitle("Your Search Results");
        } else {
          setResultTitle("No Results Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Results Found!");
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
      setResultTitle("Something went wrong. Please try again.");
    }
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use global context
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
