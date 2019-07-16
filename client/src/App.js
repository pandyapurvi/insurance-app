import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';//binding apollo with React


import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Faq from './components/Faq';
// import FaqDetail from './components/FaqDetail';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render(){
    return (
      <div className="container">

        <BrowserRouter>
        <ApolloProvider client={client}>
        <div id = "main">
          <Navbar/>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/faq" component={Faq} />
        </div>
        </ApolloProvider>
        </BrowserRouter>

      </div>

    );
  }

};

export default App;
