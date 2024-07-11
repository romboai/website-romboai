import React from 'react';
import ScrollableItem from './ScrollableItem';
import './HorizontalListView.css';

const HorizontalListView = ({ items }) => {
  return (
    <div className="horizontal-list-view-container">
      <div className="horizontal-list-view">
        {items.map((item, index) => (
          <ScrollableItem
            key={index}
            imageSrc={item.imageSrc}
            description={item.description}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalListView;