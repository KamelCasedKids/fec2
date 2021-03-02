import React from 'react';
import bulma from 'bulma';
import Image from './Image';
import Details from './details';

// COMPONENT
const ProductOverview = (props) => (
  <div>
    <section className="hero is-grey-dark is-fullheight">
      <div className="container is-fluid">
        <div className="tile is-ancestor has-text-centered">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-7">
                <Image />
              </div>
              <div className="tile is-parent is-vertical">
                <Details />
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
    </section>
    <section className="section space" />
  </div>
);

/* <div className="columns">
<div className="column">
  Product Description
</div>
</div> */

// EXPORTS
export default ProductOverview;
