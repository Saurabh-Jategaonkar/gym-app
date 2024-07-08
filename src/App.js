import React, { useState } from 'react';
import { Star, ShoppingCart, Menu, Search, User, Facebook, Instagram, Twitter } from 'lucide-react';

const supplements = [
  {
    id: 1,
    name: 'Pro Whey Protein',
    flavor: 'Chocolate',
    price: 29.99,
    image: './assets/choc1.png',
    rating: 4.5,
    servings: 30,
    benefits: ['Muscle Growth', 'Recovery']
  },
  {
    id: 2,
    name: 'BCAA Energy',
    flavor: 'Fruit Punch',
    price: 24.99,
    image: '/api/placeholder/300/300',
    rating: 4.2,
    servings: 40,
    benefits: ['Endurance', 'Hydration']
  }
  // Add more supplement objects as needed
];

const testimonials = [
  {
    id: 1,
    name: 'John D.',
    text: "The Pro Whey Protein has been a game-changer for my workouts. I've seen significant muscle gains!",
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah M.',
    text: 'BCAA Energy helps me push through tough workouts. The fruit punch flavor is delicious!',
    rating: 4
  },
  {
    id: 3,
    name: 'Mike R.',
    text: "I've tried many supplements, but GymSupps products are by far the best quality. Highly recommended!",
    rating: 5
  }
];

const NavBar = ({ setCurrentPage }) => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <Menu className="w-6 h-6 mr-4 cursor-pointer" />
        <h1 className="text-xl font-bold">Tone Tribe Supplements</h1>
      </div>
      <div className="hidden md:flex space-x-4">
        <a href="#" onClick={() => setCurrentPage('home')} className="hover:text-blue-200">Home</a>
        {/* <a href="#" onClick={() => setCurrentPage('products')} className="hover:text-blue-200">Products</a> */}
        <a href="#" onClick={() => setCurrentPage('about')} className="hover:text-blue-200">About</a>
        <a href="#" onClick={() => setCurrentPage('contact')} className="hover:text-blue-200">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="w-6 h-6 cursor-pointer" />
        <User className="w-6 h-6 cursor-pointer" />
        <ShoppingCart className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  </nav>
);

const SupplementCard = ({ supplement }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={supplement.image} alt={supplement.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{supplement.name}</h2>
      <p className="text-gray-600 mb-2">Flavor: {supplement.flavor}</p>
      <p className="text-green-600 font-bold text-lg mb-2">${supplement.price.toFixed(2)}</p>
      <div className="flex items-center mb-2">
        <Star className="text-yellow-400 w-5 h-5" />
        <span className="ml-1">{supplement.rating.toFixed(1)}</span>
      </div>
      <p className="text-gray-600 mb-2">{supplement.servings} servings</p>
      <div className="mb-2">
        {supplement.benefits.map((benefit, index) => (
          <span key={index} className="inline-block bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs mr-2 mb-2">
            {benefit}
          </span>
        ))}
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
        <ShoppingCart className="w-5 h-5 mr-2" />
        Add to Cart
      </button>
    </div>
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
        {testimonial.name[0]}
      </div>
      <div className="ml-4">
        <h3 className="font-bold">{testimonial.name}</h3>
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600">{testimonial.text}</p>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-300">Products</a></li>
            <li><a href="#" className="hover:text-blue-300">Testimonials</a></li>
            <li><a href="#" className="hover:text-blue-300">About Us</a></li>
            <li><a href="#" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-blue-300">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-blue-300">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300"><Facebook /></a>
            <a href="#" className="hover:text-blue-300"><Instagram /></a>
            <a href="#" className="hover:text-blue-300"><Twitter /></a>
          </div>
          <p className="mt-4">Subscribe to our newsletter for exclusive offers and updates!</p>
          <div className="mt-2 flex">
            <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md flex-grow text-gray-800" />
            <button className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 GymSupps. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const SupplementStore = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavBar setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {currentPage === 'home' && (
            <>
              <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {supplements.map((supplement) => (
                  <SupplementCard key={supplement.id} supplement={supplement} />
                ))}
              </div>
            </>
          )}
          {/* {currentPage === 'products' && (
            <h1 className="text-3xl font-bold mb-8 text-center">Products Page (Coming Soon)</h1>
          )} */}
          {currentPage === 'about' && (
            <h1 className="text-3xl font-bold mb-8 text-center">About Us (Coming Soon)</h1>
          )}
          {currentPage === 'contact' && (
            <h1 className="text-3xl font-bold mb-8 text-center">Contact Us (Coming Soon)</h1>
          )}
        </div>
      </main>
      <h1 className="text-3xl font-bold mb-8 text-center">Customer Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12 pb-12">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SupplementStore;