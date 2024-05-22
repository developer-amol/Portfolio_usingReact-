import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-4"> 
            <div>
              <h1 className="">
                <span className="font-bold text-2xl text-red-500  border-t-4 border-l-4 border-red-500 pl-2">A</span>
                <span className="font-mono font-bold text-2xl text-white">MOL </span>
                <span className="font-bold text-2xl text-red-500 border-b-4 border-r-4 border-white pr-2">SK</span>
              </h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-red-500 font-bold">Home</a></li>
                <li><a href="#about" className="hover:text-red-500 font-bold">About</a></li>
                <li><a href="#" className="hover:text-red-500 font-bold">Education</a></li>
                <li><a href="#skills" className="hover:text-red-500 font-bold">Skills</a></li>
                <li><a href="#" className="hover:text-red-500 font-bold">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
