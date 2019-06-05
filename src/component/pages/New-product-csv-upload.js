import React, { Component } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { NewproductcsvContent } from '../content/New-product-csv-content';

class Newproductcsvupload extends Component {  
  render() {
    return (
      <div>
        <Header/>
        <NewproductcsvContent/>
        <Footer/>
      </div> 
    );
  }
}


export {  Newproductcsvupload };
