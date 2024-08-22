import React from 'react';

const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
