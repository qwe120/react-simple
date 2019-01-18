import React, { Component } from 'react';
import Layout from 'comp/layout';
import RouterView from 'router';
import {BrowserRouter as Router} from 'react-router-dom'
console.log(RouterView)
class App extends Component {
  render() {
    return (
      <div className="wrapper">
         <Layout>
           <Router>
             <RouterView /> 
          </Router> 
        </Layout> 
      </div>
    );
  }
}

export default App;
