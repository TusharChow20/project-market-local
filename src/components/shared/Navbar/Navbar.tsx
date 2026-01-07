"use client";
import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  Search,
  MapPin,
  Bell,
  MessageCircle,
  Store,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(5);
  const [notificationCount] = useState(5);
  const [messageCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 text-center text-sm font-medium">
        Grand Opening Sale - Up to 50% OFF on Selected Items | Free Shipping
        Over 5000 tk
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="relative">
                <MapPin className="w-8 h-8 text-blue-600 group-hover:text-indigo-600 transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Market-Local
                </h1>
                <p className="text-xs text-gray-500 -mt-1">
                  Shop Local, Live Better
                </p>
              </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                <input
                  type="text"
                  placeholder="Search products, sellers, or categories..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium">
                  Search
                </button>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button className="relative hover:scale-110 transition-transform group">
                <Bell className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                {notificationCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {notificationCount}
                  </span>
                )}
              </button>

              <button className="relative hover:scale-110 transition-transform group">
                <MessageCircle className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                {messageCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {messageCount}
                  </span>
                )}
              </button>

              <button className="relative hover:scale-110 transition-transform group">
                <Heart className="w-6 h-6 text-gray-700 group-hover:text-red-500 transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button className="relative hover:scale-110 transition-transform group">
                <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all">
                <User className="w-5 h-5" />
                <span className="font-medium">Sign In</span>
              </button>

              <button className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all">
                <Store className="w-5 h-5" />
                <span className="font-medium">Sell</span>
              </button>
            </div>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center justify-between py-3 border-t border-gray-100">
            <div className="flex items-center space-x-8">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                <Menu className="w-4 h-4" />
                <span>Categories</span>
              </button>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Flash Deals
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Top Sellers
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Local Stores
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>
                Deliver to:{" "}
                <strong className="text-gray-900">New York, 10001</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <button className="flex flex-col items-center space-y-1">
                  <div className="relative">
                    <Bell className="w-6 h-6 text-gray-700" />
                    {notificationCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {notificationCount}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-600">Alerts</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                  <div className="relative">
                    <MessageCircle className="w-6 h-6 text-gray-700" />
                    {messageCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {messageCount}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-600">Chat</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                  <div className="relative">
                    <Heart className="w-6 h-6 text-gray-700" />
                    {wishlistCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {wishlistCount}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-600">Wishlist</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                  <div className="relative">
                    <ShoppingCart className="w-6 h-6 text-gray-700" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-600">Cart</span>
                </button>
              </div>
              <div className="space-y-2 border-t border-gray-200 pt-4">
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Flash Deals
                </a>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  New Arrivals
                </a>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Top Sellers
                </a>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Local Stores
                </a>
              </div>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all">
                  <User className="w-5 h-5" />
                  <span className="font-medium">Sign In / Register</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all">
                  <Store className="w-5 h-5" />
                  <span className="font-medium">Become a Seller</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
