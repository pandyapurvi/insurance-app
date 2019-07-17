import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({ adapter: new ReactSixteenAdapter });

describe( 'Homepage', () => {
  it( 'should render image', () => {
    const wrapper = shallow(<Homepage />);
    const homepage = <img src={ homepage.heroImageUrl } alt="Hero-Image" className="hero-image"/>;
    expect(wrapper.contains(homepahe)).to.equal(true);
  });
});
