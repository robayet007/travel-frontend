import React from 'react'
import { Link } from 'react-router-dom';
import FormServices from './FormServices';

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="mb-4 text-3xl text-purple-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      ),
      title: 'Flight Booking',
      desc: 'We offer the best deals on domestic and international flights with top airlines.',
    },
    {
      icon: (
        <svg className="mb-4 text-3xl text-purple-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>
        </svg>
      ),
      title: 'Hotel Reservations',
      desc: 'Book top-rated hotels, resorts, and villas at affordable prices anywhere in the world.',
    },
    {
      icon: (
        <svg className="mb-4 text-3xl text-purple-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: 'Custom Tour Packages',
      desc: 'Fully customized travel packages tailored to your dream destination and style.',
    },
    {
      icon: (
        <svg className="mb-4 text-3xl text-purple-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Global Destinations',
      desc: 'Access to curated experiences and adventures in over 100+ countries.',
    },
    {
      icon: (
        <svg className="mb-4 text-3xl text-purple-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      ),
      title: 'Visa Assistance',
      desc: 'Complete guidance on visa applications, documentation, and appointment scheduling.',
    },
    {
      icon: (
        <svg className="mb-4 text-3xl text-purple-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
        </svg>
      ),
      title: '24/7 Travel Support',
      desc: 'We are with you every step of the way - before, during, and after your journey.',
    },
  ]

  return (
    <div className="min-h-screen px-4 py-16 text-gray-800 bg-gray-50">
      {/* Intro */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          <span className="text-transparent bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 bg-clip-text">
            Our Travel Services
          </span>
        </h1>
        <p className="text-gray-600">
          Discover what we offer to make your trip unforgettable — from booking to landing back home.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid max-w-6xl gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="p-6 text-center transition-transform duration-300 bg-white rounded-lg shadow hover:scale-105 hover:shadow-md">
            {service.icon}
            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to plan your perfect trip?</h2>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 font-semibold text-white transition rounded-md shadow bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:opacity-90"
        >
          Contact Us Now
        </Link>
      </div>
      <FormServices/>
    </div>
  )
}
