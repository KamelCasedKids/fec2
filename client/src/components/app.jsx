import React, { useState } from 'react';
import ProductOverview from './overview/ProductOverview';
import RatingsReviews from './ratings/RatingsReviews';
import RelatedProducts from './products/RelatedProducts';

// require('../css/mystyles.scss');

const App = () => {
  const test1 = null;

  return (
    <div className="main">
      <span className="title is-primary">This is our React App</span>
      <div className="overview">
        <ProductOverview />
      </div>
      <div className="related">
        <RelatedProducts />
      </div>
      <div className="ratings">
        <RatingsReviews />
      </div>
    </div>
  );
};

export default App;
