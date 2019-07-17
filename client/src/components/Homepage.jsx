import React,  { Component } from 'react';
import { graphql } from 'react-apollo';
import { getHomepageQuery } from '../queries/queries';
import styles from './Homepage.css';

export class Homepage extends Component {
  homepageContent() {
    const { data: { loading, homepage } } = this.props;
    if(loading){
      return ( <p>Loading...</p> )
    }
    return (
      <div className="homepage-container">
        <h1>{ homepage.heading }</h1>
        <h4>{ homepage.subheading }</h4>
        <img src={ homepage.heroImageUrl } alt="Hero-Image" className="hero-image"/>
        <a href="/faq" className="learn-more">Learn more...</a>
      </div>
      )
    };

  render() {
    return(
      <div >
        { this.homepageContent() }
      </div>
    )
  }
};

export default graphql( getHomepageQuery )( Homepage );
