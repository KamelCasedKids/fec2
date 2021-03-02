import React from 'react';
import data from './sampledata';

class Details extends React.Component {
  // stuff and states
  state = {
    name: '',
    price: 0,
    style: []
  }

  render() {
    return (
      <div>
        <div className="tile is-child box">
          <div className="column star">
            Ratings and Reviews
          </div>
          <div className="column details">
            Product Name
          </div>
          <div className="column price">
            price
          </div>
          <div className="column styles">
            stylesGrid
          </div>
        </div>
      </div>
    )
  }
};

export default Details;