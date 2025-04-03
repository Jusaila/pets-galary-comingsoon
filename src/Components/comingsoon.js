import React, { useState, useEffect } from 'react';

const PetsGallaryLanding = () => {
  const [email, setEmail] = useState('');
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimateIn(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-br from-gray-200 to-gray-300 min-h-screen flex items-center justify-center p-4">
      <div 
        className={`bg-white rounded-3xl overflow-hidden w-full max-w-6xl shadow-2xl transition-all duration-700 ${
          animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Content Section */}
          <div className="p-8 md:p-12 lg:p-16 md:w-1/2 flex flex-col justify-between">
            {/* Header */}
            <div 
              className="mb-8 transform transition-transform duration-700 flex items-center" 
              style={{ transitionDelay: '200ms', transform: animateIn ? 'translateY(0)' : 'translateY(20px)' }}
            >
              {/* Logo Image */}
              <img 
                src="/logo png 1.png" // Replace with the actual path to your logo image
                alt="Pet's Gallery Logo" 
                className="w-12 h-12 mr-4" // Adjust size and margin as needed
              />
              
              {/* Title Text */}
              <h1 className="text-3xl font-bold text-amber-700 tracking-wide font-['Montserrat']">
                Pet's Gallery
              </h1>
            </div>
            {/* Main Content */}
            <div className="flex-grow transform transition-transform duration-700" style={{ transitionDelay: '400ms', transform: animateIn ? 'translateY(0)' : 'translateY(20px)' }}>
              <h2 className="text-5xl md:text-6xl font-bold text-orange-500 mb-8 font-['Montserrat'] leading-tight">
                Coming soon...
              </h2>
              <p className="mb-6 text-gray-700 text-lg">
                Welcome to Pet's Gallary – your go-to destination for premium pet products and expert care!
              </p>
              <p className="mb-8 text-gray-600">
                We’re launching soon with a wide range of pet essentials, from food to accessories and grooming services.  
                Stay tuned for updates and exclusive offers!
              </p>
              
              {/* Email Form */}
              <form onSubmit={handleSubmit} className="mb-8 flex group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="px-6 py-4 border border-gray-200 rounded-l-lg flex-grow text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-r-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md group-hover:shadow-lg"
                >
                  <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                </button>
              </form>
            </div>
            
            {/* Footer Info */}
            <div className="flex flex-col md:flex-row md:space-x-16 transform transition-all duration-700" style={{ transitionDelay: '600ms', transform: animateIn ? 'translateY(0)' : 'translateY(20px)' }}>
              <div className="mb-8 md:mb-0">
                <h3 className="text-amber-800 font-semibold mb-3 tracking-wider text-sm uppercase">OPENING HOURS:</h3>
                <p className="text-gray-700">Sunday - Saturday</p>
                <p className="text-gray-700">11 am - 8 pm</p>
              </div>
              <div>
                <h3 className="text-amber-800 font-semibold mb-3 tracking-wider text-sm uppercase">LOCATION:</h3>
                <p className="text-gray-700">Al Jaddaf - Dubai</p>
                <p className="text-gray-700">United Arab Emirates</p>
              </div>
              <div>
                <h3 className="text-amber-800 font-semibold mb-3 tracking-wider text-sm uppercase">Call:</h3>
                <p className="text-gray-700">+971564180500</p>
              </div>
            </div>
          </div>
          
          {/* Right Image Section - Just display the website screenshot */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 md:w-1/2 relative overflow-hidden flex items-center justify-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full -mr-32 -mt-32 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-100 rounded-full -ml-24 -mb-16 opacity-60"></div>
            
            {/* Website Screenshot */}
            <div className="relative z-10 p-6 transform transition-all duration-1000" style={{ transitionDelay: '300ms', transform: animateIn ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)' }}>
              <img 
                src="/image1.png" 
                alt="Pet's Gallary Website Preview" 
                className="rounded-xl shadow-xl transform hover:scale-102 transition-transform"
              />
            </div>
            
            {/* Social Media Icons */}
            <div className="absolute right-8 h-full flex flex-col justify-center space-y-8 z-20">
              <a href="https://www.instagram.com/petsgallerydubai.ae" className="text-gray-500 hover:text-orange-500 transition-colors transform hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
              
              <a href="https://www.facebook.com/people/petsgallery-dubai/61571726230069/" className="text-gray-500 hover:text-orange-500 transition-colors transform hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=%2B971564180500&text&type=phone_number&app_absent=0" className="text-gray-500 hover:text-green-500 transition-colors transform hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-5.514 0-10 4.486-10 10 0 1.765.461 3.467 1.33 4.97l-1.338 4.866 4.987-1.31c1.46.788 3.105 1.236 4.811 1.236 5.514 0 10-4.486 10-10s-4.486-10-10-10zm0 18c-1.463 0-2.893-.394-4.128-1.139l-.294-.174-2.954.777.786-2.875-.185-.303c-.779-1.281-1.194-2.754-1.194-4.286 0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.246-5.905c-.26-.131-1.531-.755-1.77-.841-.238-.086-.41-.131-.581.131s-.665.841-.817 1.014c-.151.173-.301.195-.561.065-.26-.131-1.1-.404-2.097-1.288-.774-.687-1.298-1.539-1.452-1.799-.152-.261-.016-.403.115-.534.117-.116.26-.303.39-.455.131-.152.173-.26.26-.434s.043-.326-.021-.455c-.064-.131-.581-1.399-.796-1.916-.209-.502-.42-.434-.581-.442-.151-.007-.326-.009-.499-.009s-.456.065-.695.326c-.238.26-.908.888-.908 2.166s.929 2.514 1.056 2.693c.13.173 1.831 2.794 4.44 3.918.621.268 1.106.428 1.485.548.624.198 1.192.17 1.64.103.499-.073 1.531-.625 1.747-1.228.216-.603.216-1.12.151-1.228-.064-.108-.238-.173-.498-.303z"/>
                </svg>
              </a>

              <a href="https://www.youtube.com/@PetsGalleryDubai" className="text-gray-500 hover:text-red-500 transition-colors transform hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186c-.275-1.026-1.08-1.837-2.106-2.112-1.856-.493-9.296-.493-9.296-.493s-7.44 0-9.296.493c-1.026.275-1.831 1.086-2.106 2.112-.498 1.857-.498 5.735-.498 5.735s0 3.878.498 5.735c.275 1.026 1.08 1.837 2.106 2.112 1.856.493 9.296.493 9.296.493s7.44 0 9.296-.493c1.026-.275 1.831-1.086 2.106-2.112.498-1.857.498-5.735.498-5.735s0-3.878-.498-5.735zm-14.501 9.319v-7.071l6.33 3.535-6.33 3.536z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsGallaryLanding;