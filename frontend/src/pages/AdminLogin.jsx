import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const AdminLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn')
    if (isLoggedIn === 'true') {
      navigate('/admin')
    }
  }, [navigate])

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    // Verify credentials
    if (username === 'admin' && password === '12345') {
      localStorage.setItem('adminLoggedIn', 'true')
      navigate('/admin')
    } else {
      setError('Invalid username or password!')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="w-full max-w-md">
        <div className="p-8 bg-white rounded-lg shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Login</h2>
            <p className="text-gray-600">Enter your credentials to access admin panel</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter username"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>

            {error && (
              <div className="p-3 text-red-600 bg-red-100 border border-red-300 rounded-lg">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full px-4 py-3 text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-200 transform hover:scale-105"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Demo Credentials: <br />
              Username: <span className="font-semibold">admin</span> <br />
              Password: <span className="font-semibold">12345</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
