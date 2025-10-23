import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const International = () => {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const API_BASE = 'https://travel-backend-3db7.onrender.com'

  useEffect(() => {
    fetchPackages()
  }, [])

  const fetchPackages = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_BASE}/api/products/category/international-tour`)
      setPackages(response.data.data)
    } catch (error) {
      console.error('Error fetching packages:', error)
    } finally {
      setLoading(false)
    }
  }

  // Package Card Component
  const PackageCard = ({ pkg }) => (
    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-lg rounded-[20px] hover:shadow-xl group">
      <div>
        {/* Image Section */}
        <div className="overflow-hidden rounded-[20px] h-80 mb-4 -mx-6 -mt-6">
          {pkg.image ? (
            <img
              src={`${API_BASE}${pkg.image}`}
              alt={pkg.title}
              className="object-cover object-center w-full h-full transition-transform duration-300 ease-out group-hover:scale-105"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x400?text=No+Image'
              }}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-300">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-center text-gray-900">
          {pkg.title}
        </h3>
        
        {/* Prices */}
        <div className="mt-4 text-center">
          <span className="text-base font-extrabold text-gray-900 line-through border border-orange-300 rounded-md px-2 py-0.5">
            ৳{pkg.price}
          </span>
          <span className="ml-3 text-[2rem] font-extrabold text-orange-600">
            ৳{pkg.offerPrice}
          </span>
        </div>
        
        {/* Features */}
        <ul className="mt-6 space-y-2 text-gray-700">
          {pkg.features && pkg.features.slice(0, 6).map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">✅</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Book Now Button */}
      <Link
        to="/contact"
        className="inline-block px-5 py-3 mt-8 font-medium text-center text-white transition duration-700 ease-in-out rounded-lg bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:text-blue-600 hover:opacity-90 hover:scale-[1.05]"
      >
        Book Now
      </Link>
    </div>
  )

  // Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading international tour packages...</div>
      </div>
    )
  }

  return (
    <section className="min-h-screen px-4 py-16 mx-auto bg-center bg-no-repeat bg-cover max-w-7xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="inline-block px-4 py-2 text-3xl font-extrabold text-orange-600 bg-white/50 rounded-[20px] shadow-lg border-[3px] border-blue-500 sm:text-4xl">
          International Tour Packages
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover amazing destinations around the world with our carefully crafted international tour packages
        </p>
      </div>

      {/* Packages Grid */}
      {packages.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg._id} pkg={pkg} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-xl text-gray-600">No international tour packages available yet</p>
          <p className="mt-2 text-gray-500">Check back later for amazing international tour packages</p>
        </div>
      )}

      {/* Agency Info */}
      <div className="flex items-center justify-center w-full max-w-4xl mx-auto my-12 overflow-hidden bg-white shadow-2xl h-80 rounded-xl">
        <img
          src="/agency-info.jpg"
          alt="Agency Info"
          className="w-full h-full transition-transform duration-700 ease-in-out transform hover:scale-[1.05]"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x400?text=Travel+Agency'
          }}
        />
      </div>
    </section>
  )
}

export default International
