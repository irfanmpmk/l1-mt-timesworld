import { Container, Nav, Navbar } from "react-bootstrap";

function Header({ onFilterChange, activeFilter }) {
  const handleNavLinkClick = (filter) => {
    onFilterChange(filter);
  };

  return (
    <header className="mb-5">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold header-title">
            Countries
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link
                onClick={() => handleNavLinkClick("All")}
                className={activeFilter === "All" ? "active" : ""}
              >
                All
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavLinkClick("Asia")}
                className={activeFilter === "Asia" ? "active" : ""}
              >
                Asia
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavLinkClick("Europe")}
                className={activeFilter === "Europe" ? "active" : ""}
              >
                Europe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
