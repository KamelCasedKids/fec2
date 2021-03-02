import React from 'react';

class Image extends React.Component {
  // stuff and states
  state = {options: 1}

  render() {
    return (
      <div>
        <img className="tile is-child" src="https://bulma.io/images/placeholders/640x480.png" alt="" />
      </div>
    )
  }
};

export default Image;
