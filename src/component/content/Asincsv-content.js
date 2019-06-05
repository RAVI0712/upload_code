import React, { Component } from 'react';
import $ from 'jquery';
import { Textbox } from 'react-inputs-validation';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
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
import Universal_remote from '../img/universel-remort-img.jpg';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twiiter.png';
import linkedin from '../img/linkedin.png';
import Blog from '../blog/Blog';
import { Link } from 'react-router-dom';
import ReactFileReader from 'react-file-reader';
import DataTable from 'datatables.net';
import 'datatables.net-bs/js/dataTables.bootstrap';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
var numeral = require('numeral');

class AsincsvContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file_name:'Uploaded File',
            error_block:false,
            CsvToHtmlTable_block:false,
            error_massage:'',
            type:'',
            sampleData:'',
            csvData:'',
            merchant_total_fullfilment_fee:'',
            merchant_selling_proceeds:'',
            amozon_selling_proceeds:'',
            amozon_total_fullfilment_fee:'',            
            amozon_totalProfit:'',
            ship_to_amazon_fee:'',
            total_storage_fee:'',
            merchant_net_margin:'',
            merchant_net_profit:'',
            amazon_fulfillment_fee:'',
            seller_fulfillment_cost:'',
            monthly_storage_cost:'',
            Labor_cost:'',
            packaging_material_cost:'',
            ship_to_customer_cost:'',
            customer_service_cost:'',
            scroll_result:'',
            price: '',
            cost: '',
            length: '',
            width: '',
            height: '',
            weight: '',
            shipping_cost:'',
            weightType: '',
            boxWeight: 0,
            totalWeight: 0,
            showComponent: false,
            change_shipping_cost:'',
            fbaSizeTier: '',
            select: '',
            battery: false,
            clothing: false,
            fulfillmentFee: 0,
            storageFeeJanSept: 0,
            storageFeeOctDec: 0,
            referralFee: 0,
            addedReferral: { status: false, amount: 0 },
            validate: false,
            showFees: false,
            showfba_btn: false,
            showfbaprofits:false,
            calculated: false,
            total_cost:0,
            totalFeesJanSept: 0,
            totalProfitJanSept: 0,
            totalFeesOctDec: 0,
            totalProfitOctDec: 0,
            profitMarginJanSept: 0,
            profitMarginOctDec: 0,
            net_profit_margin:'',
            amozon_totalFees:'',
            csvfileinput:[],
        }
        this.fees = {
            'amazon': { percentage: 0.45, minimum: 0.30 },
            'books': { percentage: 0.15, minimum: 0 },
            'camera': { percentage: 0.08, minimum: 0.30 },
            'cellPhone': { percentage: 0.08, minimum: 0.30 },
            'consumer': { percentage: 0.08, minimum: 0.30 },
            'dvd': { percentage: 0.15, minimum: 0 },
            'mattress': { percentage: 0.15, minimum: 0 },
            'home': { percentage: 0.15, minimum: 0.30 },
            'kitchen': { percentage: 0.15, minimum: 0.30 },
            'music': { percentage: 0.15, minimum: 0.30 },
            'instrument': { percentage: 0.15, minimum: 0.30 },
            'office': { percentage: 0.15, minimum: 0.30 },
            'outdoors': { percentage: 0.15, minimum: 0.30 },
            'computers': { percentage: 0.06, minimum: 0.30 },
            'software': { percentage: 0.15, minimum: 0 },
            'sports': { percentage: 0.15, minimum: 0.30 },
            'tools': { percentage: 0.15, minimum: 0.30 },
            'toys': { percentage: 0.15, minimum: 0.30 },
            'unlocked': { percentage: 0.08, minimum: 0.30 },
            'consoles': { percentage: 0.08, minimum: 0 },
            'everythingElse': { percentage: 0.15, minimum: 0.30 }
          }
          this.myDivToFocus = React.createRef()
          this.btnTapped = this.btnTapped.bind(this);
    }

    btnTapped() {
        $("#tgl_hide").toggle();
    }

    calculateTotal = () => {
        this.setState({
            showFees: true,
        },this.scroll_down);
    }
    
    scroll_down (){
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }

    showfba_profit_box = (e) =>{
        this.setState({ 
            showfba_btn: true,
            showfbaprofits: true,
        });
    }

    download() {
        setTimeout(() => {
          const response = {
            file: process.env.PUBLIC_URL + '/dummy.csv',
          };
          window.open(response.file);
        }, 100);
    }

    handleFiles = (files) => {
        let file = files[0];
        var reader = new FileReader();
        var csvjson = require('csvjson');
        
        reader.onload = (e) => {
            this.setState({
                csvData: reader.result,
                file_name: file.name,
            })
            var data  = reader.result;
            var options = {
                delimiter : ',', // optional
                quote     : '"' // optional
              };
              this.setState({
                csvfileinput: csvjson.toObject(data, options),
                CsvToHtmlTable_block:true,
            })
            console.log(this.state.csvfileinput);
        }
        reader.readAsText(files[0]);
        
    }

    handleInput = (val, e) => {
        var temp = Number(val);
        this.setState({
          [e.target.name]: temp
        });
        
    }

    handleBlur  = (e) =>{
        this.setState({
            seller_fulfillment_cost:  this.state.monthly_storage_cost + this.state.Labor_cost + this.state.packaging_material_cost + this.state.ship_to_customer_cost +
            this.state.customer_service_cost,
            merchant_total_fullfilment_fee: this.state.monthly_storage_cost + this.state.Labor_cost + this.state.packaging_material_cost + this.state.ship_to_customer_cost +
            this.state.customer_service_cost,
            amozon_total_fullfilment_fee:this.state.amazon_fulfillment_fee + this.state.ship_to_amazon_fee,
            merchant_selling_proceeds: this.state.price - this.state.shipping_cost - this.state.referralFee - this.state.merchant_total_fullfilment_fee,
        });
    }

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
                                    <div className="home_bnr_btn home_bnr_column">
                                        <div className="csv_upload_box">
                                            <div className="form-control">
                                                <div className="csv_file_name_box">
                                                    <i className="fa fa-paperclip" aria-hidden="true"></i>
                                                    <span id="uploaded_file_name">{this.state.file_name}</span>
                                                </div>
                                                <ReactFileReader  multipleFiles={false} fileTypes={[".csv"]} 
                                                    handleFiles={this.handleFiles}>
                                                    <div className="upload_csv_btn">
                                                        <span>Choose File</span>
                                                    </div>
                                                </ReactFileReader>
                                            </div>
                                            {this.state.error_block && 
                                                <span className="error_massage">{this.state.error_massage}</span>
                                            }
                                            <div className="download_csv_file_box">
                                                <h5 onClick={this.download}>
                                                    <i className="fa fa-download" aria-hidden="true"></i>
                                                    Download our <span>Pre-formatted CSV template</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="calculate_back_div" style={{justifyContent: 'center'}}>
                                            <Link className="back_btn" to="/asin-based"><i className="fa fa-arrow-left" aria-hidden="true"></i>Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {this.state.CsvToHtmlTable_block && 
                    <section className="CsvToHtmlTable">
                        <div className="container">
                            <div className="col-md-12">
                                <h3>Uploaded CSV Data Preview</h3>
                                <table id="table_id" className="table table-bordered table-hover" ref={elem=>$(elem).dataTable()} >
                                    <thead>
                                        <tr>
                                            <th style={{width:'100px'}}>Product ID</th>
                                            <th>Select Product Category</th>
                                            <th>L(in) x</th>
                                            <th>W(in) x</th>
                                            <th>H(in)</th>
                                            <th>Product Weight</th>
                                            <th>Weight Unit</th>
                                            <th>Product Cost</th>
                                            <th>Product Selling Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.csvfileinput.map(csv => {
                                            return ( 
                                                <tr key={csv.Product_ID}>
                                                    <td>{csv.Product_ID}</td>
                                                    <td>{csv.Select_Product_Category}</td>
                                                    <td>{csv.length}</td>
                                                    <td>{csv.width}</td>
                                                    <td>{csv.height}</td>
                                                    <td>{csv.Product_Weight}</td>
                                                    <td>{csv.Weight_Unit}</td>
                                                    <td>{csv.Product_Cost}</td>
                                                    <td>{csv.Product_Selling_Price}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table> 
                                <button  
                                    id="calculate_btn"
                                    className="btn_option btn  btn_transparent"
                                    onClick={this.calculateTotal}
                                    >Calculate
                                </button> 
                            </div>                    
                        </div>                           
                    </section>    
                }  

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
                
                {this.state.showFees && 
                    <section ref={this.myDivToFocus} className="ang-hide" id="fba-results" style={{position:'relative'}}>
                        <div className="container">
                            <div className="box-body">
                                <div className="RevenueClacU csv_uploaded_Result merchant_result">
                                    <div className="center-contents">
                                        <h3>FBA Calculation For Merchant</h3>
                                    </div> 
                                    <table className="table table-responsive" ref={elem=>$(elem).dataTable()}>
                                        <thead>
                                            <tr>
                                                <th><span>ASIN Number</span></th>
                                                <th>
                                                    <div >
                                                        <span className="csv_result_head">Revenue Merchant fulfillment</span>
                                                        <div className="csv_result_head_btm">
                                                            <span title="Item Price">IP</span>
                                                            <span title="Shipping">SHI</span>
                                                            <span title="Total Revenue">TR</span>
                                                            <span title="Selling on Amazon Fees">SAF</span>                                                                
                                                        </div>
                                                    </div>
                                                </th>
                                                <th> 
                                                    <div>
                                                        <div className="csv_result_head">
                                                            <span>Merchant fulfillment Cost</span>
                                                        </div>
                                                        <div className="csv_result_head_btm">
                                                            <span title="Seller Fulfillment Cost" style={{width:'122px'}}>SFC</span>
                                                            <span title="Fulfillment by Amazon Fees">FBA</span>
                                                            <span title="Ship to Amazon">SA</span>
                                                            <span title="Total Fulfillment Cost">TFC</span>
                                                            <span title="Selling Proceeds">SP</span>                                                                
                                                            <span title="Cost of Product" style={{width:'122px'}}>CP</span>                                                                
                                                        </div>
                                                    </div>
                                                </th>
                                                <th> 
                                                    <div>
                                                        <div className="csv_result_head">
                                                            <span>Merchant FBA Result</span>
                                                        </div>
                                                        <div className="csv_result_head_btm">
                                                            <span title="Merchant Net Profit">NF</span>  
                                                            <span title="Merchant Net Margin">NM</span>                                               
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span>B0721GGGS9</span>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Shipping">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling on Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Seller Fulfillment Cost">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Fulfillment by Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Ship to Amazon">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Fulfillment Cost">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling Proceeds">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Cost of Product">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                              
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>B0721GGGS9</span>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Shipping">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling on Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Seller Fulfillment Cost">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Fulfillment by Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Ship to Amazon">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Fulfillment Cost">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling Proceeds">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Cost of Product">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                              
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>B0721GGGS9</span>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Shipping">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling on Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Seller Fulfillment Cost">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Fulfillment by Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Ship to Amazon">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Fulfillment Cost">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling Proceeds">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Cost of Product">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                              
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="RevenueClacU csv_uploaded_Result amazon_result">
                                    <div className="center-contents">
                                        <h3>FBA Calculation For Amazon</h3>
                                    </div> 
                                    <table className="table table-responsive" ref={elem=>$(elem).dataTable()}>
                                        <thead>
                                            <tr>
                                                <th><span>ASIN Number</span></th>
                                                <th>
                                                    <div >
                                                        <div className="csv_result_head">
                                                            <i className="fab fa-amazon"></i>
                                                            <span className="mleft-5"></span>
                                                            <span>Revenue Amazon fulfillment</span>
                                                        </div>
                                                        <div className="csv_result_head_btm">
                                                            <span title="Item Price">IP</span>
                                                            <span title="Shipping">SHI</span>
                                                            <span title="Total Revenue">TR</span>
                                                            <span title="Selling on Amazon Fees">SAF</span>                                                                
                                                        </div>
                                                    </div>
                                                </th>
                                                <th> 
                                                    <div>
                                                        <div className="csv_result_head">
                                                            <i className="fab fa-amazon"></i>
                                                            <span className="mleft-5"></span>
                                                            <span>Amazon fulfillment Cost</span>
                                                        </div>
                                                        <div className="csv_result_head_btm">
                                                            <span title="Seller Fulfillment Cost" style={{width:'122px'}}>SFC</span>
                                                            <span title="Fulfillment by Amazon Fees" >FBA</span>
                                                            <span title="Ship to Amazon">SA</span>
                                                            <span title="Total Fulfillment Cost">TFC</span>
                                                            <span title="Selling Proceeds">SP</span>                                                                
                                                            <span title="Cost of Product" style={{width:'122px'}}>CP</span>                                                                
                                                        </div>
                                                    </div>
                                                </th>
                                                <th> 
                                                    <div>
                                                        <div className="csv_result_head">
                                                            <span>Amazon FBA Result</span>
                                                        </div>
                                                        <div className="csv_result_head_btm">
                                                            <span title="Amazon Net Profit">NF</span>  
                                                            <span title="Amazon Net Margin">NM</span>                                               
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span>B0721GGGS9</span>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Shipping">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling on Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Seller Fulfillment Cost">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Fulfillment by Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Ship to Amazon">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Fulfillment Cost">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling Proceeds">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Cost of Product">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                              
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>B0721GGGS9</span>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Shipping">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling on Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Seller Fulfillment Cost">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Fulfillment by Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Ship to Amazon">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Fulfillment Cost">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling Proceeds">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Cost of Product">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                              
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>B0721GGGS9</span>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Shipping">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling on Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Seller Fulfillment Cost">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>
                                                        <span title="Fulfillment by Amazon Fees">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Ship to Amazon">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Fulfillment Cost">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Selling Proceeds">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Cost of Product">
                                                            $<Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleInput(val, e);
                                                                }}
                                                                onBlur={this.handleBlur}
                                                            />
                                                        </span>                                                                
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="csv_result_head_btm">
                                                        <span title="Item Price">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>
                                                        <span title="Total Revenue">
                                                            $<div>{numeral(this.state.price).format('0.00')}</div>
                                                        </span>                                                              
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-right" style={{marginBottom:'30px'}}>
                                    <button
                                        className="btn sp-blue-btn"
                                        id="caluclateProfit"
                                        disabled={this.state.showfba_btn}
                                        onClick={this.showfba_profit_box}
                                        >Calculate FBA Profits
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                }

                {this.state.showfbaprofits && 
                    <section className="fbaprofits" id="fbaprofits">
                        <div className="container">
                            <h3 style={{fontWeight:'300',paddingLeft:'15px'}}>Calculated FBA Profits</h3>
                            <div className="fba-result-wrapper row">
                                <div className="col-md-9 flex-center" style={{alignItems:'flex-start'}}>
                                    <img src={Universal_remote} alt={'product'} width="30"/>
                                    <p>Caavo Control Center Universal TV Remote & Home Theater Hub 4K HDR HDMI Switch Voice Control Compatible w/Apple TV Fire TV Roku Nvidia Shield Sonos Sound Bars AVR Xbox Playstation Google Voice Alexa</p>
                                </div>
                                <div className="hidden-sm hidden-xs col-md-3">
                                    <div className="text-center">
                                        <button className="sp-white-btn text-center" type="button" style={{marginTop:'10px'}}>
                                            <i className="fa fa-download"></i>
                                            <span className="mleft-5">Download </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="result-wrapper">
                                    <div className="fbm-result-box-wrapper col-md-4 col-sm-6 col-md-offset-2 text-center">
                                        <div className="box" style={{backgroundColor:'#b1d3f1'}}>
                                            <div className="flex-center">
                                                <div style={{margin:'0 auto'}}>
                                                    <h5>${numeral(this.state.amozon_totalProfit).format('0.00')}</h5>
                                                    <h4> 
                                                        <i className="fa fa-money"></i>
                                                        <span className="mleft-5">Net Profit</span>
                                                    </h4>
                                                </div>
                                                <div style={{margin:'0 auto'}}>
                                                    <h5>${numeral(this.state.amozon_totalProfit).format('0.00')} %</h5>
                                                    <h4><i className="fa fa-line-chart"></i>
                                                        <span className="mleft-5">Net Margin</span>
                                                    </h4>
                                                </div>
                                            </div>
                                            <h4 className="text-center primary-color" style={{position:'relative',top:'15px',fontWeight:'400'}}>Fulfilled By Merchant</h4></div>
                                    </div>
                                    <div className="fba-result-box-wrapper col-md-4 col-sm-6 text-center">
                                        <div className="box" style={{backgroundColor:'#f3a847'}}>
                                            <div className="flex-center">
                                                <div style={{margin:'0 auto'}}>
                                                    <h5>${numeral(this.state.amozon_totalProfit).format('0.00')}</h5>
                                                    <h4><i className="fa fa-money"></i><span className="mleft-5">Net Profit</span></h4>
                                                </div>
                                                <div style={{margin:'0 auto'}}>
                                                    <h5>${numeral(this.state.amozon_totalProfit).format('0.00')}%</h5>
                                                    <h4> <i className="fa fa-line-chart"></i><span className="mleft-5">Net Margin</span></h4>
                                                </div>
                                            </div>
                                            <h4 className="text-center" style={{position:'relative',top:'15px',fontWeight:'400'}}>Fulfilled By Amazon</h4></div>
                                    </div>
                                    <div className="col-md-offset-2"></div>
                                </div>
                            </div>
                            <div style={{paddingTop:'40px'}}>
                                <div className="container text-center">
                                    <button className="sp-blue-btn text-center" type="button" data-toggle="modal" data-target="#shareModal">
                                        <i className="fa fa-upload"></i>
                                        <span className="mleft-5">Share Results</span>
                                    </button>
                                    <div className="modal fade" id="shareModal" role="dialog">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button className="close" type="button" data-dismiss="modal">×</button>
                                                    <h4 className="modal-title">Share your fba results</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="social" style={{position:'relative',zIndex:'10'}}>
                                                        <a href="/" className="social__item">
                                                            <img src={facebook} alt={'facebook'}/>  
                                                        </a>

                                                        <a href="/" className="social__item">
                                                            <img src={twitter} alt={'twitter'}/>
                                                        </a>
                                                        
                                                        <a href="/" className="social__item">
                                                            <img src={instagram} alt={'instagram'}/>  
                                                        </a>

                                                        <a href="/" className="social__item">
                                                            <img src={linkedin} alt={'linkedin'}/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button className="btn btn-default" type="button" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }

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

export { AsincsvContent };
