import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';//binding apollo with React
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Faq from './components/Faq';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
        <ApolloProvider client={client}>
        <div id = "main">
          <Navbar/>
          <Route exact path="/" component={Homepage} className="homepage"/>
          <Route exact path="/faq" component={Faq} className="faq-component" />
        </div>
        </ApolloProvider>
        </BrowserRouter>
      </div>
    );
  }

};
export default App;
