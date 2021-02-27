import React from 'react';
import bulma from 'bulma';

// COMPONENT
const ProductOverview = (props) => (
  <div>
    <button type="button" className="button is-primary">TEST BUTTON</button>
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Hello, Jack!</h1>
          <h2 className="subtitle">This is Product Overview</h2>
        </div>
      </div>
    </section>
    <div className="tile is-grey-dark">
      <h3>TESTING</h3>
    </div>
  </div>
);

// EXPORTS
export default ProductOverview;