import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({ adapter: new ReactSixteenAdapter });

describe( 'Navbar', () => {
  it( 'testing faq link', () => {
    const wrapper = shallow(<Navbar />);
    const faqLink = <a href="/faq">FAQ</a>
    expect(wrapper.contains(faqLink)).to.equal(true);
  });
});
