import React from 'react';
import { shallow } from 'enzyme';
import FaqDetail from './FaqDetail';
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('FaqDetail', () => {
  it('should render a FAQ', () => {
    const mockData = {
      title: 'How can I check my estimated delivery window?',
      body: 'Model 3 reservation holders can check their latest delivery timing estimate in their Tesla Account.', id: '1'
    };

    const wrapper = shallow(<FaqDetail data={mockData} />);
    const faq = wrapper.find('#faq-detail');
    expect(faq).to.have.length(1);
  });
});
