import React from 'react';
import bulma from 'bulma';
import RatingsReviews from './Ratings&Reviews';
import ProductOverview from './ProductOverview';
import RelatedProducts from './RelatedProducts';

require('../css/mystyles.scss');

const App = () => (
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

export default App;
