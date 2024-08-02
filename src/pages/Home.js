import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const countriesPerPage = 12;

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCountries();
        setCountries(data);
        const filteredData =
          activeFilter === "All"
            ? data.slice(0, countriesPerPage)
            : data
                .filter((country) => country.region === activeFilter)
                .slice(0, countriesPerPage);
        setFilteredCountries(filteredData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [activeFilter]);

  const handleLoadMore = () => {
    if (!loading) {
      const nextPage = currentPage + 1;
      const start = nextPage * countriesPerPage;
      const end = start + countriesPerPage;

      const newFilteredCountries =
        activeFilter === "All"
          ? countries.slice(start, end)
          : countries
              .filter((country) => country.region === activeFilter)
              .slice(start, end);

      setFilteredCountries((prevFilteredCountries) => [
        ...prevFilteredCountries,
        ...newFilteredCountries,
      ]);
      setCurrentPage(nextPage);
    }
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div className="home container">
      <Header onFilterChange={handleFilterChange} activeFilter={activeFilter} />

      <h1 className="welcome mb-5">WELCOME</h1>
      <Slider countries={filteredCountries} />
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.name}>
            <Country {...country} />
          </li>
        ))}
      </ul>

      <Button
        variant="dark"
        className="mx-auto mt-4 mb-5 rounded-0 d-block main-button"
        onClick={handleLoadMore}
        disabled={loading}
      >
        Load more
      </Button>
      <Footer />
    </div>
  );
};

export default Home;
