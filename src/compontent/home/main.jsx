import React from 'react';
import './index.scss'
import { Card } from 'antd';

export default props => {
  return (
  
    <div className="flex flex-around zrb-main">
      <Card>
        <a href="https://zhaojiaershao.github.io/">
          <img alt="example" src={require('./img/1.jpg')} /> 
          <h3>赵瑞波的博客</h3>
          <p>https://zhaojiaershao.github.io/</p>
        </a>
      </Card>
      <Card>
        <a href="https://suzangang.github.io/">
          <img alt="example" src={require('./img/2.jpg')} />
          <h3>宿赞港的博客</h3>
          <p>https://suzangang.github.io/</p>
        </a>
      </Card>
      <Card>
        <a href="https://lq110.github.io/">
          <img alt="example" src={require('./img/3.jpg')} />
          <h3>普慧慧的博客</h3>
          <p>https://lq110.github.io/</p>
        </a>
      </Card>
      <Card>
        <a href="https://Tom-about.github.io">
          <img alt="example" src={require('./img/4.jpg')} />
          <h3>范庆荣的博客</h3>
          <p>https://Tom-about.github.io</p>
        </a>
      </Card>
    </div>
   
  );
};
