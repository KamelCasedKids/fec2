import React from 'react';
import bulma from 'bulma';

// COMPONENT
const ProductOverview = (props) => (
  <div>
    <section className="hero is-grey-dark is-fullheight">
      <div className="tile is-ancestor is-10 has-text-centered is-centered">
        <div className="tile is-vertical">
          <div className="tile">
            <div className="tile is-parent">
              <article className="tile is-child box">
                Image Gallery
                <img src="https://bulma.io/images/placeholders/640x480.png" alt="" />
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
    </section>
    <section className="section space" />
  </div>
);

// EXPORTS
export default ProductOverview;
