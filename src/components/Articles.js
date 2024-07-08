import React from 'react';
import './Articles.css';
import article1 from '../img/analyzer-1.png'; // Adjust the path as necessary
import article2 from '../img/analyzer-1.png'; // Adjust the path as necessary
import article3 from '../img/analyzer-1.png'; // Adjust the path as necessary

function Articles() {
  return (
    <section className="articles">
      <div className="container">
        <h2>What to read next</h2>
        <div className="article">
          <img src={article1} alt="Article 1" />
          <p>All-In-One Analysis Suite</p>
        </div>
        <div className="article">
          <img src={article2} alt="Article 2" />
          <p>Fully Automatic Measurement</p>
        </div>
        <div className="article">
          <img src={article3} alt="Article 3" />
          <p>Express Quality Analysis</p>
        </div>
      </div>
    </section>
  );
}

export default Articles;