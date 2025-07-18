import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-black border-t-2 border-t-gray-800">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          {/* Left Section with Logo and Copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-gray-400">
                &copy; Copyright 2023. All Rights Reserved by DevUI.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-400">
                Company
              </h3>
              <ul>
                {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to="/"
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-400">
                Support
              </h3>
              <ul>
                {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to="/"
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-400">
                Legals
              </h3>
              <ul>
                {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to="/"
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
