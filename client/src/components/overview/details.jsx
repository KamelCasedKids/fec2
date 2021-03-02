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
        <div className="column star">
          Ratings and Reviews
        </div>
        <div className="column details">
          Product Name
        </div>
        <div className="column price">
          Price
        </div>
        <div className="column styles">
          Style
          <div className="columns">
            <div className="column">[x]</div>
            <div className="column">[ ]</div>
            <div className="column">[ ]</div>
            <div className="column">[ ]</div>
          </div>
          <div className="columns">
            <div className="column">[ ]</div>
            <div className="column">[ ]</div>
            <div className="column">[ ]</div>
            <div className="column">[ ]</div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-two-thirds size">
            Select Size
          </div>
          <div className="column quantity">
            Quantity
          </div>
        </div>

        <div className="columns">
          <div className="column is-three-quarters cart">
            Add to Bag +
          </div>
          <div className="column favorite">
            Star
          </div>
        </div>
      </div>
    )
  }
};

export default Details;