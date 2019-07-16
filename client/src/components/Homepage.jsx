import React,  { Component } from 'react';
import { graphql } from 'react-apollo';
import { getHomepageQuery } from '../queries/queries';


class Homepage extends Component {
  homepageContent() {
    var data = this.props.data;
    if( data.loading){
      return (<div>Loading...</div>)
    } else {
      return (
        <div>
        <h1>{data.homepage.heading}</h1>
        <h4>{data.homepage.subheading}</h4>
        <img src={data.homepage.heroImageUrl}/>
        <a href="/faq">Learn more...</a>
        </div>
      )
    }
  }

  render() {
    //console.log(this.props)
    return(
      <div>
        {this.homepageContent()}

      </div>

    )
  }
};

export default graphql(getHomepageQuery)(Homepage);
