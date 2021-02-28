import React from 'react';
import bulma from 'bulma';

// COMPONENT
const ProductOverview = (props) => (
  <div>
    <section className="hero is-grey-dark is-fullheight">
      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          <div className="tile is-parent">
            <div className="tile is-8 is-child box">
              <p className="title">Image</p>
            </div>
            <div className="tile is-child box">
              <p className="title">Description</p>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-12 box">
            <p className="title">Details</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section space" />
  </div>
);

// EXPORTS
export default ProductOverview;
