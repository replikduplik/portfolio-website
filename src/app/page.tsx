'use client';

import React from 'react';
import Navbar from '@/components/navbar';
import Contact from '@/components/contact';
const Page = () => {
  return (
    <div className="relative min-h-screen scroll-smooth">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/background.jpg)' }}
      />

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
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Page;
