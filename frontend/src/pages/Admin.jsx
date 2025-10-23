import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../component/Admin/Header'
import Sidebar from '../component/Admin/Sidebar'
import CategorySection from '../component/Admin/CategorySection'

const Admin = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Check authentication
  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn')
    if (isLoggedIn !== 'true') {
      navigate('/admin/login')
    }
  }, [navigate])
  
  // Get the current category from the URL path
  const getCurrentCategory = () => {
    const path = location.pathname
    if (path.includes('holy-hajj')) return { value: 'holy-hajj', name: 'Holly Hajj' }
    if (path.includes('holy-umrah-hajj')) return { value: 'holy-umrah-hajj', name: 'Holly Umrah Hajj' }
    if (path.includes('international-tour')) return { value: 'international-tour', name: 'International Tour' }
    if (path.includes('domestic-tour')) return { value: 'domestic-tour', name: 'Domestic Tour' }
    return { value: 'holy-hajj', name: 'Holly Hajj' } // default
  }

  const currentCategory = getCurrentCategory()

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <div>
            <h1 className="mb-6 text-3xl font-bold text-gray-800">{currentCategory.name} Management</h1>
            <CategorySection category={currentCategory} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Admin