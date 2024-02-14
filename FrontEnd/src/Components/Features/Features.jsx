import React from 'react';
import featuresData from '../../datas/featuresData';

export default function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature, index) => (
        <div key={index} className="feature-item">
          <img src={feature.iconSrc} alt={`${feature.title} Icon`} className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

