"use client";

import { useState } from 'react';
import TopProductCard from "@/component/TopProductCard";
import ProductCard from "@/component/ProductCard"; // This should be a default import
import products from "@/data/product";
import Footer from '@/component/Footer';

export default function Home() {
  const [visibleProducts, setVisibleProducts] = useState(25); // Initial visible products (5 rows of 5 products)
  const topProducts = products
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const handleSeeMore = () => {
    setVisibleProducts(products.length); // Show all products
  };

  return (
    <main className='min-h-screen justify-start items-start rounded-2xl text-white'>
      <header className="bg-black text-white flex justify-between items-center px-8 py-4">
      <div className="text-lg font-bold">What happened</div>
      <nav className="flex space-x-8">
        <a href="#" className="hover:text-gray-400">INTRODUCTION</a>
        <a href="#" className="hover:text-gray-400">SOLUTION</a>
        <a href="#" className="hover:text-gray-400">RATE PLAN</a>
        <span className="mx-4 border-r border-gray-600"></span>
        <a href="#" className="hover:text-gray-400">LOGIN</a>
        <a href="#" className="hover:text-gray-400">APPLY FOR FREE USE</a>
      </nav>
    </header>

      
      <div className='flex flex-row min-h-screen bg-[url("/images/banner1.png")] bg-cover bg-no-repeat justify-center items-center p-12 rounded'></div>
      <div className='flex flex-row h-[576px] bg-[url("/images/banner2.png")] bg-cover bg-no-repeat justify-center items-center rounded'></div>
      <div className="bg-yellow-400 p-10">
        <h1 className="text-center text-orange-500 text-4xl font-bold">BEST PRODUCT</h1>
        <p className="text-center text-orange-600 mt-2">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first.
        </p>
        <div className="mt-10 flex justify-center">
          {topProducts.map((product, index) => (
            <TopProductCard key={product.id} product={product} rank={index + 1} />
          ))}
        </div>
      </div>
      {/* <div className="p-10 w-full">
        <div className="grid grid-cols-5 gap-4">
          {products.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleProducts < products.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSeeMore}
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
            >
              See More
            </button>
          </div>
        )}
      </div> */}
      <div className='flex flex-row h-[2670px] bg-[url("/images/00_main.png")] bg-cover bg-no-repeat justify-center items-center p-12 rounded'></div>
      <div className='flex flex-row min-h-screen bg-[url("/images/banner3.png")] bg-cover bg-no-repeat justify-center items-center p-12 rounded'></div>
      <div className='flex flex-row min-h-screen bg-[url("/images/banner4.png")] bg-cover bg-no-repeat justify-center items-center p-12 rounded'></div>
      <div className='flex flex-row h-[1500px] bg-[url("/images/banner5.png")] bg-cover bg-no-repeat justify-center items-center p-12 rounded'></div>
      <Footer />
    </main>
  );
}
