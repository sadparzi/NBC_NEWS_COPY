import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="h-screen flex flex-col">
      <header className="fixed top-0 w-full bg-white text-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-2 mr-8">
            <img 
              src="nbc_news.png" 
              alt="NBC News Logo" 
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold text-gray-900">NBC NEWS</span>
          </div>
          <div className="flex-1 mx-8 flex justify-between items-center">
            <nav className="flex-1 flex justify-between space-x-6">
              <a href="#" className="text-gray-900 hover:text-gray-200 hover:underline-">
                States
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200">
                Techspecs
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200">
                Sports
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200">
                Politics
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200">
                Quickstart
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200">
                Blocks
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200">
                Figma
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200">
                Icons
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200">
                Blog
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-200">
                Pro Version
              </a>
            </nav>
            <div className="relative">
              <div 
                tabIndex={0} 
                role="button" 
                className="btn m-1 ml-3 text-black rounded-md p-2 bg-gray-700"
                onClick={toggleDropdown}
              >
                Miscellaneous News
              </div>
              {isOpen && (
                <ul 
                  tabIndex={0} 
                  className="dropdown-content menu bg-black text-black rounded-box z-50 w-52 p-2 absolute top-full mt-2 left-0"
                  style={{
                    boxShadow: "0 4px 8px rgba(90, 90, 90, 0.1), 0 6px 20px rgba(90, 90, 90, 0.2)",
                  }}
                >
                  <li>
                    <a className="bg-gray-700 ">
                      Item 1
                    </a>
                  </li>
                  <li>
                    <a className="bg-gray-700 ">
                      Item 2
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 mt-16 overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <p>
            {Array(400).fill("This is some scrollable content. ").join("")}
          </p>
        </div>
      </main>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-2">
            <img 
              src="nbc_news.png" 
              alt="NBC News Logo" 
              className="w-8 h-8"
            />
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Support</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
