import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from './Homepage';
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({ adapter: new ReactSixteenAdapter });

describe( 'Homepage', () => {
  it( 'should render image', () => {
    const mockData = {
      loading: false,
      homepage: {
        heading: 'Qantas Cars',
        subheading: 'Powered by the sun with the best safety record on the planet',
        heroImageUrl: 'https://drive.google.com/uc?id=1svw9VdyX4fyRHd1kggq0akDSafmdOS7L',
        id:'1'
      }
    }
    const wrapper = shallow(<Homepage data={mockData}/>);
    const heroImage = wrapper.find('.hero-image');
    expect(heroImage).to.have.length(1);
  });
});
