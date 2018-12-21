import React, { Component } from 'react';
import Header from './comp/header'
import Main from './comp/main'
import Footer from './comp/footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
<Header/>
<Main/>
<Footer/>
      </div>
    );
  }
}

export default App;
