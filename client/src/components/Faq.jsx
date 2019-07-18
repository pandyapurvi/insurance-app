import React,  { useState } from 'react';
import { graphql } from 'react-apollo';
import { getFaqQuery } from '../queries/queries';
import FaqDetail from './FaqDetail';
import PropTypes from 'prop-types';
import './Faq.css';

export const Faq = (props) => {
  const [ selected, setSelected ] = useState();

  const showFaqs = () => {
    const { data: { loading, faqs } } = props;
    if (loading) {
      return ( <div><p>Loading...</p></div> )
    }
    return faqs.map(faq => {
      return (
        <li className="faq-list" key={faq.id} onClick={ e => setSelected(faq.id) } >
        { faq.title }
        </li>
      );
    });
  };

  return(
    <main>
      <div className="faq-container" >
        <ul id="faq-list">
        <h1 className="faq-header">FAQ</h1>
          { showFaqs() }
        </ul>
        <FaqDetail faqid={selected} />
      </div>
    </main>
  )
};

Faq.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    faqs: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }))
  })
};

export default graphql( getFaqQuery )( Faq );
