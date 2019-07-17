import React,  { Component } from 'react';
import { graphql } from 'react-apollo';
import { getFaqQuery } from '../queries/queries';
import FaqDetail from './FaqDetail';
import styles from './Faq.css';

export class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }
  }

  showFaqs(){
    const { data: { loading, faqs } } = this.props;
    if ( loading ) {
      return ( <div><p>Loading...</p></div> )
    }
    return faqs.map(faq => {
      return (
        <li className="faq-list" key={ faq.id } onClick={ (e) => { this.setState({ selected: faq.id }) }}>
        { faq.title }
        </li>
      )
    })
  };

  render() {
    return(
      <main>
      <div className="faq-container" >
        <ul id="faq-list">
        <h1 className="faq-header">FAQ</h1>
          { this.showFaqs() }
        </ul>
        <FaqDetail faqid={ this.state.selected } />
      </div>
    </main>
    )
  }
};

export default graphql( getFaqQuery )( Faq );
