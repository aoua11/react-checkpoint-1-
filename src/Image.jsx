import React from 'react';
import Product from './Product';

export default function Image (){
  return <img src={Product.imageUrl} alt={Product.name} style={{ width: '100%', height: 'auto' }} />;
};


