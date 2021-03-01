import React from 'react';
import bulma from 'bulma';

// COMPONENT
const ProductOverview = (props) => (
  <div>
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent">
            <article className="tile is-child box">
              Image Gallery
            </article>
          </div>
          <div className="tile is-parent is-vertical">
            <article className="tile is-child box">
              Product Details
            </article>
            <article className="tile is-child box">
              Shopping Cart Options
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            Product Description
          </article>
        </div>
      </div>
    </div>
  </div>
);

// EXPORTS
export default ProductOverview;
