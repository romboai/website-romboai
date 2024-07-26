import React from 'react';
import './VerticalScrollableItem.css';

const VerticalScrollableItem = ({ imageSrc, description, title, date }) => {
  return (
    <div className="vertical-scrollable-item">
      <img className="vertical-post-image" src={imageSrc} alt={title} />
      <div className="vertical-post-content">
        <div className="vertical-date">{date}</div>
        <div className="vertical-title">{title}</div>
        <p className="vertical-description">{description}</p>
      </div>
    </div>
  );
};

export default VerticalScrollableItem;