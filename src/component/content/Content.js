import React, { Component } from 'react';
import { Textbox, Checkbox, Select } from 'react-inputs-validation';
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
import $ from 'jquery';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import Blog from '../blog/Blog';
import { Link } from 'react-router-dom';

var numeral = require('numeral');


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            merchant_total_fullfilment_fee:'',
            merchant_selling_proceeds:'',
            merchant_product_cost:'',
            merchant_total_profit:'',
            merchant_total_margin:'',
            amazon_total_margin:'',
            amazon_total_profit:'',
            amazon_product_cost:'',
            merchant_total_revenue:'',
            amazon_selling_proceeds:'',
            amazon_total_fullfilment_fee:'',            
            amazon_totalProfit:'',
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
            amazon_totalFees:'',
        };
    
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

    reset = () => {
        this.setState({
            ship_to_amazon_fee:'',
            merchant_total_revenue:'',
            merchant_product_cost:'',
            amazon_product_cost:'',
            merchant_total_fullfilment_fee:'',
            merchant_selling_proceeds:'',
            amazon_selling_proceeds:'',
            amazon_total_fullfilment_fee:'', 
            amazon_totalFees:'',
            merchant_net_margin:'',
            merchant_net_profit:'',
            amazon_fulfillment_fee:'',
            seller_fulfillment_cost:'',
            monthly_storage_cost:'',
            Labor_cost:'',
            packaging_material_cost:'',
            ship_to_customer_cost:'',
            customer_service_cost:'',
            price: '',
            cost: '',
            showComponent: false,
            scroll_result:'',
            length: '',
            width: '',
            height: '',
            weight: '',
            boxWeight: 0,
            shipping_cost:'',
            totalWeight: 0,
            fbaSizeTier: '',
            select: '',
            change_shipping_cost:'',
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
            total_storage_fee:'',
            amazon_totalProfit:'',
        });
    }    
    
    calculateTotal = () => {
        if (this.state.clothing) {
          this.setState({
            fulfillmentFee: this.state.fulfillmentFee + 0.40
          }, () => {
            this.setState({
                merchant_total_fullfilment_fee: this.state.referralFee + this.state.monthly_storage_cost + this.state.Labor_cost + this.state.packaging_material_cost + this.state.ship_to_customer_cost +
                this.state.customer_service_cost,
                total_storage_fee:this.state.storageFeeJanSept + this.state.storageFeeOctDec,
                amazon_fulfillment_fee:((this.state.storageFeeJanSept + this.state.storageFeeOctDec)  / 12) + this.state.fulfillmentFee,
                amazon_totalFees:  this.state.referralFee + this.state.fulfillmentFee + this.state.total_storage_fee,
                amazon_totalProfit: this.state.price - this.state.referralFee - this.state.amazon_totalFees - this.state.cost,
                totalFeesJanSept: this.state.referralFee + this.state.fulfillmentFee + this.state.storageFeeJanSept,
                totalProfitJanSept: this.state.price - this.state.referralFee - this.state.fulfillmentFee - this.state.storageFeeJanSept - this.state.cost,
                totalFeesOctDec: this.state.referralFee + this.state.fulfillmentFee + this.state.storageFeeOctDec,
                totalProfitOctDec: this.state.price - this.state.referralFee - this.state.fulfillmentFee - this.state.storageFeeOctDec - this.state.cost,
            }, () => {
                this.setState({
                    merchant_total_revenue: this.state.price + this.state.shipping_cost ,
                    amazon_total_fullfilment_fee: this.state.amazon_fulfillment_fee + this.state.referralFee,
                    profitMarginJanSept: ((this.state.price - this.state.totalFeesJanSept - this.state.cost) * 100 / this.state.price).toFixed(2),
                    profitMarginOctDec: ((this.state.price - this.state.totalFeesOctDec - this.state.cost) * 100 / this.state.price).toFixed(2),
                    net_profit_margin:((this.state.price - this.state.amazon_totalFees - this.state.cost) * 100 / this.state.price).toFixed(2),
                }, () => {
                    this.setState({
                        merchant_selling_proceeds: this.state.price - this.state.merchant_total_fullfilment_fee,
                        amazon_selling_proceeds:this.state.price - this.state.amazon_total_fullfilment_fee,
                    }, () => {
                        this.setState({
                            merchant_total_profit:this.state.merchant_selling_proceeds - this.state.merchant_product_cost,
                            amazon_total_profit:this.state.amazon_selling_proceeds - this.state.amazon_product_cost,
                        }, () => {
                            this.setState({
                                showFees: true,
                                merchant_total_margin:(this.state.merchant_total_profit)*100/this.state.price,
                                amazon_total_margin:(this.state.amazon_total_profit)*100/this.state.price,
                            },this.scroll_down);
                        });
                    });
                });
            });
          });
        } else if (this.state.battery) {
          this.setState({
            fulfillmentFee: this.state.fulfillmentFee + 0.11
          }, () => {
            this.setState({
                merchant_total_fullfilment_fee: this.state.referralFee + this.state.monthly_storage_cost + this.state.Labor_cost + this.state.packaging_material_cost + this.state.ship_to_customer_cost +
                this.state.customer_service_cost,
                total_storage_fee:this.state.storageFeeJanSept + this.state.storageFeeOctDec,
                amazon_fulfillment_fee:((this.state.storageFeeJanSept + this.state.storageFeeOctDec)  / 12) + this.state.fulfillmentFee,
                amazon_totalFees:  this.state.referralFee + this.state.fulfillmentFee + this.state.total_storage_fee,
                amazon_totalProfit: this.state.price - this.state.referralFee - this.state.amazon_totalFees - this.state.cost,
                totalFeesJanSept: this.state.referralFee + this.state.fulfillmentFee + this.state.storageFeeJanSept,
                totalProfitJanSept: this.state.price - this.state.referralFee - this.state.fulfillmentFee - this.state.storageFeeJanSept - this.state.cost,
                totalFeesOctDec: this.state.referralFee + this.state.fulfillmentFee + this.state.storageFeeOctDec,
                totalProfitOctDec: this.state.price - this.state.referralFee - this.state.fulfillmentFee - this.state.storageFeeOctDec - this.state.cost,
            }, () => {
                this.setState({
                    merchant_total_revenue: this.state.price + this.state.shipping_cost ,
                    amazon_total_fullfilment_fee: this.state.amazon_fulfillment_fee + this.state.referralFee,
                    profitMarginJanSept: ((this.state.price - this.state.totalFeesJanSept - this.state.cost) * 100 / this.state.price).toFixed(2),
                    profitMarginOctDec: ((this.state.price - this.state.totalFeesOctDec - this.state.cost) * 100 / this.state.price).toFixed(2),
                    net_profit_margin:((this.state.price - this.state.amazon_totalFees - this.state.cost) * 100 / this.state.price).toFixed(2),
                }, () => {
                    this.setState({
                        merchant_selling_proceeds:this.state.price - this.state.merchant_total_fullfilment_fee,
                        amazon_selling_proceeds:this.state.price - this.state.amazon_total_fullfilment_fee,
                    }, () => {
                        this.setState({
                            merchant_total_profit:this.state.merchant_selling_proceeds - this.state.merchant_product_cost,
                            amazon_total_profit:this.state.amazon_selling_proceeds - this.state.amazon_product_cost,
                        }, () => {
                            this.setState({
                                showFees: true,
                                merchant_total_margin:(this.state.merchant_total_profit)*100/this.state.price,
                                amazon_total_margin:(this.state.amazon_total_profit)*100/this.state.price,
                            },this.scroll_down);
                        });
                    });
                });
            });
          });
        } else {
            this.setState({
                merchant_total_fullfilment_fee: this.state.referralFee  + this.state.monthly_storage_cost + this.state.Labor_cost + this.state.packaging_material_cost + this.state.ship_to_customer_cost +
                this.state.customer_service_cost,
                total_storage_fee:this.state.storageFeeJanSept + this.state.storageFeeOctDec,
                amazon_fulfillment_fee:((this.state.storageFeeJanSept + this.state.storageFeeOctDec)  / 12) + this.state.fulfillmentFee,
                amazon_totalFees:  this.state.referralFee + this.state.fulfillmentFee + this.state.total_storage_fee,
                amazon_totalProfit: this.state.price - this.state.referralFee - this.state.amazon_totalFees - this.state.cost,
                totalFeesJanSept: this.state.referralFee + this.state.fulfillmentFee + this.state.storageFeeJanSept,
                totalProfitJanSept: this.state.price - this.state.referralFee - this.state.fulfillmentFee - this.state.storageFeeJanSept - this.state.cost,
                totalFeesOctDec: this.state.referralFee + this.state.fulfillmentFee + this.state.storageFeeOctDec,
                totalProfitOctDec: this.state.price - this.state.referralFee - this.state.fulfillmentFee - this.state.storageFeeOctDec - this.state.cost,
            }, () => {
                this.setState({
                    merchant_total_revenue: this.state.price + this.state.shipping_cost ,
                    amazon_total_fullfilment_fee: this.state.amazon_fulfillment_fee + this.state.referralFee,
                    profitMarginJanSept: ((this.state.price - this.state.totalFeesJanSept - this.state.cost) * 100 / this.state.price).toFixed(2),
                    profitMarginOctDec: ((this.state.price - this.state.totalFeesOctDec - this.state.cost) * 100 / this.state.price).toFixed(2),
                    net_profit_margin:((this.state.price - this.state.amazon_totalFees - this.state.cost) * 100 / this.state.price).toFixed(2),
                }, () => {
                    this.setState({
                        merchant_selling_proceeds:this.state.price - this.state.merchant_total_fullfilment_fee,
                        amazon_selling_proceeds:this.state.price - this.state.amazon_total_fullfilment_fee,
                    }, () => {
                        this.setState({
                            merchant_total_profit:this.state.merchant_selling_proceeds - this.state.merchant_product_cost,
                            amazon_total_profit:this.state.amazon_selling_proceeds - this.state.amazon_product_cost,
                        }, () => {
                            this.setState({
                                showFees: true,
                                merchant_total_margin:(this.state.merchant_total_profit)*100/this.state.price,
                                amazon_total_margin:(this.state.amazon_total_profit)*100/this.state.price,
                            },this.scroll_down);
                        });
                    });
                });
            });
            
        }
    }

    calculateStorageFee = () => {
        if (this.state.fbaSizeTier.split(' ')[1] === "Standard") {
          this.setState({
            storageFeeJanSept: 0.69 * this.state.volume,
            storageFeeOctDec: 2.40 * this.state.volume
          }, this.calculateTotal);
          
        } else {
          this.setState({
            storageFeeJanSept: 0.48 * this.state.volume,
            storageFeeOctDec: 1.20 * this.state.volume
          }, this.calculateTotal);
        }
    }
    
    calculateWeightFee = () => {
        let shippingWeight = Number(this.state.totalWeight);
        if (this.state.fbaSizeTier === "Small Standard") {
          if (shippingWeight <= 0.625) {
            this.setState({
              fulfillmentFee: 2.41
            }, this.calculateStorageFee)
          } else if (shippingWeight > 0.625 && shippingWeight <= 1) {
            this.setState({
              fulfillmentFee: 2.48
            }, this.calculateStorageFee)
          }
        } else if (this.state.fbaSizeTier === "Large Standard") {
          if (shippingWeight <= 0.625) {
            this.setState({
              fulfillmentFee: 3.19
            }, this.calculateStorageFee)
          } else if (shippingWeight > 0.625 && shippingWeight <= 1) {
            this.setState({
              fulfillmentFee: 3.28
            }, this.calculateStorageFee)
          } else if (shippingWeight > 1 && shippingWeight <= 2) {
            this.setState({
              fulfillmentFee: 4.76
            }, this.calculateStorageFee)
          } else if (shippingWeight > 2 && shippingWeight <= 3) {
            this.setState({
              fulfillmentFee: 5.26
            }, this.calculateStorageFee)
          } else if (shippingWeight > 3 && shippingWeight <= 20) {
            let differenceFee = (shippingWeight - 3) * 0.38 + 5.26;
            this.setState({
              fulfillmentFee: differenceFee
            }, this.calculateStorageFee)
          } else if (shippingWeight > 20 && shippingWeight < 70) {
            console.log(`Your product missed the Large Standard Tier by ${shippingWeight - 20}lbs`)
            let differenceFee = (shippingWeight - 2) * 0.38 + 8.26;
            this.setState({
              fbaSizeTier: 'Small Oversize',
              fulfillmentFee: differenceFee
            }, this.calculateStorageFee)
          }
        } else if (this.state.fbaSizeTier === "Small Oversize") {
          if (shippingWeight <= 70) {
            let differenceFee = (shippingWeight - 2) * 0.38 + 8.26;
            this.setState({
              fulfillmentFee: differenceFee
            }, this.calculateStorageFee)
          } else if (shippingWeight > 70) {
            console.log(`Your product missed the Small Oversize Tier by ${shippingWeight - 70}lbs`)
            let differenceFee = (shippingWeight - 2) * 0.39 + 9.79;
            this.setState({
              fbaSizeTier: 'Medium Oversize',
              fulfillmentFee: differenceFee
            }, this.calculateStorageFee)
          }
        } else if (this.state.fbaSizeTier === "Medium Oversize") {
          if (shippingWeight <= 150) {
            let differenceFee = (shippingWeight - 2) * 0.39 + 9.79;
            this.setState({
              fulfillmentFee: differenceFee
            }, this.calculateStorageFee)
          } else if (shippingWeight > 150) {
            console.log(`Your product missed the Medium Oversize Tier by ${shippingWeight - 150}lbs`)
            let differenceFee = (shippingWeight - 90) * 0.91 + 137.32;
            this.setState({
              fbaSizeTier: 'Special Oversize',
              fulfillmentFee: differenceFee
            }, this.calculateStorageFee)
          }
        } else if (this.state.fbaSizeTier === "Large Oversize") {
          if (shippingWeight <= 150) {
            let differenceFee = (shippingWeight - 90) * 0.79 + 75.78;
            this.setState({
              fulfillmentFee: differenceFee
            }, this.calculateStorageFee)
          } else if (shippingWeight > 150) {
            console.log(`Your product missed the Large Oversize Tier by ${shippingWeight - 150}lbs`)
            let differenceFee = (shippingWeight - 90) * 0.91 + 137.32;
            this.setState({
              fbaSizeTier: 'Special Oversize',
              fulfillmentFee: differenceFee
            }, this.calculateStorageFee)
          }
        } else if (this.state.fbaSizeTier === "Special Oversize") {
          let differenceFee = (shippingWeight - 90) * 0.91 + 137.32;
          this.setState({
            fulfillmentFee: differenceFee
          }, this.calculateStorageFee)
        }
    }
    
    calculateFees = () => {
        this.setState({
          validate: !this.state.validate
        });
    
        if (this.state.totalFeesJanSept > 0) {
          this.setState({
            boxWeight: 0,
            totalWeight: 0,
            fbaSizeTier: '',
            fulfillmentFee: 0,
            storageFeeJanSept: 0,
            storageFeeOctDec: 0,
            calculated: false,
            totalFeesJanSept: 0,
            totalProfitJanSept: 0,
            totalFeesOctDec: 0,
            totalProfitOctDec: 0,
            profitMarginJanSept: 0,
            profitMarginOctDec: 0
          });
        }
    
        if (this.state.price === '' || this.state.length === '' || this.state.width === '' || this.state.height === '' || this.state.weight === '' || this.state.select === '') {
          return;
        }
    
        let dimensions = [Number(this.state.length), Number(this.state.width), Number(this.state.height)].sort((a, b) => {
          return b - a;
        });
    
        let longest = Number(dimensions[0]);
        let median = Number(dimensions[1]);
        let shortest = Number(dimensions[2]);
        let volume = ((longest * median * shortest) / 1728).toFixed(2);
        volume = Number(volume);
        this.setState({ volume });
        let weight;
        if (this.state.weightType === 'oz') {
          weight = Number(this.state.weight / 16).toFixed(2);
          weight = Number(weight);
        } else {
          weight = Number(this.state.weight).toFixed(2);
          weight = Number(weight);
        }

        let dimensionalWeight = ((longest * median * shortest) / 139).toFixed(2);
        dimensionalWeight = Number(dimensionalWeight);
        let girth = ((2 * median) + (2 * shortest)).toFixed(2);
        girth = Number(girth);
        
        //Small Standard
        if (weight <= 0.75 && longest <= 15 && median <= 12 && shortest <= 0.75) {
          this.setState({
            boxWeight: .25,
            fbaSizeTier: 'Small Standard'
          }, () => {
            this.setState({
              totalWeight: weight + this.state.boxWeight
            }, this.calculateWeightFee);
          });
        }
        //Large Standard
        else if (weight <= 20 && longest <= 18 && median <= 14 && shortest <= 8) {
          this.setState({
            boxWeight: .25,
            fbaSizeTier: 'Large Standard'
          }, () => {
            if (weight <= 1) {
              this.setState({
                totalWeight: weight + this.state.boxWeight
              }, this.calculateWeightFee);
            } else {
              weight > dimensionalWeight ? (this.setState({
                totalWeight: weight + this.state.boxWeight
              }, this.calculateWeightFee)) : (this.setState({
                totalWeight: dimensionalWeight + this.state.boxWeight
              }, this.calculateWeightFee))
            }
          });
        }
        //Small Oversize
        else if (weight <= 70 && longest <= 60 && median <= 30 && girth <= 130) {
          this.setState({
            boxWeight: 1,
            fbaSizeTier: 'Small Oversize'
          }, () => {
            weight > dimensionalWeight ? (this.setState({
              totalWeight: weight + this.state.boxWeight
            }, this.calculateWeightFee)) : (this.setState({
              totalWeight: dimensionalWeight + this.state.boxWeight
            }, this.calculateWeightFee))
          });
        }
        //Medium Oversize
        else if (weight <= 150 && longest <= 108 && girth <= 130) {
          this.setState({
            boxWeight: 1,
            fbaSizeTier: 'Medium Oversize'
          }, () => {
            weight > dimensionalWeight ? (this.setState({
              totalWeight: weight + this.state.boxWeight
            }, this.calculateWeightFee)) : (this.setState({
              totalWeight: dimensionalWeight + this.state.boxWeight
            }, this.calculateWeightFee))
          });
        }
        //Large Oversize
        else if (weight <= 150 && longest <= 108 && girth <= 165) {
          this.setState({
            boxWeight: 1,
            fbaSizeTier: 'Large Oversize'
          }, () => {
            weight > dimensionalWeight ? (this.setState({
              totalWeight: weight + this.state.boxWeight
            }, this.calculateWeightFee)) : (this.setState({
              totalWeight: dimensionalWeight + this.state.boxWeight
            }, this.calculateWeightFee))
          });
        }
        //Special Oversize
        else if (weight > 150 && longest > 108 && girth > 165) {
          this.setState({
            boxWeight: 1,
            fbaSizeTier: 'Special Oversize'
          }, () => {
            this.setState({
              totalWeight: weight + this.state.boxWeight
            }, this.calculateWeightFee);
          });
        }
    }

    calculateReferral = (type) => {
        if (type === 'baby') {
          let amount;
          if (this.state.price >= 10) {
            amount = this.state.price * 0.08;
          } else {
            amount = this.state.price * 0.15;
          }
          if (amount > 0.30) {
            this.setState({
              referralFee: this.state.referralFee + amount
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: amount
              }
            });
          } else {
            this.setState({
              referralFee: this.state.referralFee + 0.30
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: 0.30
              }
            });
          }
        } else if (type === 'electronicsAcc') {
          if (this.state.price <= 2) {
            this.setState({
              referralFee: this.state.referralFee + 0.30
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: 0.30
              }
            });
          } else if (this.state.price <= 100) {
            this.setState({
              referralFee: this.state.referralFee + this.state.price * 0.15
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: this.state.price * 0.15
              }
            });
          } else {
            this.setState({
              referralFee: this.state.referralFee + 15 + (this.state.price - 100) * 0.08
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: 15 + (this.state.price - 100) * 0.08
              }
            });
          }
        } else if (type === 'furniture') {
          if (this.state.price <= 2) {
            this.setState({
              referralFee: this.state.referralFee + 0.30
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: 0.30
              }
            });
          } else if (this.state.price <= 200) {
            this.setState({
              referralFee: this.state.referralFee + this.state.price * 0.15
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: this.state.price * 0.15
              }
            });
          } else {
            this.setState({
              referralFee: this.state.referralFee + 30 + (this.state.price - 200) * 0.10
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: 30 + (this.state.price - 200) * 0.10
              }
            });
          }
        } else if (type === 'appliances') {
          if (this.state.price <= 2) {
            this.setState({
              referralFee: this.state.referralFee + 0.30
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: 0.30
              }
            });
          } else if (this.state.price <= 300) {
            this.setState({
              referralFee: this.state.referralFee + this.state.price * 0.15
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: this.state.price * 0.15
              }
            });
          } else {
            this.setState({
              referralFee: this.state.referralFee + 45 + (this.state.price - 300) * 0.08
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: 45 + (this.state.price - 300) * 0.08
              }
            });
          }
        } else {
          let percentage = this.state.price * this.fees[type].percentage;
          if (percentage > this.fees[type].minimum) {
            this.setState({
              referralFee: this.state.referralFee + percentage
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: percentage
              }
            });
          } else {
            this.setState({
              referralFee: this.state.referralFee + this.fees[type].minimum
            });
            this.setState({
              addedReferral: {
                status: true,
                amount: this.fees[type].minimum
              }
            });
          }
        }
    }

    showfba_profit_box = (e) =>{
        e.preventDefault();
        this.setState({ 
            showfba_btn: true,
            showfbaprofits: true,
            merchant_total_profit:this.state.merchant_selling_proceeds,
        });
    }

    scroll_down (){
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }

    handleInput = (val, e) => {
        var temp = Number(val);
        this.setState({
          [e.target.name]: temp
        });
        
    }

    // handle_seller_fulfillment  = (e) =>{
    //     this.setState({
    //         seller_fulfillment_cost:  this.state.monthly_storage_cost + this.state.Labor_cost + this.state.packaging_material_cost + this.state.ship_to_customer_cost +
    //         this.state.customer_service_cost,
    //         merchant_total_fullfilment_fee: this.state.monthly_storage_cost + this.state.Labor_cost + this.state.packaging_material_cost + this.state.ship_to_customer_cost +
    //         this.state.customer_service_cost,
    //     });
    // }

    handleBlur  = (val, e) =>{
        var temp = Number(val);
        this.setState({
            [e.target.name]: temp,
        }, () => {
            this.setState({
                seller_fulfillment_cost:  this.state.monthly_storage_cost + this.state.Labor_cost + this.state.packaging_material_cost + this.state.ship_to_customer_cost +
                this.state.customer_service_cost,
                merchant_total_fullfilment_fee: this.state.referralFee + this.state.monthly_storage_cost +  this.state.Labor_cost + this.state.packaging_material_cost + this.state.ship_to_customer_cost +
                this.state.customer_service_cost,
                amazon_total_fullfilment_fee:this.state.amazon_fulfillment_fee + this.state.referralFee + this.state.ship_to_amazon_fee,
            }, () => {
                this.setState({
                    merchant_total_revenue: this.state.price + this.state.shipping_cost ,
                    merchant_selling_proceeds: this.state.price - this.state.merchant_total_fullfilment_fee,
                    amazon_selling_proceeds: this.state.price - this.state.amazon_total_fullfilment_fee,
                }, () => {
                    this.setState({
                        merchant_total_profit:this.state.merchant_selling_proceeds - this.state.merchant_product_cost,
                        amazon_total_profit:this.state.amazon_selling_proceeds - this.state.amazon_product_cost,
                    }, () => {
                        this.setState({
                            merchant_total_margin:(this.state.merchant_total_profit)*100/this.state.price,
                            amazon_total_margin:(this.state.amazon_total_profit)*100/this.state.price,
                        });
                    });
                });
            });
        });
    }

    handleCheckbox = (type, e) => {
        this.setState({
          [type]: !this.state[type]
        });
    }
        
    handleSelect = (cat) => {
        if (cat === "") {
          this.setState({
            select: ""
          });
          return;
        }
        this.setState({
          select: cat
        });
        if (this.state.addedReferral.status) {
          let feeDifference = this.state.referralFee - this.state.addedReferral.amount;
          this.setState({
            referralFee: feeDifference
          }, () => {
            this.calculateReferral(cat);
          });
        } else {
          this.calculateReferral(cat);
        }
    }
    
    handleWeightSelect = (type) => {
        this.setState({
          weightType: type
        });
    }
    
    render() {
        return (
            <div className="Content">
                <div id="main-content">
                    <section id="index-landing-section">
                        <div className="container landing-section-container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12" style={{position:'relative',zIndex:'7'}}>
                                    <h1 className="empower-text white-color" style={{fontSize:'1.3rem'}}>FBAfees Calculator</h1>
                                    <div className="title">
                                        <h2 className="main-title text-bold white-color">Plan your 2018 Amazon Sales Potential</h2>
                                        <h4 className="sub-title white-color">Is fulfillment-by-Amazon (FBA) profitable for you? Or should you choose FBM for your Amazon products?</h4>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="banner_form_main">
                    <div className="container">

                        <div className="col-md-10 col-md-offset-1">
                            <h2>Fill your Product Details</h2>
                            <div className="banner_form">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Select Product Category</label>
                                            <Select
                                                tabIndex='8'
                                                classNameContainer="form-conrol"
                                                classNameOptionListContainer="App-selectListCtn"
                                                classNameOptionListItem="App-selectListItem"
                                                classNameWrapper="App-wrapper"
                                                placeholder="Select Product Category"
                                                value={this.state.select}
                                                validate={this.state.validate}
                                                optionList={[
                                                    { id: "", name: 'Please Select a category' },
                                                    { id: "amazon", name: "Amazon Device Accessories" },
                                                    { id: "baby", name: "Baby Products" },
                                                    { id: "books", name: "Books" },
                                                    { id: "camera", name: "Camera and Photo" },
                                                    { id: "cellPhone", name: "Cell Phone Devices" },
                                                    { id: "consumer", name: "Consumer Electronics" },
                                                    { id: "dvd", name: "DVD & Video" },
                                                    { id: "electronicsAcc", name: "Electronic Accessories" },
                                                    { id: "furniture", name: "Furniture and Decor" },
                                                    { id: "mattress", name: "Mattress" },
                                                    { id: "home", name: "Home and Garden" },
                                                    { id: "kitchen", name: "Kitchen" },
                                                    { id: "appliances", name: "Major Appliances" },
                                                    { id: "music", name: "Music" },
                                                    { id: "instrument", name: "Musical Instruments" },
                                                    { id: "office", name: "Office Products" },
                                                    { id: "outdoors", name: "Outdoors" },
                                                    { id: "computers", name: "Personal Computers" },
                                                    { id: "software", name: "Software & Computer/Video Games" },
                                                    { id: "sports", name: "Sports" },
                                                    { id: "tools", name: "Tools & Home Improvement" },
                                                    { id: "toys", name: "Toys & Games" },
                                                    { id: "unlocked", name: "Unlocked Cell Phones" },
                                                    { id: "consoles", name: "Video Game Consoles" },
                                                    { id: "everythingElse", name: "Everything Else" }
                                                ]}
                                                onChange={(val, e) => {
                                                    this.handleSelect(val);
                                                }}
                                                onBlur={() => { }}
                                                validationOption={{
                                                    msgOnError: "Required"
                                                }}
                                                />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Product Selling Price: $</label>
                                            <Textbox
                                                className="form-control"
                                                type="number"
                                                classNameContainer="App-ctn"
                                                classNameWrapper="App-wrapper"
                                                placeholder="Product Selling Price"
                                                name="price"
                                                tabIndex='1'
                                                validate={this.state.validate}
                                                value={this.state.price}
                                                onChange={(val, e) => {
                                                    this.handleInput(val, e);
                                                }}
                                                onBlur={() => { }}
                                                validationOption={{
                                                    type: 'number',
                                                    msgOnError: 'Required'
                                                }}
                                                />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Product Cost: $</label>
                                            <Textbox
                                                className="form-control"
                                                type="number"
                                                classNameContainer="App-ctn"
                                                classNameWrapper="App-wrapper"
                                                name="cost"
                                                placeholder="Product Cost"
                                                tabIndex='2'
                                                validate={this.state.validate}
                                                value={this.state.cost}
                                                onChange={(val, e) => {
                                                    this.handleInput(val, e);
                                                }}
                                                onBlur={() => { }}
                                                validationOption={{
                                                    type: 'number',
                                                    msgOnError: 'Required'
                                                }}
                                                />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>L(in) x</label>
                                            <Textbox
                                                className="form-control"
                                                type="number"
                                                classNameContainer="App-ctn"
                                                classNameWrapper="App-wrapper"
                                                name="length"
                                                tabIndex='3'
                                                placeholder="Product Length"
                                                validate={this.state.validate}
                                                value={this.state.length}
                                                onChange={(val, e) => {
                                                    this.handleInput(val, e);
                                                }}
                                                onBlur={() => { }}
                                                validationOption={{
                                                    type: 'number',
                                                    msgOnError: 'Required'
                                                }}
                                                />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>W(in) x</label>
                                            <Textbox
                                                className="form-control"
                                                type="number"
                                                classNameContainer="App-ctn"
                                                classNameWrapper="App-wrapper"
                                                name="width"
                                                placeholder="Product width"
                                                tabIndex='4'
                                                validate={this.state.validate}
                                                value={this.state.width}
                                                onChange={(val, e) => {
                                                    this.handleInput(val, e);
                                                }}
                                                onBlur={() => { }}
                                                validationOption={{
                                                    type: 'number',
                                                    msgOnError: 'Required'
                                                }}
                                                />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>H(in)</label>
                                            <Textbox
                                                className="form-control"
                                                type="number"
                                                classNameContainer="App-ctn"
                                                classNameWrapper="App-wrapper"
                                                name="height"
                                                tabIndex='5'
                                                placeholder="Product height"
                                                validate={this.state.validate}
                                                value={this.state.height}
                                                onChange={(val, e) => {
                                                    this.handleInput(val, e);
                                                }}
                                                onBlur={() => { }}
                                                validationOption={{
                                                    type: 'number',
                                                    msgOnError: 'Required'
                                                }}
                                                />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Product Weight</label>
                                            <Textbox
                                                className="form-control"
                                                type="number"
                                                placeholder="Product Weight"
                                                classNameContainer="App-ctn"
                                                classNameWrapper="App-wrapper"
                                                name="weight"
                                                tabIndex='6'
                                                validate={this.state.validate}
                                                value={this.state.weight}
                                                onChange={(val, e) => {
                                                    this.handleInput(val, e);
                                                }}
                                                onBlur={() => { }}
                                                validationOption={{
                                                    type: 'number',
                                                    msgOnError: 'Required'
                                                }}
                                                />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Weight Unit</label>
                                            <Select
                                                tabIndex='7'
                                                classNameContainer="form-conrol"
                                                placeholder="Weight Unit"
                                                classNameOptionListContainer="App-selectListCtn"
                                                classNameOptionListItem="App-selectListItem"
                                                classNameWrapper="App-wrapper"
                                                value={this.state.weightType}
                                                optionList={[
                                                    { id: "", name: 'lb' },
                                                    { id: "oz", name: "oz" },
                                                ]}
                                                onChange={(val, e) => {
                                                    this.handleWeightSelect(val);
                                                }}
                                                />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="App-note">
                                            <div className="checkbox">
                                                <label>Contains Lithium Batteries</label>
                                                <Checkbox
                                                    classNameInputBox="App-check"
                                                    name="battery"
                                                    value={this.state.battery}
                                                    checked={this.state.battery}
                                                    onChange={(isChecked, e) => {
                                                    this.handleCheckbox('battery', e);
                                                }}
                                                />
                                            </div>
                                            <div className="checkbox">
                                                <label>Clothing Item</label>
                                                <Checkbox
                                                    classNameInputBox="App-check"
                                                    name="clothing"
                                                    value={this.state.clothing}
                                                    checked={this.state.clothing}
                                                    onChange={(isChecked, e) => {
                                                    this.handleCheckbox('clothing', e);
                                                }}
                                                />
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                  
                                <div className='App-button-ctn'>
                                    <Link className="back_btn" to="/new-product-based"><i className="fa fa-arrow-left" aria-hidden="true"></i>Back</Link>
                                    <div className="new_product_submit_btn">
                                        <button
                                            className="App-button reset_btn"
                                            onClick={this.reset}>Reset
                                        </button>
                                        <button  
                                            id="calculate_btn"
                                            className="App-button"
                                            disabled={this.state.calculated}
                                            onClick={this.calculateFees}
                                            >Calculate
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  

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
                            <div className="row">
                                <h3 style={{fontWeight:'300',paddingLeft:'15px'}}>Product Details</h3>
                                <div className="product-section">
                                    <div className="col-md-2 prod-image" style={{height:'150px',width: '150px'}}>
                                        <img src={Universal_remote} alt={'product_image'} style={{width: '100px',height: '100px', objectFit:'contain',marginLeft:'0px'}}/>
                                    </div>
                                    <div className="col-md-10 prod-info">
                                        <h5 className="prod-title" style={{marginBottom:'15px',fontWeight:'400'}}>
                                            Caavo Control Center Universal TV Remote & Home Theater Hub 4K HDR HDMI Switch Voice Control Compatible w/Apple TV Fire TV Roku Nvidia Shield Sonos Sound Bars AVR Xbox Playstation Google Voice Alexa
                                        </h5>
                                        <div className="supplier-info row">
                                            <div className="col-md-4 col-sm-4">
                                                <div className="column-wrapper text-center">
                                                    <p>${numeral(this.state.price).format('0.00')}</p>
                                                    <p>
                                                        <i className="fa fa-money"></i>
                                                        <span className="mleft-5">Price </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="column-wrapper text-center">
                                                    <p className="secondary-color">
                                                        {numeral(this.state.length).format('0.00')} X {numeral(this.state.width).format('0.00')} X {numeral(this.state.height).format('0.00')} inches</p>
                                                    <p>
                                                        <i className="fa fa-columns"></i>
                                                        <span className="mleft-5">Product Dimensions</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="column-wrapper text-center">
                                                    <p className="secondary-color">{this.state.weight}<span style={{marginLeft:'5px'}}>{this.state.weightType || 'lb' }</span></p>
                                                    <p>
                                                        <span className="mleft-5">Unit Weight</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 fba-calc">
                                <div className="center-contents">
                                    <div className="col-md-6">
                                        <h3 style={{fontWeight:'300'}}>FBA Calculation</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 col-md-offset-1"></div>
                                    <div className="col-md-8 RevenueClacU">
                                        <table className="table table-responsive" style={{marginBottom:'0px'}}>
                                            <thead>
                                                <tr>
                                                    <th style={{border:'none'}}></th>
                                                    <th>Merchant fulfillment</th>
                                                    <th> 
                                                        <i className="fab fa-amazon"></i>
                                                        <span className="mleft-5">Amazon fulfillment</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 col-sm-2 col-md-offset-1">
                                        <p className="calculater_head">Revenue</p>
                                    </div>
                                    <div className="col-md-8 RevenueClacU">
                                        <table className="table table-responsive">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p title="The price at which the product is sold to the customer">Item Price</p>
                                                    </td>
                                                    <td style={{borderTopLeftRadius:'4px'}}>
                                                        <span>$</span>
                                                        <div className="input_show">{numeral(this.state.price).format('0.00')}</div>
                                                    </td>
                                                    <td style={{borderTopRightRadius:'4px'}}>
                                                        <span>$</span>
                                                        <div className="input_show">{numeral(this.state.price).format('0.00')}</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p title="The price for shipping the product to the customer. In the case of Amazon-fulfilled products, the shipping price is zero as Amazon FBA fees already include the shipping prices." data-placement="top">Shipping</p>
                                                    </td>
                                                    <td>
                                                        <div className="table_input">
                                                            <span>$</span>
                                                            <Textbox
                                                                className="form-control"
                                                                type="number"
                                                                name="shipping_cost"
                                                                value={this.state.shipping_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleBlur(val, e);
                                                                }}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span>$</span>
                                                        <span>-</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p title="The total product revenue. Sum of item price and shipping cost" data-placement="top">Total Revenue</p>
                                                    </td>
                                                    <td>
                                                        <span>$</span>
                                                        <span>{numeral(this.state.merchant_total_revenue).format('0.00')}</span>
                                                    </td>
                                                    
                                                    <td>
                                                        <span>$</span>
                                                        <span>{numeral(this.state.price).format('0.00')}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p title="Referral and closing fees for the product">Selling on Amazon Fees</p>
                                                    </td>
                                                    <td style={{borderBottomLeftRadius:'4px'}}>
                                                        <span>$</span>
                                                        <span>{numeral(this.state.referralFee).format('0.00')}</span>
                                                    </td>
                                                    <td style={{borderBottomRightRadius:'4px'}}>
                                                        <span>$</span>
                                                        <span>{numeral(this.state.referralFee).format('0.00')}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 col-md-offset-1">
                                        <p className="calculater_head">Fulfillment Cost</p>
                                    </div>
                                    <div className="col-md-8 RevenueClacU">
                                        <table className="table table-responsive">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p data-toggle="tooltip" title="The complete cost the seller incurs to fulfill the product. " data-placement="top">Seller Fulfillment Cost</p>
                                                    </td>
                                                    <td style={{borderTopLeftRadius:'4px'}}>
                                                        <span>$ </span>
                                                        <div className="input_show">{numeral(this.state.seller_fulfillment_cost).format('0.00')}</div>       
                                                        <button className="dropDownbtn" onClick={this.btnTapped}  type="button">
                                                            <i className="fa fa-angle-down"></i>
                                                        </button>
                                                        <table id="tgl_hide" className="table tgl-hide" data-toggle="tooltip" data-placement="top"> 
                                                            <tbody>
                                                                <tr>
                                                                    <td>Monthly Storage :</td>
                                                                    <td>
                                                                        <Textbox
                                                                            className="input_show"
                                                                            type="number"
                                                                            min="0"
                                                                            name="monthly_storage_cost"
                                                                            value={this.state.monthly_storage_cost}
                                                                            onChange={(val, e) => {
                                                                                this.handleBlur(val, e);
                                                                            }}
                                                                        />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Labor :</td>
                                                                    <td>
                                                                        <Textbox
                                                                            className="input_show"
                                                                            type="number"
                                                                            min="0"
                                                                            name="Labor_cost"
                                                                            value={this.state.Labor_cost}
                                                                            onChange={(val, e) => {
                                                                                this.handleBlur(val, e);
                                                                            }}
                                                                        />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Packaging Material :</td>
                                                                    <td>
                                                                        <Textbox
                                                                            className="input_show"
                                                                            type="number"
                                                                            min="0"
                                                                            name="packaging_material_cost"
                                                                            value={this.state.packaging_material_cost}
                                                                            onChange={(val, e) => {
                                                                                this.handleBlur(val, e);
                                                                            }}
                                                                        />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Ship To Customer :</td>
                                                                    <td>
                                                                        <Textbox
                                                                            className="input_show"
                                                                            type="number"
                                                                            min="0"
                                                                            name="ship_to_customer_cost"
                                                                            value={this.state.ship_to_customer_cost}
                                                                            onChange={(val, e) => {
                                                                                this.handleBlur(val, e);
                                                                            }}
                                                                        />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Customer Service :</td>
                                                                    <td>
                                                                        <Textbox
                                                                            className="input_show"
                                                                            type="number"
                                                                            min="0"
                                                                            name="customer_service_cost"
                                                                            value={this.state.customer_service_cost}
                                                                            onChange={(val, e) => {
                                                                                this.handleBlur(val, e);
                                                                            }}
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    <td style={{borderTopRightRadius:'4px'}}><span>NA</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p data-toggle="tooltip" title="The complete cost the seller incurs to fulfill the product. " data-placement="top">Fulfillment by Amazon Fees</p>
                                                    </td>
                                                    <td><span>NA</span></td>
                                                    <td>
                                                        <span>$</span>
                                                        <span>{numeral(this.state.amazon_fulfillment_fee).format('0.00')}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p data-toggle="tooltip" title="The cost to ship the product to the Amazon warehouse. " data-placement="top">Ship to Amazon</p>
                                                    </td>
                                                    <td><span>NA</span></td>
                                                    <td>
                                                        <div className="table_input">
                                                            <span>$</span>
                                                            <Textbox
                                                                className="input_show"
                                                                type="number"
                                                                min="0"
                                                                name="ship_to_amazon_fee"
                                                                value={this.state.ship_to_amazon_fee}
                                                                onChange={(val, e) => {
                                                                    this.handleBlur(val, e);
                                                                }}
                                                            />    
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p data-toggle="tooltip" title=" Cost to ship the product to Amazon and the FBA fees" data-placement="top">Total Fulfillment Cost</p>
                                                    </td>
                                                    <td>
                                                        <span>$</span>
                                                        <span>{numeral(this.state.merchant_total_fullfilment_fee).format('0.00')}</span>
                                                    </td>
                                                    <td>
                                                        <span>$</span>
                                                        <span>{numeral(this.state.amazon_total_fullfilment_fee).format('0.00')}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p data-toggle="tooltip" title=" Calculated by taking the list price of the product minus the shipping fees, fulfillment fees, etc" data-placement="top">Selling Proceeds</p>
                                                    </td>
                                                    <td><span>$</span>
                                                        <span>{numeral(this.state.merchant_selling_proceeds).format('0.00')}</span>
                                                    </td>
                                                    
                                                    <td>
                                                        <span>$</span>
                                                        <span>{numeral(this.state.amazon_selling_proceeds).format('0.00')}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p data-toggle="tooltip" title="The cost to source/ manufacture the product per unit Net Profit - Selling proceeds minus the cost of the goods" data-placement="top">Cost of Product</p>
                                                    </td>
                                                    <td style={{borderBottomLeftRadius:'4px'}}>
                                                        <div className="table_input">
                                                            <span>$</span>
                                                            <Textbox
                                                                className="input_show"
                                                                type="number"
                                                                min="0"
                                                                name="merchant_product_cost"
                                                                value={this.state.merchant_product_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleBlur(val, e);
                                                                }}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td style={{borderBottomRightRadius:'4px'}}>
                                                        <div className="table_input">
                                                            <span>$</span>
                                                            <Textbox
                                                                className="input_show"
                                                                type="number"
                                                                min="0"
                                                                name="amazon_product_cost"
                                                                value={this.state.amazon_product_cost}
                                                                onChange={(val, e) => {
                                                                    this.handleBlur(val, e);
                                                                }}
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="text-right col-md-offset-3">
                                            <button
                                                className="btn sp-blue-btn"
                                                id="caluclateProfit"
                                                disabled={this.state.showfba_btn}
                                                onClick={this.showfba_profit_box}
                                                >Calculate FBA Profits</button>
                                        </div>
                                    </div>
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
                                                    <h5>${numeral(this.state.merchant_total_profit).format('0.00')}</h5>
                                                    <h4> 
                                                        <i className="fa fa-money"></i>
                                                        <span className="mleft-5">Net Profit</span>
                                                    </h4>
                                                </div>
                                                <div style={{margin:'0 auto'}}>
                                                    <h5>{numeral(this.state.merchant_total_margin).format('0.00')} %</h5>
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
                                                    <h5>${numeral(this.state.amazon_total_profit).format('0.00')}</h5>
                                                    <h4><i className="fa fa-money"></i><span className="mleft-5">Net Profit</span></h4>
                                                </div>
                                                <div style={{margin:'0 auto'}}>
                                                    <h5>{numeral(this.state.amazon_total_margin).format('0.00')}%</h5>
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

export { Content };
