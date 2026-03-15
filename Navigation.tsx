import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, Search } from 'lucide-react';
import { Input } from './ui/input';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: '2027-predictions', label: '2027 Color Predictions' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'applications', label: 'Industry Applications' },
    { id: 'psychology', label: 'Color Psychology Lab' }
  ];
  
  const moreItems = [
    { id: 'trend-intelligence', label: 'Trend Intelligence Hub' },
    { id: 'trend-analyzer', label: 'Longitudinal Colour Tracking' },
    { id: 'industries-index', label: 'Industries We Track' },
    { id: 'cmf-direction', label: 'CMF Direction 2027' },
    { id: 'material-intelligence', label: 'Material Intelligence' },
    { id: 'about', label: 'About' }
  ];

  const allPages = [...navItems, ...moreItems];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase();
    
    // Search through page titles
    const matchingPage = allPages.find(item => 
      item.label.toLowerCase().includes(query)
    );

    if (matchingPage) {
      onNavigate(matchingPage.id);
      setSearchQuery('');
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <nav className="border-b border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => onNavigate('home')} className="normal-case">
            <Logo size="md" />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-xs tracking-wider uppercase transition-colors normal-case ${ 
                  currentPage === item.id 
                    ? 'text-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="relative group">
              <button className="text-xs tracking-wider uppercase text-gray-600 hover:text-black normal-case">
                More
              </button>
              <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {navItems.slice(4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="block w-full text-left px-4 py-3 text-xs tracking-wider uppercase hover:bg-gray-100 transition-colors normal-case"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="border-t border-black my-2" />
                {moreItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="block w-full text-left px-4 py-3 text-xs tracking-wider uppercase hover:bg-gray-100 transition-colors normal-case"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Icon/Bar - Desktop */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search pages..."
                    className="w-48 h-8 text-xs border-black"
                    autoFocus
                    onBlur={() => {
                      if (!searchQuery) setSearchOpen(false);
                    }}
                  />
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-gray-600 hover:text-black transition-colors"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-black"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="lg:hidden pb-4">
            <form onSubmit={handleSearch}>
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages..."
                className="w-full border-black"
              />
            </form>
          </div>
        )}
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-black py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-xs tracking-wider uppercase hover:bg-gray-100 transition-colors normal-case"
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-black my-2 mx-4" />
            {moreItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-xs tracking-wider uppercase hover:bg-gray-100 transition-colors normal-case"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}