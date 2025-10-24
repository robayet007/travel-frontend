import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import "../index.css"

const API_BASE = 'https://travel-backend-3db7.onrender.com';

export default function ContactRepresentatives() {
  const [representatives, setRepresentatives] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch representatives from API
  const fetchRepresentatives = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_BASE}/api/representatives`)
      console.log('📋 Representatives data:', response.data)
      setRepresentatives(response.data.data || [])
    } catch (error) {
      console.error('❌ Error fetching representatives:', error)
      setError('Failed to load representatives')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRepresentatives()
  }, [])

  // Helper function to get image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath || imagePath === '' || imagePath === null) {
      return "/placeholder.svg"
    }
    
    if (imagePath.startsWith('http')) {
      return imagePath
    }
    
    if (imagePath.startsWith('/uploads')) {
      return `${API_BASE}${imagePath}`
    }
    
    return "/placeholder.svg"
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center min-h-screen px-4 py-16 bg-white">
        <div className="w-full max-w-6xl">
          <div className="mb-12 text-center">
            <div className="relative flex items-center justify-center mb-6">
              <div className="flex flex-col items-end">
                <div className="h-0.5 bg-yellow-400 w-10 mb-2"></div>
                <div className="h-0.5 bg-yellow-400 w-16"></div>
              </div>
              <span className="mx-4 text-sm font-medium tracking-wider text-blue-600">
                TRAVEL GUIDE
              </span>
              <div className="flex flex-col">
                <div className="h-0.5 bg-yellow-400 w-10 mb-2"></div>
                <div className="h-0.5 bg-yellow-400 w-16"></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-700">
              Contact Our Representative
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="text-center text-gray-600">
              <div className="w-12 h-12 mx-auto mb-4 border-4 border-t-4 border-gray-200 rounded-full border-t-blue-600 animate-spin"></div>
              <p>Loading representatives...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center min-h-screen px-4 py-16 bg-white">
        <div className="w-full max-w-6xl">
          <div className="mb-12 text-center">
            <div className="relative flex items-center justify-center mb-6">
              <div className="flex flex-col items-end">
                <div className="h-0.5 bg-yellow-400 w-10 mb-2"></div>
                <div className="h-0.5 bg-yellow-400 w-16"></div>
              </div>
              <span className="mx-4 text-sm font-medium tracking-wider text-blue-600">
                TRAVEL GUIDE
              </span>
              <div className="flex flex-col">
                <div className="h-0.5 bg-yellow-400 w-10 mb-2"></div>
                <div className="h-0.5 bg-yellow-400 w-16"></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-700">
              Contact Our Representative
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="text-center text-red-600">
              <p>{error}</p>
              <button 
                onClick={fetchRepresentatives}
                className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (representatives.length === 0) {
    return (
      <div className="flex flex-col items-center min-h-screen px-4 py-16 bg-white">
        <div className="w-full max-w-6xl">
          <div className="mb-12 text-center">
            <div className="relative flex items-center justify-center mb-6">
              <div className="flex flex-col items-end">
                <div className="h-0.5 bg-yellow-400 w-10 mb-2"></div>
                <div className="h-0.5 bg-yellow-400 w-16"></div>
              </div>
              <span className="mx-4 text-sm font-medium tracking-wider text-blue-600">
                TRAVEL GUIDE
              </span>
              <div className="flex flex-col">
                <div className="h-0.5 bg-yellow-400 w-10 mb-2"></div>
                <div className="h-0.5 bg-yellow-400 w-16"></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-700">
              Contact Our Representative
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="text-center text-gray-600">
              <p>No representatives available at the moment.</p>
              <p className="mt-2 text-sm">Please check back later.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-16 bg-white">
      <div className="w-full max-w-6xl">
        {/* Header (About-like lines) */}
        <div className="mb-12 text-center">
          <div className="relative flex items-center justify-center mb-6">
            <div className="flex flex-col items-end">
              <div className="h-0.5 bg-yellow-400 w-10 mb-2"></div>
              <div className="h-0.5 bg-yellow-400 w-16"></div>
            </div>
            <span className="mx-4 text-sm font-medium tracking-wider text-blue-600">
              TRAVEL GUIDE
            </span>
            <div className="flex flex-col">
              <div className="h-0.5 bg-yellow-400 w-10 mb-2"></div>
              <div className="h-0.5 bg-yellow-400 w-16"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-700">
            Contact Our Representative
          </h1>
        </div>

        {/* Representatives Grid */}
        <div className="grid justify-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {representatives.map((member) => (
            <div
              key={member._id}
              className="w-full max-w-sm p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-square">
                <img
                  src={getImageUrl(member.image)}
                  alt={member.name}
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg"
                  }}
                />
              </div>

              {/* Social Links */}
              <div className="flex justify-center mb-4 space-x-3">
                {member.facebook && (
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
                    title="Facebook"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white transition-colors rounded-full bg-sky-500 hover:bg-sky-600"
                    title="Twitter"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600"
                    title="Instagram"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                )}
              </div>

              {/* Name and Position */}
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Travel Representative
              </p>
              
              {/* Contact Info - Text removed, only icons remain */}
              {(member.facebook || member.twitter || member.instagram) && (
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <p className="mb-2 text-xs text-gray-500">Connect with me on social media</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 font-semibold text-white transition-all bg-purple-700 rounded-md shadow hover:bg-purple-800 hover:scale-105"
          >
            Plan a Trip
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}