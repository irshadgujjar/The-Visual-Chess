import React from 'react';
import Logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Blogs',
    href: '/blogs',
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-2 lg:py-2 border-b border-[grey]" style={{ background: "#160a33"}}>
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-8">
      <div className="flex items-center space-x-12">
  <img src={Logo} alt="Logo" className="h-20 lg:h-24" /> {/* Adjust the height of the logo here */}
</div>

        <div className="hidden lg:flex flex-grow justify-end items-center space-x-12"> {/* Increased space-x value */}
  {menuItems.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className="text-white font-semibold hover:text-gray-300 transition-colors duration-300"
    >
      {item.name}
    </a>
  ))}
  <a href="/contact" className="inline-block py-2 px-6 rounded-full bg-[#bebae0] text-[#160a33] font-semibold hover:bg-[#bebae0] hover:text-[#160a33] transition-colors duration-300">
    Contact Us
  </a>
</div>

        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-8 w-8 text-white cursor-pointer" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-white ring-opacity-10" style={{ background: "#160a33" }}>
            <div className="px-4 py-6">
              <div className="flex items-center justify-between mb-4">
                <img src={Logo} alt="Logo" className="h-20 lg:h-24" />
                <button onClick={toggleMenu} className="text-white focus:outline-none focus:ring focus:ring-white">
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-white font-semibold hover:text-gray-300 transition-colors duration-300 "
                  >
                    {item.name}
                  </a>
                ))}
                <a href="/contact" className="block py-2 text-center px-6 mt-6 rounded-full bg-[#bebae0] text-[#160a33] font-semibold hover:bg-[#bebae0] hover:text-[#160a33] transition-colors duration-300">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
