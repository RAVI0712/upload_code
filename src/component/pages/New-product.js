import React, { Component } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Content } from '../content/Content';

class Newproduct extends Component {  
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div> 
    );
  }
}


export {  Newproduct };
