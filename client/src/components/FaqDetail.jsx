import React from 'react';
import { graphql } from 'react-apollo';
import { getFaqDetailQuery } from '../queries/queries';
import './FaqDetail.css';

export const FaqDetail = (props) => {
  const displayFaqDetail = () => {
    const { faq } = props.data;
      if (faq) {
        return (
          <React.Fragment>
            <h4>{ faq.title }</h4>
            <div dangerouslySetInnerHTML={{__html: faq.body}} />
          </React.Fragment>
        )
      }
    }
  return(
    <div id="faq-detail">
      { displayFaqDetail() }
    </div>
  );
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
