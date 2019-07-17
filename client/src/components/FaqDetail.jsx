import React,  { Component } from 'react';
import { graphql } from 'react-apollo';
import { getFaqDetailQuery } from '../queries/queries';
import styles from './FaqDetail.css';

export class FaqDetail extends Component {
  displayFaqDetail() {
    const { faq } = this.props.data;
      if( faq ) {
        return (
          <div>
            <h4>{ faq.title }</h4>
            <p>{ faq.body }</p>
          </div>
        )
      }
    };
  render() {
    return(
      <div id="faq-detail">
        { this.displayFaqDetail() }
      </div>
    )
  }
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
