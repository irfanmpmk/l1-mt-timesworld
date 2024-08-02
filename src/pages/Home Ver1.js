import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import fetchCountries from "../components/FetchingCountries";
import Country from "../components/Country";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const contentRef = useRef(null);
  const loadMoreButtonRef = useRef(null);

  const countriesPerPage = 12;

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      try {
        const data = await fetchCountries(currentPage, countriesPerPage);
        setCountries((prevCountries) => [...prevCountries, ...data]);
        const filteredData =
          activeFilter === "All"
            ? data
            : data.filter((country) => country.region === activeFilter);
        setFilteredCountries(filteredData);
        // console.log(countries);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [currentPage, activeFilter]);

  useEffect(() => {
    const handleScroll = () => {
      // setScrollY(window.scrollY);
      const loadMoreButton = loadMoreButtonRef.current;
      if (loadMoreButton) {
        const buttonTop = loadMoreButton.getBoundingClientRect().top;
        if (buttonTop <= window.innerHeight) {
          handleLoadMore();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const threshold = 0.9 * contentRef.current?.clientHeight;
  const handleLoadMore = () => {
    // if (!loading && scrollY >= threshold) {
    if (!loading) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => handleLoadMore();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, loading]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="home" ref={contentRef}>
      <Header onFilterChange={handleFilterChange} />

      <h1 className="welcome">WELCOME</h1>
      <Slider countries={filteredCountries} />
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      <ul>
        {filteredCountries.map((country, index) => (
          <li>
            <Country key={country.name} {...country} />
          </li>
        ))}
      </ul>

      {
        <button
          ref={loadMoreButtonRef}
          onClick={handleLoadMore}
          disabled={loading}
        >
          Load More
        </button>
      }
      <Footer />
    </div>
  );
};

export default Home;
