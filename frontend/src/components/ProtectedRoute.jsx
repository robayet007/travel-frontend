import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn')
    if (isLoggedIn !== 'true') {
      navigate('/admin/login')
    }
  }, [navigate])

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('adminLoggedIn')
  
  if (isLoggedIn !== 'true') {
    return null // Will redirect to login
  }

  return children
}

export default ProtectedRoute
