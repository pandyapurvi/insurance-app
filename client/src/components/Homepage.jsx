import React from 'react';
import { graphql } from 'react-apollo';
import { getHomepageQuery } from '../queries/queries';
import './Homepage.css';

export const Homepage = (props) => {
  const homepageContent = () => {
    const { data: { loading, homepage } } = props;
    if (loading) {
      return ( <p>Loading...</p> )
    }
    return (
      <div className="homepage-container">
        <h1>{homepage.heading}</h1>
        <h4>{homepage.subheading}</h4>
        <img
          src={homepage.heroImageUrl}
          alt="Hero"
          className="hero-image"
        />
        <a href="/faq" className="learn-more">Learn more...</a>
      </div>
      )
    }
    return(
      <div >
        { homepageContent() }
      </div>
  )
};

export default graphql( getHomepageQuery )( Homepage );
