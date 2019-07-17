import React,  { Component } from 'react';
import { graphql } from 'react-apollo';
import { getFaqDetailQuery } from '../queries/queries';
import './FaqDetail.css';
export class FaqDetail extends Component {
  displayFaqDetail() {
    const { faq } = this.props.data;
      if (faq) {
        return (
          <React.Fragment>
            <h4>{ faq.title }</h4>
            <div dangerouslySetInnerHTML={{__html: faq.body}} />
          </React.Fragment>
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
