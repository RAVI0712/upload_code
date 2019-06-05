import React, { Component } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Hcontent } from '../content/Hcontent';

class Home extends Component {  
  render() {
    return (
      <div>
        <Header/>
        <Hcontent/>
        <Footer/>
      </div> 
    );
  }
}


export {
  Home
};
