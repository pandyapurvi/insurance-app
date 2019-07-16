import React,  { Component } from 'react';
import { graphql } from 'react-apollo';
import { getFaqQuery } from '../queries/queries';


import FaqDetail from './FaqDetail';


class Faq extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selected: null
      }
  }

  showFaqs(){
    var data = this.props.data;
    if( data.loading){
      return (<div>Loading...</div>)
    } else {
      return data.faqs.map(faq => {
        return (
          <li className="faq-list" key={faq.id} onClick={ (e) => {this.setState({selected: faq.id})}}>{faq.title}</li>
        )
      })
    }
  }
  render() {
    //console.log(this.props);

    return(
      <div>


        <ul id="faq-list">
        <h1>FAQ</h1>

            {this.showFaqs()}

        </ul>
        <FaqDetail faqid={this.state.selected}/>
      </div>

    )
  }
};

export default graphql(getFaqQuery)(Faq);
