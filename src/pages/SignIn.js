import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { signIn } from "../redux/authSlice";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword(password)) {
      // Mock sign-in logic
      dispatch(signIn());
      navigate("/");
    } else {
      setPasswordError(
        "Password must be at least 8 characters long and include at least 1 capital letter, 1 number, and 1 symbol."
      );
    }
  };

  return (
    <Container className="sign-in">
      <Row>
        <Col
          md={6}
          className="sign-in-container vh-100 d-flex flex-column align-items-center"
        >
          <Row className="col-12 col-md-6 sign-in-row">
            <div>
              <h1 className="sign-in-title">Sign In</h1>
              <p className="mb-4">
                <b>New user? </b>{" "}
                <Link to="/signup" className="text-decoration-none fw-bolder">
                  Create an account
                </Link>
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    className="input-field border border-3 border-dark rounded-0"
                    placeholder="Username or email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    className="input-field border border-3 border-dark rounded-0"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && (
                    <Form.Text className="text-danger">
                      {passwordError}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Keep me signed in"
                    className="form-check d-flex align-items-center"
                  />
                </Form.Group>
                <Button
                  variant="dark"
                  className="w-100 rounded-0 main-button"
                  type="submit"
                >
                  Sign In
                </Button>
              </Form>
            </div>
          </Row>

          <div className="or-sign-in">
            <p>Or Sign In With</p>
            <div className="social-icons mt-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="social-icons/google.png" alt="google-logo" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="social-icons/facebook.png" alt="facebook-logo" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="social-icons/linkedin.png" alt="linkedin-logo" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="social-icons/twitter.png" alt="twitter-logo" />
              </a>
            </div>
          </div>
        </Col>
        <Col
          md={6}
          className="mt-5 d-flex justify-content-center sign-in-image"
        >
          <img
            src="login-img.png"
            alt="login-banner"
            className="img-fluid d-block"
            style={{ height: "30rem" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
