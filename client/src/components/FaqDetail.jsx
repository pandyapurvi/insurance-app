import React from 'react';
import { graphql } from 'react-apollo';
import { getFaqDetailQuery } from '../queries/queries';
import PropTypes from 'prop-types';
import './FaqDetail.css';

export const FaqDetail = (props) => {
  const displayFaqDetail = () => {
    const { faq } = props.data;
      if (faq) {
        return (
          <div>
            <h4>{ faq.title }</h4>
            <div dangerouslySetInnerHTML={{__html: faq.body}} />
          </div>
        )
      }
    }
  return(
    <div id="faq-detail">
      { displayFaqDetail() }
    </div>
  );
};

FaqDetail.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
};

export default graphql(getFaqDetailQuery,{
  options: (props) => {
    return {
      variables:{
        id: props.faqid
      }
    }
  }
})( FaqDetail );
