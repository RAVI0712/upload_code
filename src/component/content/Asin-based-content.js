import React, { Component } from 'react';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import how_use from '../img/how-to-use-img.jpg';
import port_cal from '../img/portfolio-consultation.png';
import double_quate from '../img/duble-quats.png';
import product_research_icon from '../img/product-research-icon.png';
import product_research from '../img/product-research.png';
import keyword_research from '../img/keyword-research.jpg';
import competitor_research from '../img/competitor-research.jpg';
import customer_care from '../img/customer-care.png';
import customer_care_white from '../img/customer-care-white.png';
import chat from '../img/chat.png';
import chat_white from '../img/chat-white.png';
import email_icon from '../img/email.png';
import email_icon_white from '../img/email-white.png';
import listing_quality from '../img/listing-qlity.png';
import keyword_remove from '../img/keyword-remover.png';
import arrow_down from '../img/arrow-down.png';
import loude_speaker from '../img/loude-speaker.png';
import Blog from '../blog/Blog';
import { Link } from 'react-router-dom';

class AsinbasedContent extends Component {
   
    render() {
        return (
            <div className="Content">

                <div id="main-content">
                    <section id="index-landing-section" style={{minHeight:'400px'}}>
                        <div className="container landing-section-container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12" style={{position:'relative',zIndex:'7'}}>
                                    <h1 className="empower-text white-color" style={{fontSize:'1.3rem'}}>FBAfees Calculator</h1>
                                    <div className="title">
                                        <h2 className="main-title text-bold white-color">Plan your 2018 Amazon Sales Potential</h2>
                                        <h4 className="sub-title white-color">Is fulfillment-by-Amazon (FBA) profitable for you? Or should you choose FBM for your Amazon products?</h4>
                                    </div>
                                    <div className="home_bnr_btn asin_based">
                                        <button className="btn_option">
                                            <Link to="/asin-number">Enter Amazon Product URL or ASIN</Link>
                                        </button>
                                        <span>or</span>
                                        <button className="btn_option">
                                            <Link to="/asin-csv-upload">Upload a CSV</Link>
                                        </button>
                                    </div>
                                    <div className="back_btn_block">
                                        <Link className="back_btn" to="/">
                                            <i className="fa fa-arrow-left" aria-hidden="true"></i>Back
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="how-to-use" id="how_to_use">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>How to use</h2>
                            </div>
                            <div className="col-md-6">
                                <div className="hw-use-left">
                                    <img className="img-fluid" src={how_use} alt={'img'}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="hw-use-right">
                                    <div className="right-content">
                                        <h6><span>1.</span>Copy paste the product ASIN or the product URL from FBAfees to the FABfees calculator</h6>
                                        <p>Tip: ASIN is the 10-digit unique identifier associated with every product on FBAFEES.</p>
                                    </div>
                                    <div className="right-content">
                                        <h6><span>2.</span>Input the values for all the fields into the FBAfees calculator to start comparing the product profit and to learn the FBA fees</h6>
                                        <p>Tip: ASIN is the 10-digit unique identifier associated with every product on FBAFEES.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mtop-30">
                    <div id="conversion-div">
                        <div className="container-fluid design_3">
                            <div className="container center-contents">
                                <div className="row">
                                    <div className="col-md-2 col-sm-2 hidden-xs">
                                        <img className="img-fluid" src={port_cal} alt={'sellerprime'} width="100%"/>
                                    </div>
                                    <div className="col-md-10 col-sm-10">
                                        <h3 className="title">Looking to explore more?</h3>
                                        <h5 className="mtop-20" style={{fontWeight:'400',lineHeight:'26px'}}>Get started with the All-New SellerApp Platform to get real insights into your Amazon Business</h5>

                                        <div className="mtop-20">
                                            <a href="/" target="_blank">
                                                <button className="sp-yellow-btn text-center">Get Started</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>      
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container sp-container sp-image-highlight">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h2>What can the Amazon FBA calculator do for you?</h2>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'30px'}}>
                        <div className="col-md-4 col-lg-4">
                            <ul className="list-section">
                                <li className="list-hover-1"><h4>Calculate Amazon FBA Fees</h4>
                                    <p style={{fontWeight:'100',lineHeight:'28px',marginTop:'15px'}}>Calculate every Amazon selling fee for any product with the Amazon FBA fee calculator</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <ul className="list-section">
                                <li className="list-hover-2"><h4>Compare Fulfilment Modes</h4>
                                    <p style={{fontWeight:'100',lineHeight:'28px',marginTop:'15px'}}>Not sure which is the best fulfillment choice for the product? Compare the best mode with the Amazon FBA calculator</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <ul className="list-section">
                                <li className="list-hover-3"><h4>Analyze Product Profitability</h4>
                                    <p style={{fontWeight:'100',lineHeight:'28px',marginTop:'15px'}}>Analyze the product with the Amazon revenue calculator to understand if the product has ample product margins</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row text-center mtop-10">
                        <h5 className="frthr-qtion">For any further questions  
                            <a className="cool-link" href="support.html">Contact Support</a></h5>
                    </div>
                </div>
                
                <div id="feature-wrapper">
                    <div className="container align-center" style={{maxWidth:'82%',padding: '40px 0px',borderTop: '1px solid rgba(0,0,0,.1)',marginTop: '20px'}}>
                        <div className="col-md-12">
                            <blockquote className="feature-testimonial text-center">
                                <div className="duble-quats">
                                    <img src={double_quate} alt={'double_quate'}/>
                                </div>
                                Amazing Tool for amazon sellers, If you're serious about selling on Amazon then this tool and SellerApp's customer support is the best!
                                <cite style={{color:'#383838',textTransform: 'uppercase', fontStyle: 'normal'}}><strong>alex mun</strong></cite>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div className="sp-container" style={{backgroundColor: '#eafbff'}}>
                    <div className="container center-contents sellerapp">            
                        <div className="row">                
                            <div className="col-md-12">
                                <ul>
                                    <li>
                                        <h3>Interested in SellerApp?</h3>
                                        <h5 className="weight-100">Schedule a call with one of our experts.</h5>
                                    </li>

                                    <li>
                                        <div className="center-contents">
                                            <input className="form-control" type="email" placeholder="Email address" id="email-getstarted" name="email"/>
                                            <button className=" get-start margin-fix">get started</button>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="social-links flex-center margin-fix">
                                            <div>
                                                <div className="flex">
                                                    <a href="/">
                                                        <div style={{color:'#000'}}><i className="fab fa-facebook-f"></i></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex">
                                                    <a href="/">
                                                        <div style={{color:'#000'}}><i className="fab fa-linkedin"></i></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex">
                                                    <a href="/">
                                                        <div style={{color:'#000'}}><i className="fab fa-twitter"></i></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sp-container" id="feature-content-section">
                    <section id="section2">
                        <div className="container full_width_list">
                            <div className="col-md-12">
                                <h2 className="title">Is fulfillment-by-Amazon (FBA) profitable for you? Or should you choose FBM for your Amazon products?</h2>
                            </div>
                            <div className="col_md_12">
                                <h5 style={{lineHeight:'32px',fontWeight:'100'}}>Every Amazon Seller calculates his profits before and after launching his product on Amazon. For a profitable Amazon business, you’ll have to do a bit of research and calculations on your initial investments, cost price, marketing and other variable things like estimated sales, etc to understand your profits and profit margins.Let’s take a closer look and understand your Amazon Selling process and costs better.</h5></div>
                            <div className="col-md-12">
                                <div className="contents-with-list" style={{textAlign:'left'}}>
                                    <table className="table">
                                      <thead style={{color: '#000', textAlign:'center', fontSize: '18px'}}>
                                        <tr style={{borderTop:'2px solid #ccc'}}>
                                          <th scope="col" style={{height: '90px', width: '300px'}}>Product Samples, product costs</th>
                                          <th scope="col" style={{height: '90px', width: '300px'}}>Product packing and labelling costs</th>
                                          <th scope="col" style={{height: '90px', width: '300px'}}>Marketing costs, product ads</th>
                                        </tr>
                                      </thead>
                                      <tbody style={{color: '#000', textAlign:'center', fontSize: '18px', fontWeight: 'bold'}}>
                                        <tr style={{border:'2px solid #ccc', borderLeft: 0, borderRight: 0}}>
                                          <td style={{height: '90px', width: '300px'}}>Storage, warehousing costs</td>
                                          <td style={{height: '90px', width: '300px'}}>Cost of goods</td>
                                          <td style={{height: '90px', width: '300px'}}>Referral and Closing fees</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12" style={{textAlign:'center'}}>
                                    <h2 className="title">Merchant Fulfillment versus Fulfillment by Amazon (FBA)</h2>
                                    <div className="normal-contents" style={{textAlign:'left'}}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6" style={{padding: '0'}}>
                                    <div className="normal-contents" style={{textAlign:'left'}}>
                                        <div className="contents-with-list" style={{textAlign:'left'}}>
                                            <ul style={{listStyle:'none'}}>
                                                <div className="column-sec column-sec-1">
                                                    <li></li>
                                                    <p>Amazon FBM requires a firm hand on your selling responsibilities to manage things smoothly as well as make profits. Shipments and customer service must be well handled. Since FBA sellers get a better advantage over FBM sellers you might also have to lower your selling price to compete against FBA sellers with similar products to get the BuyBox advantage.</p>
                                                </div>
                                                <div className="column-sec column-sec-1 column-sec-2">
                                                    <li></li>
                                                    <p>FBM gives you more flexibility and you are more inclined to build a diverse sustainable business on solid grounds. You have more inventory control, packaging and shipping control. Interact with your customers directly. FBM works best for products with lesser profit margins</p>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{padding: '0'}}>
                                    <div className="normal-contents" style={{textAlign:'left'}}>
                                        <div className="contents-with-list" style={{textAlign:'left'}}>
                                            <ul style={{listStyle:'none'}}>
                                                <div className="column-sec">
                                                    <li></li>
                                                    <p>Amazon FBA is great for new sellers who want to stand better in the competition by providing faster delivery and to get access to a much wider customer base, for high-volume sellers and for large and expensive products. Amazon FBA is very useful and gives amazing advantages like Prime eligibility, Buy Box advantages. Also free time to focus on strengthening your business</p>
                                                </div>
                                                <div className="column-sec column-sec-2">
                                                    <li></li>
                                                    <p>Amazon FBA isn’t free. It can eat up your profit margin if you don't calculate it right for the products you sell using FBA. FBA charges include fees for Order handling, Pick &amp; pack, Outbound shipping, Weight handling, 30-day storage, Inbound shipping, Prep service.</p>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="sellerApp-features">
                    <div className="container">
                        <div className="container text-center">
                            <h2>SellerApp Features you'll love</h2>
                            <h4>We have all that it takes to reach the top of your Amazon business. All under one platform!</h4>
                        </div>
                        <div className="new-con">
                          <ul className="nav nav-tabs">
                            <li className="active">
                                <a data-toggle="tab" href="#home">
                                    <span style={{paddingRight: '10px'}}>
                                    <img src={product_research_icon} alt={'product_research_iocn'}/></span>
                                    Amazon Product Research
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#menu1">
                                    <i className="fas fa-th" style={{paddingRight: '10px'}}></i>Amazon Keyword Research
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#menu2">
                                    <i className="fab fa-dropbox" style={{paddingRight: '10px'}}></i>Competitor Research
                                </a>
                            </li>
                            
                          </ul>
                          <div className="tab-content">
                            <div id="home" className="tab-pane fade in active">
                                <div className="sp-content-section" id="content1">
                                    <div className="center-contents">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12 col-md-12 hidden-xs">
                                                <img src={product_research} alt={'product_research'} width="100%"/>
                                            </div>
                                            <div className="col-lg-6 col-sm-12 col-md-12 text-left prdct-cntnt-right">
                                                <h3>Amazon Product Research </h3>
                                                <ul>
                                                    <li className="weight-100 mtop-10" style={{lineHeight:'28px'}}>Big product database. 35M+ products to choose the most profitable product.</li>
                                                    <li className="weight-100 mtop-10" style={{lineHeight:'28px'}}>Proven best seller products. Great inspirations for an amazing start.</li>
                                                    <li className="weight-100 mtop-10" style={{lineHeight:'28px'}}>Real time live data on the Chrome Extension. Because you need to track KPIs live.</li>
                                                </ul>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="menu1" className="tab-pane fade">
                                <div className="sp-content-section" id="content2">
                                    <div className="center-contents">
                                        <div className="col-md-6 hidden-xs">
                                            <img src={keyword_research} alt={'keyword_research'} width="100%"/>
                                        </div>
                                        <div className="col-md-6 text-left prdct-cntnt-right">
                                            <h3>Amazon Keyword Research </h3>
                                            <ul>
                                                <li className="weight-100 mtop-10" style={{lineHeight:'28px'}}>Top Keywords for Amazon SEO and PPC. For maximum product visibility.</li>
                                                <li className="weight-100 mtop-10" style={{lineHeight:'28px'}}>Best Keyword Suggestions. Get a sneak peek into keywords you never thought of.</li>
                                                <li className="weight-100 mtop-10" style={{lineHeight:'28px'}}>Filtering and Sorting Options. To discover the best keywords for your product.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="menu2" className="tab-pane fade">
                                <div className="sp-content-section" id="content1">
                                    <div className="center-contents">
                                        <div className="col-md-6 hidden-xs">
                                            <img src={competitor_research} alt={'competitor_research'} width="100%"/>
                                        </div>
                                        <div className="col-md-6 text-left prdct-cntnt-right">
                                            <h3>Competitor Research</h3>
                                            <ul>
                                                <li className="mtop-10" style={{lineHeight:'28px'}}>Track Products and Sellers. Understand what market big shots do right in their listings.</li>
                                                <li className="mtop-10" style={{lineHeight:'28px'}}>Complete Competitor Product Data. Get inspired by their product strategies.</li>
                                                <li className="mtop-10" style={{lineHeight:'28px'}}>Understand what can you do better than your competitors to get better than them.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>                                
                          </div>
                        </div>
                    </div>
                </div>

                <Blog/>

                <div className="mtop-30">
                    <div id="conversion-div">
                        <div className="container-fluid design_3">
                            <div className="container center-contents">
                                <div className="row">
                                    <div className="col-md-2 col-sm-2 hidden-xs">
                                        <img className="img-fluid" src={loude_speaker} alt={'loude_speaker'} width="100%"/>
                                    </div>
                                    <div className="col-md-10 col-sm-10">
                                        <div className="explore">
                                            <h3 className="title">Looking to explore more?</h3>
                                            <h5 className="mtop-20" style={{fontWeight:'400',lineHeight:'26px'}}>Get started with the All-New SellerApp Platform to get real insights into your Amazon Business</h5>

                                            <div className="mtop-20">
                                                <a href="/" target="_blank">
                                                    <button className="sp-yellow-btn text-center">request demo</button>
                                                </a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>      
                            </div>
                        </div>
                    </div>
                </div> 

                <section id="faq-section">
                    <div className="container common-panel">
                        <div className="wow fadeIn" data-wow-duration="2s">
                            <h2 className="title">Frequently Asked Questions</h2>
                        </div>
                        <div className="panel-group" id="faqAccordion">
                            <div className="panel faq-panel">
                                <div className="panel-heading accordion-toggle question-toggle" >
                                    <a href="#fba_calculator" id="fba-calculator" data-toggle="collapse" data-parent="#faqAccordion" >
                                        <h5 className="panel-title">What is the Amazon FBA calculator?</h5>
                                        <img className="indicator pull-right" src={arrow_down} alt={'img'}/>
                                    </a>
                                </div>
                                <div className="panel-collapse collapse" id="fba_calculator">
                                    <div className="panel-body">
                                        <p>The Amazon FBA calculator is an essential tool for an Amazon seller to understand the Amazon FBA fees, compare fulfillment methods. The Amazon FBA calculator is also an excellent tool to understand the product profitability to analyze if a product is worth the efforts and money.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel faq-panel">
                                <div className="panel-heading accordion-toggle question-toggle " >
                                    <a href="#fba_vs_fbm" data-toggle="collapse" data-parent="#faqAccordion">
                                        <h5 className="panel-title">What is the Amazon FBA and the Amazon FBM?</h5>
                                        <img className="indicator pull-right" src={arrow_down} alt={'img'}/>
                                    </a>
                                </div>
                                <div className="panel-collapse collapse"  id="fba_vs_fbm">
                                    <div className="panel-body">
                                        <p>FBA (fulfillment by Amazon) is an advanced, world-class fulfillment network by Amazon which opens Amazon’s warehouses, distribution services, and world-class customer service to you as a seller. Amazon handles the packing, shipping, returns and customer services for you.</p>

                                        <p>When you ship orders out yourself, it is known as seller-fulfilled or fulfillment by Merchant (FBM).</p>
                                        <p>The Amazon FBA fee Calculator helps you understand the best fulfilment option for every Amazon Product.</p>
                                    </div>
                                </div>
                            </div>                             
                            <div className="panel faq-panel">
                                <div className="panel-heading accordion-toggle question-toggle ">
                                    <a href="#how_fba_calc" data-toggle="collapse" data-parent="#faqAccordion">
                                        <h5 className="panel-title">How to use the Amazon FBA calculator?</h5>
                                            <img className="indicator pull-right" src={arrow_down} alt={'img'}/>
                                    </a>
                                </div>
                                <div className="panel-collapse collapse"  id="how_fba_calc">
                                    <div className="panel-body">
                                        <p>Copy the URL or the ASIN of your Amazon product and paste it.</p>
                                        <p>In the FBA profit calculator enter the item price, shipping and seller fulfillment cost, the cost to ship it to Amazon and the total cost of the product per unit.</p>
                                        <p>Analyse the report comparing the net profit and the profit margin of using FBM vs FBA calculated by the FBA calculator</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="panel faq-panel">
                                <div className="panel-heading accordion-toggle question-toggle collapsed" >
                                    <a href="#fba_sellers_profit" data-toggle="collapse" data-parent="#faqAccordion">
                                        <h5 className="panel-title">How to find the seller profits in the Amazon FBA profit calculator?</h5>
                                        <img className="indicator pull-right" src={arrow_down} alt={'img'}/>
                                    </a>
                                </div>
                                <div className="panel-collapse collapse"  id="fba_sellers_profit" >
                                    <div className="panel-body">
                                        <p>Go to Amazon's main page and search for the product in it.</p>
                                        <p>Copy the URL or the ASIN of the product you are interested in</p>
                                        <p>In the FBA revenue calculator focus on the right-hand Amazon fulfillment column and enter your item price, the cost to ship it to Amazon and the total cost of the product per unit.</p>
                                        <p>The net profit and the percentage for the particular product is shown by the Amazon FBA calculator report.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel faq-panel">
                                <div className="panel-heading accordion-toggle question-toggle collapsed" >
                                    <a href="#benefits_of_fba" data-toggle="collapse" data-parent="#faqAccordion">
                                        <h5 className="panel-title">What are the benefits of using FBA?</h5>
                                            <img className="indicator pull-right" src={arrow_down} alt={'img'}/>
                                    </a>
                                </div>
                                <div className="panel-collapse collapse"  id="benefits_of_fba">
                                    <div className="panel-body">
                                        <p>FBA is a very useful service for Amazon Sellers. Using Amazon’s fulfillment services can grow your business faster at the same time gain the trust of your customers</p>
                                        <p>Stores your products in Amazon's fulfillment centers</p>
                                        <p>Picks packs and delivers your products</p>
                                        <p>Takes care of customer service and returns for you</p>
                                        <p>Best of all, Amazon FBA also helps you scale your business and reach more customers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel faq-panel">
                                <div className="panel-heading accordion-toggle question-toggle collapsed" >
                                    <a href="#cons_of_fba" data-toggle="collapse" data-parent="#faqAccordion">
                                        <h5 className="panel-title">What are the cons of using FBA?</h5>
                                        <img className="indicator pull-right" src={arrow_down} alt={'img'}/>
                                    </a>
                                </div>
                                <div className="panel-collapse collapse"  id="cons_of_fba">
                                    <div className="panel-body">
                                        <p>On comparing FBA vs FBM, you can find advantages and disadvantages on both the sides. FBA is costlier,also Amazon takes a part of your profit sometimes, inventory tracking, product volume to ship to Amazon’s warehouse, deciding your inventory capacity for different seasons are the few headaches encountered while using FBA.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="get-help">
                    <div className="container common-panel">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="wrapper">
                                    <img className="image-normal" src={customer_care} alt={'sellerapp'} />
                                    <img className="image-white" src={customer_care_white} alt={'sellerapp'} />
                                    <p className="heading">Customer Care</p>
                                    <h6 className="sub-heading">Need help? We're just a call away</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="wrapper">
                                    <img className="image-normal" src={chat} alt={'sellerapp'} />
                                    <img className="image-white" src={chat_white} alt={'sellerapp'}/>
                                    <p className="heading">Chat with a human</p>
                                    <h6 className="sub-heading">Have a quick question? We're right here</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="wrapper">
                                    <img className="image-normal" src={email_icon} alt={'sellerapp'} />
                                    <img className="image-white" src={email_icon_white} alt={'sellerapp'} />
                                    <p className="heading">Email</p>
                                    <h6 className="sub-heading">Reach out to us via email </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              
                <div id="free-tool-section">
                    <div className="container sp-container">
                        <div className="mtop-20" id="free-tools">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="text-center primary-color text-bold title">Other Free Product Tools</h2>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="product-box">
                                        <img src={listing_quality} alt='img'/>
                                        <p>Amazon Listing Quality</p>
                                    </div>
                                                            
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="product-box">
                                        <img src={keyword_remove} alt='img'/>
                                        <p>Duplicate Keyword Remover</p>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="product-box">
                                        <img src={listing_quality} alt='img'/>
                                        <p>Amazon Reverse ASIN</p>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="product-box">
                                        <img src={keyword_remove} alt='img'/>
                                        <p>Amazon Product Description Editor</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}

export { AsinbasedContent };
