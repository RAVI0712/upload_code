import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  
  render() {
    return (
      <div className="Footer">
        <footer>
            <div id="common-footer">
                <div id="background_cycler"></div>
                <div id="footer">
                    <div className="container">
                        <div className="footer-links">
                            <div className="row">
                                <div className="col-md-2 col-sm-6 col-xs-12 text-left">
                                    <p>FEATURES</p>
                                    <div><Link to="/">Product Research</Link></div>
                                    <div><Link to="/">Product Ideas</Link></div>
                                    <div><Link to="/">Listing Quality</Link></div>
                                    <div><Link to="/">Product Keyword</Link></div>
                                    <div><Link to="/">Seller Watch</Link></div>
                                    <div><Link to="/">Product Alerts</Link></div>
                                    <div><Link to="/">Product Source</Link></div>
                                    <div><Link to="/">Keyword Research</Link></div>
                                    <div><Link to="/">PPC Analyzer</Link></div>
                                    <div><Link to="/">Profit Dashboard</Link></div>
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-12 text-left">
                                    <p>GET TO KNOW US</p>
                                    <div><Link to="/">Get Started</Link></div>
                                    <div><Link to="/">Pricing</Link></div>
                                    <div><Link to="/">Careers</Link></div>
                                    <div><Link to="/">Suggest a Feature</Link></div>
                                    <div><Link to="/">Become an Affiliate</Link></div>
                                    <div><Link to="/">Agency Partner Program</Link></div>
                                    <div><Link to="/">Partner With Us</Link></div>
                                    <div><Link to="/">Facebook Group</Link></div>
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-12 text-left">
                                    <p>FREE TOOLS</p>
                                    <div><Link to="/">FBA Calculator</Link></div>
                                    <div><Link to="/">Amazon keyword Tool</Link></div>
                                    <div><Link to="/">Product Sourcing</Link></div>
                                    <div><Link to="/">Listing Quality Checker</Link></div>
                                    <div><Link to="/">Trademark Search</Link></div>
                                    <div><Link to="/">Product Description Editor</Link></div>
                                    <div><Link to="/">Duplicate Keyword Remover</Link></div>
                                    <div><Link to="/">Amazon ACoS Calculator</Link></div>
                                    <div><Link to="/">Amazon Sales Estimator</Link></div>
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-12 text-left">
                                    <p>COMPARE</p>
                                    <div><Link to="/">Jungle scout vs SellerApp</Link></div>
                                    <div><Link to="/">Merchant Words vs SellerApp</Link></div>
                                    <div><Link to="/">Helium 10 vs SellerApp</Link></div>
                                    <div><Link to="/">SellerLabs vs SellerApp</Link></div>
                                    <div><Link to="/">Sellics vs SellerApp</Link></div>
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-12 text-left">
                                    <p>HELP &amp; LEGAL</p>
                                    <div><Link to="/">Privacy</Link></div>
                                    <div><Link to="/">Terms of Use</Link></div>
                                    <div><Link to="/">Help</Link></div>
                                    <div><Link to="/">Blog</Link></div>
                                    <div><Link to="/">Contact Us</Link></div>
                                    <div><Link to="/">GDPR</Link></div>
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-12 text-left">
                                    <p>LET'S CONNECT</p>
                                    <div><Link to="tel:13369497556">Call: +1 (551) 123456</Link></div>
                                    <div><Link to="mailto:support@sellerapp.com">support@fbafees.com</Link></div>
                                    <div><Link to="mailto:sales@sellerapp.com">sales@fbafees.com</Link></div>
                                    <div className="social-links">
                                        <div>
                                            <li className="flex">
                                                <Link to="/" target="_blank">
                                                    <div className="social-icone">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </div>
                                                </Link>
                                            </li>
                                        </div>
                                        <div>
                                            <li className="flex">
                                                <Link to="/" target="_blank">
                                                    <div className="social-icone">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </div>
                                                </Link>
                                            </li>
                                        </div>
                                        <div>
                                            <li className="flex">
                                                <Link to="/" target="_blank">
                                                    <div className="social-icone">
                                                        <i className="fab fa-twitter"></i>
                                                    </div>
                                                </Link>
                                            </li>
                                        </div>
                                        <div>
                                            <li className="flex">
                                                <Link to="/" target="_blank">
                                                    <div className="social-icone">
                                                        <i className="fab fa-google-plus-g"></i>
                                                    </div>
                                                </Link>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center" style={{marginTop:'40px'}}>
                                <Link to="/">&copy; 2018 SellerApp </Link>
                                <span>|</span>
                                <Link to="/"> Privacy Policy </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}


export  {
    Footer
};
