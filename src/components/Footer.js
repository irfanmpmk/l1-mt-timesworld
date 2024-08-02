import React from "react";

const Footer = () => {
  return (
    <footer className="text-center">
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
      <p>Example@email.com</p>
      <p>Copyright &copy; 2020 Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
