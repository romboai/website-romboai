import React from 'react';
import ScrollableItem from './ScrollableItem';
import './VerticalListView.css';
import VerticalScrollableItem from "./VerticalScrollableItem";

const VerticalListView = ({ items ,backgroundColor}) => {
  return (
    <div className="vertical-list-view-container" style={{ backgroundColor }}>
      <div className="vertical-list-view" >
        {items.map((item, index) => (
          <VerticalScrollableItem
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

export default VerticalListView;