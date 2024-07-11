import React from 'react';
import './ScrollableItem.css';

const ScrollableItem = ({ imageSrc, description, title, date }) => {
  return (
    <div className="scrollable-item">
      <img className="post-image" src={imageSrc} alt={title} />
      <div className="post-content">
        <div className="date">{date}</div>
        <div className="title">{title}</div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ScrollableItem;