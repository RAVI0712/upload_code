import React, { Component } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { AsincsvContent } from '../content/Asincsv-content';

class Asincsv extends Component {  
  render() {
    return (
      <div>
        <Header/>
        <AsincsvContent/>
        <Footer/>
      </div> 
    );
  }
}


export {  Asincsv };
