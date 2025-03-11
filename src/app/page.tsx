'use client';

import React from 'react';
import Navbar from '@/components/navbar';

const Page = () => {
  return (
    <div className="relative min-h-screen scroll-smooth">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/background.jpg)' }}
      />

      {/* Overlay for better readability */}
      <div className="fixed inset-0 z-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime eaque unde ea
              praesentium, soluta commodi libero perferendis possimus impedit ipsa rerum quis, ipsam
              saepe beatae officia veniam doloribus culpa?
            </p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-16"
        >
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus
              hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut
              eleifend nibh porttitor.
            </p>
            <p className="text-lg">
              Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
              Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 py-16"
        >
          <div className="max-w-4xl w-full mx-auto text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-white/10 border border-gray-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-white/10 border border-gray-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
