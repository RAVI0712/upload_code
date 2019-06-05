import React, { Component } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Acontent } from '../content/Acontent';

class ASIN extends Component {  
  render() {
    return (
      <div>
        <Header/>
        <Acontent/>
        <Footer/>
      </div> 
    );
  }
}


export {  ASIN };
