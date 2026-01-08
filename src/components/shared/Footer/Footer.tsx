import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Truck,
  Shield,
  HeadphonesIcon,
  TrendingUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                <Truck className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Free Shipping</h3>
                <p className="text-gray-400 text-sm">On orders over $50</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="p-3 bg-emerald-600/20 rounded-lg group-hover:bg-emerald-600/30 transition-colors">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Secure Payment</h3>
                <p className="text-gray-400 text-sm">
                  100% protected transactions
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                <HeadphonesIcon className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">24/7 Support</h3>
                <p className="text-gray-400 text-sm">Dedicated support team</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="p-3 bg-orange-600/20 rounded-lg group-hover:bg-orange-600/30 transition-colors">
                <TrendingUp className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Best Prices</h3>
                <p className="text-gray-400 text-sm">
                  Competitive market rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-bold">Market-Local</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted multi-vendor marketplace connecting local sellers
              with buyers. Shop locally, support your community, and discover
              unique products from verified sellers.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+88-0123465666</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>support@marketlocal.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>201,NewMarket Ctg</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link
                href="https://www.facebook.com/tushar.Chowdhury.20"
                className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tusharchowdhury20211/"
                className="w-10 h-10 bg-slate-700 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Press & Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Partnerships
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Payment Methods
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">For Sellers</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Become a Seller
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Seller Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Seller Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Pricing Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Seller Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Analytics Tools
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest deals, offers, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none text-white placeholder-gray-400 transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Market-Local. All rights reserved. Built with ❤️
              for local communities.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-center text-gray-400 text-sm mb-4">We Accept</p>
            <div className="flex justify-center items-center space-x-4 flex-wrap gap-2">
              <div className="bg-white px-4 py-2 rounded">
                <span className="text-blue-600 font-bold">VISA</span>
              </div>
              <div className="bg-white px-4 py-2 rounded">
                <span className="text-orange-600 font-bold">Mastercard</span>
              </div>
              <div className="bg-white px-4 py-2 rounded">
                <span className="text-blue-700 font-bold">PayPal</span>
              </div>
              <div className="bg-white px-4 py-2 rounded">
                <span className="text-purple-600 font-bold">Stripe</span>
              </div>
              <div className="bg-white px-4 py-2 rounded">
                <span className="text-gray-700 font-bold">Apple Pay</span>
              </div>
              <div className="bg-white px-4 py-2 rounded">
                <span className="text-green-600 font-bold">Google Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
