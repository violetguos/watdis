// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={paragraphStyle}>
        This project is a simple React webpage that displays a random quote of the day. 
        It uses an array of quotes with associated images, and the user can click the "Get Random Quote" button
        to refresh and display a new random quote. This is a basic template that can be extended and customized
        to suit your own needs.
      </p>
    </footer>
  );
};

const footerStyle = {
  marginTop: '2rem',
  backgroundColor: '#f8f8f8',
  padding: '1rem',
  textAlign: 'center',
};

const paragraphStyle = {
  fontSize: '0.8rem',
  color: '#777',
};

export default Footer;
