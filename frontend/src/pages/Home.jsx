// src/pages/Home.jsx
import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'
import '../index.css'
import ContactRepresentatives from '../component/ContactRepresentatives'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div className="text-gray-800 bg-white">
      
      {/* 🔥 Schema Markup যোগ করুন এখানে */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Fly Easy Travels",
            "url": "https://flyeasytravelsbd.com",
            "logo": "https://flyeasytravelsbd.com/logo.png",
            "description": "Travel with easy, avoid health risks - Your reliable travel agency in Bangladesh",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Araihazar, Narayanganj.",
              "addressCountry": "Bangladesh"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+880-1959-328100",
              "contactType": "customer service",
              "areaServed": "Bangladesh",
              "availableLanguage": "Bengali, English"
            },
            "sameAs": [
              "https://www.facebook.com/FlyEasyTravelsBD"
            ],
            "areaServed": "Bangladesh",
            "serviceType": [
              "Flight Booking",
              "Hotel Reservation", 
              "Visa Processing",
              "Tour Packages"
            ]
          })}
        </script>
      </Helmet>

      {/* hero*/}
      <div className="max-w-lg p-8 mx-auto text-center animated-border-container font-new-family">
        <h2 className="text-4xl font-bold tracking-widest sm:text-6xl md:text-7xl lg:text-8xl flicker-text">
           FLY EASY TRAVELS
        </h2>
        <h4 className="text-2xl italic tracking-widest flicker-subtext chewy-regular">
          "TRAVEL WITH EASY, AVOID HEALTH RISKS"
        </h4>
     </div>

      <About/>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Popular Destinations</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: 'Holly Mecca Sharif',
                img: '/dmakka.jpg',
              },
              {
                name: 'Dubai',
                img: '/ddubai.png',
              },
              {
                name: 'Madina Sharif',
                img: '/dmadina.jpg',
              },
              {
                name: 'Singapore',
                img: '/dsingapore.jpg',
              },
              {
                name: 'Thailand',
                img: '/dthailand.jpg',
              },
              {
                name: 'Japan',
                img: '/djapan.png',
              },
            ].map((item, index) => (
              <div key={index} className="overflow-hidden transition bg-white rounded-lg shadow hover:shadow-lg">
                <img src={item.img} alt={item.name} className="object-cover w-full h-48 transition-transform duration-300 cursor-pointer hover:scale-110" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <ContactRepresentatives/>
      </section>
    </div>
  )
}