import React, { Component } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { NewproductbasedContent } from '../content/New-product-based-content';

class Newproductbased extends Component {  
  render() {
    return (
      <div>
        <Header/>
        <NewproductbasedContent/>
        <Footer/>
      </div> 
    );
  }
}


export {  Newproductbased };
