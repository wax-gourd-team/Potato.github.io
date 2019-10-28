import React, {Component} from "react";
import Main from './main'
import {Carousel} from "antd";

export default class Banner extends Component {
  render() {
    return (
      <div className='box-phh'>
        <Carousel autoplay>
          <div>
           <img src="./timg.jpg" alt="" width='100%' height='90%'/>
          </div>
          <div>
          <img src="./信息.jpg" alt="" width='100%' height='90%'/>
          </div>
          <div>
          <img src="./信息2.jpg" alt="" width='100%' height='90%'/>
          </div>
          <div>
          <img src="./技术.jpg" alt="" width='100%' height='90%'/>
          </div>
        </Carousel> 
      <div> 
           < Main/>
      </div>
 
      </div>
     
    );
  }
}
