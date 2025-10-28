import React from "react";
import Header from "../../components/Header/Header.jsx";
import BookList from "../../components/BookList/BookList.jsx";
import About from "../About/About.jsx";

const Home = () => {
  return (
    <main>
      <Header />

      {/* Add IDs for scroll navigation */}
      <section id="book-section">
        <BookList />
      </section>

      <section id="about-section">
        <About />
      </section>
    </main>
  );
};

export default Home;
