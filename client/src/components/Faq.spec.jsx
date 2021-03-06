import React from 'react';
import { shallow } from 'enzyme';
import { Faq } from './Faq';
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({ adapter: new ReactSixteenAdapter });

describe( 'Faq', () => {
  it( 'should render faqs', () => {
    const mockData = {
      loading: false,
      faqs: [
        {
          title: 'How can I check my estimated delivery window?',
          body: 'Model 3 reservation holders can check their latest delivery timing estimate in their Tesla Account.',
          id: '1'
        },
        {
          title: 'When will I be invited to configure my Model 3, and when can I take delivery?',
          body: '<p> Model 3 reservation holders are receiving invitations to order and design Model 3 based on the time and date that they placed their reservation. Current Tesla owners have priority as a thank you for their support.</p><p>Deliveries will start in the United States first, with international deliveries starting in left-hand drive markets in late 2018, followed by right-hand drive markets in 2019.</p>',
          id: '2'
        },
        {
          title: 'Which Model 3 features are currently available?',
          body: 'Our first Model 3 in production comes with a long-range battery, 310 miles of range, rear-wheel drive and premium upgrades throughout, beginning at $49,000 USD. In early 2018, we will introduce the option for a standard battery with 220 miles of range and standard equipment, beginning at $35,000 USD.', id:'3'
        }
      ]
    };
    const wrapper = shallow(<Faq data={mockData} />);
    const faqs = wrapper.find('.faq-list');
    expect(faqs).to.have.length(3);
  });
});
