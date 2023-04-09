import React, { useState, useEffect } from 'react';
import './QuoteOfTheDay.css'; // Import CSS file for styling

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Fetch quotes from an API or use a local array of quotes
    const quotes = [
      'dial your grandparents',
      'host a dinner party with friends',
      'try woodworking',
      'check your laundry',
      'declutter a corner of your room',
      'explore free parks nearby',
      'spirituality - prayer apps, meditation apps',
      'listen to some music',
      'cook a meal -  here\'s a recipe - https://www.instacart.ca/store/recipes/1798-turkey-burgers-with-lime-mayo-and-crispy-oven-fries '
    ];

    // Generate a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="quote-container">
      <h1 className="quote-title">WhAt To Do Instead, aka WATDIS</h1>
      <p className="quote-text">{quote}</p>
      <button className="quote-button" onClick={() => window.location.reload()}>Get Another Activity</button>
    </div>
  );
};

export default QuoteOfTheDay;
