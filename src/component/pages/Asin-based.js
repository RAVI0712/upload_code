import React, { Component } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { AsinbasedContent } from '../content/Asin-based-content';

class Asinbased extends Component {  
  render() {
    return (
      <div>
        <Header/>
        <AsinbasedContent/>
        <Footer/>
      </div> 
    );
  }
}


export {  Asinbased };
