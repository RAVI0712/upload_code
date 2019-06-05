import React, { Component } from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom';
import { ASIN } from '../src/component/pages/ASIN';
import { Asinbased } from '../src/component/pages/Asin-based';
import { Asincsv } from '../src/component/pages/Asin-csv-upload';
import { Newproduct } from '../src/component/pages/New-product';
import { Newproductbased } from '../src/component/pages/New-product-based';
import { Newproductcsvupload } from '../src/component/pages/New-product-csv-upload';
import { Error } from '../src/component/Error';
import { App } from './App';

class Router extends Component {  
  render() {
    return (
        <BrowserRouter basename="/fba-react">
          <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/asin-based" component={Asinbased} />
            <Route path="/asin-csv-upload" component={Asincsv} />            
            <Route path="/asin-number" component={ASIN} />            
            <Route path="/new-product" component={Newproduct} />
            <Route path="/new-product-based" component={Newproductbased} />
            <Route path="/new-product-csv-upload" component={Newproductcsvupload} />            
            <Route component={Error} />  
          </Switch>          
        </BrowserRouter>
    );
  }
}


export default Router;