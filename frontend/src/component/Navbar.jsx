import { Link, useLocation } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Hajj Package", href: "/hajj" },
  { name: "Contact", href: "/contact" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isTourDropdownOpen, setIsTourDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsTourDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-gray-700">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and Desktop Nav */}
          <div className="flex items-center flex-1">
            <div className="flex items-center shrink-0">
              <img
                alt="Travel Logo"
                src="/logo.png"
                className="w-10 h-10 p-1 bg-white rounded-full shadow-sm"
              />
            </div>

            <div className="items-center hidden sm:ml-6 sm:flex sm:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium transition hover:scale-110"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Tour Package Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsTourDropdownOpen(!isTourDropdownOpen)}
                  className={classNames(
                    location.pathname === "/international" || location.pathname === "/domestic"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium transition hover:scale-110 flex items-center"
                  )}
                >
                  Tour Package
                  <svg className={classNames("ml-1 w-4 h-4 transition-transform", isTourDropdownOpen ? "rotate-180" : "")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isTourDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <Link
                        to="/international"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsTourDropdownOpen(false)}
                      >
                        International Tour Package
                      </Link>
                      <Link
                        to="/domestic"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsTourDropdownOpen(false)}
                      >
                        Domestic Tour Package
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile + Buttons Desktop */}
          <div className="hidden sm:flex sm:items-center sm:gap-3">
            <a
              href="https://www.facebook.com/FlyEasyTravelsBD"
              className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-110"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-5 h-5"
              />
              Facebook
            </a>

            <Link
              to="/services"
              className="px-6 py-2 font-semibold text-white transition rounded-md shadow bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:opacity-90"
            >
              Land Services
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                location.pathname === item.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Tour Package Links */}
          <div className="px-3 py-2">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Tour Packages</p>
            <Link
              to="/international"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              International Tour Package
            </Link>
            <Link
              to="/domestic"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Domestic Tour Package
            </Link>
          </div>

          {/* Mobile Facebook button */}
          <a
            href="https://www.facebook.com/FlyEasyTravelsBD"
            className="flex items-center gap-2 px-3 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-5 h-5"
            />
            Facebook
          </a>

          {/* Mobile Land Services */}
          <Link
            to="/services"
            className="block px-3 py-2 font-semibold text-white transition rounded-md bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:opacity-90"
            onClick={() => setIsOpen(false)}
          >
            Land Services
          </Link>
        </div>
      )}
    </nav>
  )
}
