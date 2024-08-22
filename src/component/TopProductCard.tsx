"use client"
import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/product';

interface TopProductCardProps {
  product: Product;
  rank: number;
}

const TopProductCard: React.FC<TopProductCardProps> = ({ product, rank }) => {
  return (
    <div className="relative items-center bg-cover bg-center rounded-lg shadow-lg overflow-visible text-black" style={{ backgroundImage: `url(${product.imageUrl})`, height: 280, width: 300 }}>
      
      <img src={"/images/producticon-01.png"} alt="top product" className="absolute w-5 h-5 object-cover rounded-lg"/>
      
      <div className="absolute mt-10 bottom-0 w-12 h-1/2 bg-white flex items-center justify-center border border-black">
        <h1 className="text-black text-wrap font-semibold text-lg">{product.description}</h1>
      </div>
    </div>
  );
};

export default TopProductCard;
