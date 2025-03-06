import React, { useState } from 'react';
import { Menu, X, Code2, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['About', 'Experience', 'Projects', 'Skills', 'Interests', 'Contact'];

  return (
    <nav className="fixed w-full bg-dark-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-accent-red" />
            <Terminal className="h-8 w-8 text-white ml-2" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-accent-red transition-colors duration-300 px-3 py-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              id="open_menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Open Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-800">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-accent-red block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;