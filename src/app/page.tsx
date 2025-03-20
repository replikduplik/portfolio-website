'use client';

import React from 'react';
import Navbar from '@/components/navbar';
import Contact from '@/components/contact';
import Portfolio from '@/components/portfolio';
import About from '@/components/about';
import ThemeToggle from '@/components/themetoggle';

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
        {/* Theme Toggle Button */}
        <ThemeToggle />
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
        <About id="about" />

        {/* Portfolio Section */}
        <section id="portfolio" className="flex justify-center items-center">
          <Portfolio />
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white/10">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Page;
