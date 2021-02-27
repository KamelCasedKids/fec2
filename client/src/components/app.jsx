import React from 'react';
import bulma from 'bulma';
import RatingsReviews from './Ratings&Reviews';

require('../css/mystyles.scss');

const App = () => (
  <div>
    <span className="title is-primary">This is our React App</span>
    <RatingsReviews />
  </div>
);

export default App;
