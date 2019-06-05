import React, { Component } from 'react';
import Slider from "react-slick";
import blog_image from '../img/bloge-img-1.jpg';
import blog_img2 from '../img/bloge-img-2.jpg';
import blog_img3 from '../img/bloge-img-3.jpg';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
const blog_img = [
    blog_image,
    blog_img2,
    blog_img3
];

const blog_slider = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
}
class Blog extends Component {
  render() {
    return (
        <div className="blogs">
            <div className="container">
                <div className="blog-content">
                    <h2>IMPORTANT AMAZON SELLER BLOGS</h2>
                    <Slider  {...blog_slider}>
                        <div className="slr-blg">
                            <img src={blog_img[0]} alt={'blog_img'}/>
                            <p>Slide 1</p>
                        </div>
                        <div className="slr-blg">
                            <img src={blog_img[1]} alt={'blog_img'}/>
                            <p>Slide 2</p>
                        </div>
                        <div className="slr-blg">
                            <img src={blog_img[2]} alt={'blog_img'}/>
                            <p>Slide 3</p>
                        </div>
                        <div className="slr-blg">
                            <img src={blog_img[0]} alt={'blog_img'}/>
                            <p>Slide 4</p>
                        </div>
                        <div className="slr-blg">
                            <img src={blog_img[1]} alt={'blog_img'}/>
                            <p>Slide 5</p>
                        </div> 

                    </Slider >
                </div>
            </div>
        </div>
    );
  }
}



export  default  Blog;

