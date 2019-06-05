import React, { Component } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {  
  render() {
    return (
      <div className="Header">
        <header>
            <div className="container">
                <div className="sub-header pull-right">
                    <ul className="nav">
                        <li><Link className="hover-highlight" to="/dataParser">Pricing</Link></li>
                        <li><Link to="/" style={{color: '#64b8cb'}}>Sign In</Link></li>
                        <li>
                            <div className="google-translate">
                                <div className="ct-topbar">
                                    <ul className="list-unstyled list-inline ct-topbar__list">
                                        <li className="ct-language"><span>EN </span>
                                            <i className="fa fa-angle-down"></i>
                                            <ul className="list-unstyled ct-language__dropdown">
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">English</Link>
                                                </li>
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">Türkçe</Link>
                                                </li>
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">Deutsch</Link>
                                                </li>
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">Tiếng Việt </Link>
                                                </li>
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">中文</Link>
                                                </li>
                                                
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">漢語</Link>
                                                </li>
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">Filipino</Link>
                                                </li>
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">ภาษาไทย </Link>
                                                </li>
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">日本語 </Link>
                                                </li>
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">Français </Link>
                                                </li>
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">한국어 </Link>
                                                </li>
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">Nederlands </Link>
                                                </li>
                                                <li>
                                                    <Link className="lang-en lang-select notranslate" to="/">Bahasa</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-header header-old">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <Link className="navbar-brand sp-logo" to="/">
                                <img src={logo} alt="logo"/>
                            </Link>
                            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" style={{position:'absolute',right:'0px'}}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link className="feature-name" to="/">Home</Link></li>
                                <li className="dropdown">
                                    <Link className="dropdown-toggle hover-highlight" to="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span className="fa fa-angle-down" style={{paddingleft: '5px', fontsize: '12px'}}></span></Link>

                                    <ul className="dropdown-menu custom-dropdown">
                                        <li className="detail-section">
                                            <Link className="feature-name"to="/">Case Studies</Link>
                                        </li>

                                        <li className="detail-section">
                                            <Link className="feature-name"to="/">Blog</Link>
                                        </li>

                                        <li className="detail-section">
                                            <Link className="feature-name"to="/">Webinars</Link>
                                        </li>

                                        <li className="detail-section">
                                            <Link className="feature-name"to="/">Support</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link className="dropdown-toggle hover-highlight" to="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Free Tools<span className="fa fa-angle-down" style={{paddingLeft: '5px', fontSize: '12px'}}></span>
                                    </Link>
                                    
                                    <ul className="dropdown-menu custom-dropdown">
                                        <div className="col-md-6">
                                            <li className="detail-section">
                                                <div style={{width:'45%'}}><Link className="feature-name" to="/">FBA Calculator</Link></div>
                                            </li>
                                            <li className="detail-section">
                                                <div style={{width:'45%'}}><Link className="feature-name" to="/">Keyword Search</Link></div>
                                            </li>
                                            <li className="detail-section">
                                                <div style={{width:'45%'}}><Link className="feature-name" to="/">Product Sourcing</Link></div>
                                            </li>
                                            <li className="detail-section">
                                                <div style={{width:'45%'}}><Link className="feature-name" to="/">Amazon ACoS Calculator</Link></div>
                                            </li>
                                            <li className="detail-section">
                                                <div style={{width:'45%'}}><Link className="feature-name" to="/">Listing Quality Checker</Link></div>
                                            </li>
                                        </div>
                                        <div className="col-md-6">
                                            <li className="detail-section">
                                                <div style={{width:'45%'}}><Link className="feature-name" to="/">Trademark Search</Link></div>
                                            </li>
                                            <li className="detail-section">
                                                <div style={{width:'45%'}}><Link className="feature-name" to="/">Product Description Editor</Link></div>
                                            </li>
                                            <li className="detail-section">
                                                <div style={{width:'45%'}}><Link className="feature-name" to="/">Duplicate Keyword Remover</Link></div>
                                            </li>
                                            <li className="detail-section">
                                                <div style={{width:'45%'}}><Link className="feature-name" to="/">Amazon Sales Estimator</Link></div>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li className="action header-trial mt-2"><Link className="sp-yellow-btn custom" to="/">Start Free Trial</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
      </div>
    );
  }
}


export  { Header };
