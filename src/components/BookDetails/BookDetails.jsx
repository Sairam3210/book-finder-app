import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Loader/Loader.jsx";
import coverImg from "../../images/not-found.png";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;

          const newBook = {
            description:
              typeof description === "string"
                ? description
                : description?.value || "No description found",
            title: title || "No title available",
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: Array.isArray(subject_places)
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: Array.isArray(subject_times)
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: Array.isArray(subjects)
              ? subjects.join(", ")
              : "No subjects found",
          };

          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        {book && (
          <div className="book-details-content grid">
            <div className="book-details-img">
              <img src={book.cover_img} alt="cover img" />
            </div>
            <div className="book-details-info">
              <div className="book-details-item title">
                <span className="fw-6 fs-24">{book.title}</span>
              </div>
              <div className="book-details-item description">
                <span>{book.description}</span>
              </div>
              <div className="book-details-item">
                <span className="fw-6">Subject Places: </span>
                <span className="text-italic">{book.subject_places}</span>
              </div>
              <div className="book-details-item">
                <span className="fw-6">Subject Times: </span>
                <span className="text-italic">{book.subject_times}</span>
              </div>
              <div className="book-details-item">
                <span className="fw-6">Subjects: </span>
                <span>{book.subjects}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookDetails;
