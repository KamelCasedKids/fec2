// import relevant files and dependencies
// dependencies
import React from 'react';
import {shallow, mount, render} from 'enzyme';

// files
// import App from 'src/components/app';
import ProductOverview from 'src/components/overview/ProductOverview';

// renders correctly
// ReactWrapper can only be called on class components
// it('renders correctly', () => {
//   const wrapper = mount(<ProductOverview />);
//   expect(wrapper.state('error')).toEqual(null);
// });

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

// component
describe('ProductOverview', () => {
  it('should render correctly', () => {
    shallow(<ProductOverview />);
  });
  // check subcomponents
  it('should render 3 subcomponents', () => {
    const wrapper = shallow(<ProductOverview />);
    expect(wrapper.children()).toHavelength(3);
  });
})
