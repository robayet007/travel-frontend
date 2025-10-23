import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategorySection = ({ category }) => {
  // Packages state
  const [packages, setPackages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    offerPrice: '',
    features: [''],
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);

  // Notices state
  const [notices, setNotices] = useState([]);
  const [showNoticeForm, setShowNoticeForm] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [noticeFormData, setNoticeFormData] = useState({
    title: ''
  });

  // Representatives state
  const [representatives, setRepresentatives] = useState([]);
  const [showRepForm, setShowRepForm] = useState(false);
  const [editingRep, setEditingRep] = useState(null);
  const [repFormData, setRepFormData] = useState({
    name: '',
    facebook: '',
    twitter: '',
    instagram: '',
    image: null
  });
  const [repImagePreview, setRepImagePreview] = useState(null);

  const API_BASE = 'https://travel-backend-3db7.onrender.com';

  // ==================== PACKAGES FUNCTIONS ====================
  const fetchPackages = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/products`);
      const filteredPackages = response.data.data.filter(
        pkg => pkg.category === category.value
      );
      setPackages(filteredPackages);
    } catch (error) {
      console.error('❌ Error fetching packages:', error);
      setPackages([]);
    }
  };

  const addFeatureField = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    });
  };

  const updateFeature = (index, value) => {
    const newFeatures = [...formData.features];
    if (value.trim() && !value.startsWith('✅')) {
      newFeatures[index] = '✅ ' + value;
    } else {
      newFeatures[index] = value;
    }
    setFormData({ ...formData, features: newFeatures });
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      
      if (!allowedTypes.includes(file.type)) {
        alert('❌ Please select a valid image file (JPEG, PNG, GIF, WebP)');
        e.target.value = '';
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        alert('❌ Image size should be less than 10MB');
        e.target.value = '';
        return;
      }

      setFormData({ ...formData, image: file });
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, image: null });
      setImagePreview(null);
    }
  };

  const handlePackageSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('category', category.value);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('offerPrice', formData.offerPrice);
      formDataToSend.append('features', JSON.stringify(
        formData.features.filter(f => f && f.trim() !== '')
      ));

      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const config = {
        headers: { 
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000
      };

      if (editingPackage) {
        await axios.put(`${API_BASE}/api/products/${editingPackage._id}`, formDataToSend, config);
        alert('✅ Package updated successfully!');
      } else {
        await axios.post(`${API_BASE}/api/products`, formDataToSend, config);
        alert('✅ Package added successfully!');
      }

      setShowForm(false);
      setEditingPackage(null);
      setFormData({ 
        title: '', 
        price: '', 
        offerPrice: '', 
        features: [''],
        image: null 
      });
      setImagePreview(null);
      
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      
      setTimeout(() => {
        fetchPackages();
      }, 1000);
      
    } catch (error) {
      console.error('❌ Error saving package:', error);
      alert(`❌ Error: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleEditPackage = (pkg) => {
    setEditingPackage(pkg);
    setFormData({
      title: pkg.title,
      price: pkg.price,
      offerPrice: pkg.offerPrice,
      features: pkg.features.length > 0 ? pkg.features : [''],
      image: null
    });
    setImagePreview(null);
    setShowForm(true);
  };

  const handleDeletePackage = async (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      try {
        await axios.delete(`${API_BASE}/api/products/${id}`);
        alert('✅ Package deleted successfully!');
        fetchPackages();
      } catch (error) {
        console.error('Error deleting package:', error);
        alert('❌ Error deleting package!');
      }
    }
  };

  // ==================== NOTICES FUNCTIONS ====================
  const fetchNotices = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/notices`);
      setNotices(response.data.data);
    } catch (error) {
      console.error('❌ Error fetching notices:', error);
      setNotices([]);
    }
  };

  const handleNoticeSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingNotice) {
        // Editing existing notice
        await axios.put(`${API_BASE}/api/notices/${editingNotice._id}`, noticeFormData);
        alert('✅ Notice updated successfully!');
      } else {
        // Creating new notice - check limit
        if (notices.length >= 1) {
          alert('❌ আপনি শুধুমাত্র ১টি Notice যোগ করতে পারবেন! আগের Notice ডিলিট করুন অথবা এডিট করুন।');
          return;
        }
        await axios.post(`${API_BASE}/api/notices`, noticeFormData);
        alert('✅ Notice added successfully!');
      }

      setShowNoticeForm(false);
      setEditingNotice(null);
      setNoticeFormData({ title: '' });
      fetchNotices();
      
    } catch (error) {
      console.error('❌ Error saving notice:', error);
      alert('❌ Error saving notice!');
    }
  };

  const handleEditNotice = (notice) => {
    setEditingNotice(notice);
    setNoticeFormData({ title: notice.title });
    setShowNoticeForm(true);
  };

  const handleDeleteNotice = async (id) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      try {
        await axios.delete(`${API_BASE}/api/notices/${id}`);
        alert('✅ Notice deleted successfully!');
        fetchNotices();
      } catch (error) {
        console.error('Error deleting notice:', error);
        alert('❌ Error deleting notice!');
      }
    }
  };

  const handleAddNotice = () => {
    if (notices.length >= 1) {
      // যদি আগে থেকেই notice থাকে, তাহলে user কে option দিব
      const shouldEdit = window.confirm(
        'আপনি ইতিমধ্যে একটি Notice যোগ করেছেন। আপনি চাইলে:\n\n' +
        '• OK - বর্তমান Notice এডিট করুন\n' +
        '• Cancel - নতুন Notice যোগ করতে আগেরটি ডিলিট করুন'
      );
      
      if (shouldEdit) {
        // User edit করতে চায়
        setEditingNotice(notices[0]);
        setNoticeFormData({ title: notices[0].title });
        setShowNoticeForm(true);
      }
      return;
    }
    
    // নতুন notice যোগ
    setShowNoticeForm(true);
    setEditingNotice(null);
    setNoticeFormData({ title: '' });
  };

  // ==================== REPRESENTATIVES FUNCTIONS ====================
  const fetchRepresentatives = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/representatives`);
      console.log('📋 Representatives API Response:', response.data);
      setRepresentatives(response.data.data || []);
    } catch (error) {
      console.error('❌ Error fetching representatives:', error);
      alert('❌ Error fetching representatives!');
      setRepresentatives([]);
    }
  };

  const handleRepImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      
      if (!allowedTypes.includes(file.type)) {
        alert('❌ Please select a valid image file (JPEG, PNG, GIF, WebP)');
        e.target.value = '';
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('❌ Image size should be less than 5MB');
        e.target.value = '';
        return;
      }

      setRepFormData({ ...repFormData, image: file });
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setRepImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setRepFormData({ ...repFormData, image: null });
      setRepImagePreview(null);
    }
  };

 // Line 290-350 এর মধ্যে এই function টি replace করুন
const handleRepSubmit = async (e) => {
  e.preventDefault();
  
  console.log('🚀 Submitting representative data:', repFormData);
  
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('name', repFormData.name);
    formDataToSend.append('facebook', repFormData.facebook || '');
    formDataToSend.append('twitter', repFormData.twitter || '');
    formDataToSend.append('instagram', repFormData.instagram || '');

    // Image file add করুন (যদি থাকে)
    if (repFormData.image) {
      formDataToSend.append('image', repFormData.image);
      console.log('📤 Uploading image:', repFormData.image.name);
    } else {
      console.log('ℹ️ No image selected');
    }

    // FormData content check করুন
    console.log('📋 FormData contents:');
    for (let [key, value] of formDataToSend.entries()) {
      console.log(`${key}:`, value);
    }

    const config = {
      headers: { 
        'Content-Type': 'multipart/form-data',
      },
      timeout: 30000
    };

    let response;
    if (editingRep) {
      console.log('✏️ Updating representative:', editingRep._id);
      response = await axios.put(`${API_BASE}/api/representatives/${editingRep._id}`, formDataToSend, config);
      alert('✅ Representative updated successfully!');
    } else {
      console.log('➕ Creating new representative');
      response = await axios.post(`${API_BASE}/api/representatives`, formDataToSend, config);
      alert('✅ Representative added successfully!');
    }

    console.log('✅ Server Response:', response.data);

    // Reset form
    setShowRepForm(false);
    setEditingRep(null);
    setRepFormData({ 
      name: '', 
      facebook: '', 
      twitter: '', 
      instagram: '',
      image: null 
    });
    setRepImagePreview(null);
    
    // Reset file input
    const fileInputs = document.querySelectorAll('input[type="file"]');
    const repFileInput = Array.from(fileInputs).find(input => 
      input.closest('form') && input.closest('form').contains(document.querySelector('input[placeholder*="representative"]'))
    );
    if (repFileInput) repFileInput.value = '';
    
    // Refresh data
    fetchRepresentatives();
    
  } catch (error) {
    console.error('❌ Error saving representative:', error);
    console.error('❌ Error response:', error.response?.data);
    console.error('❌ Error status:', error.response?.status);
    
    if (error.response?.data?.message) {
      alert(`❌ Error: ${error.response.data.message}`);
    } else if (error.code === 'ERR_NETWORK') {
      alert('❌ Network error! Please check your connection.');
    } else if (error.response?.status === 400) {
      alert(`❌ Validation Error: ${error.response.data.message || 'Bad Request'}`);
    } else if (error.response?.status === 413) {
      alert('❌ File too large! Please select a smaller image.');
    } else {
      alert(`❌ Error: ${error.message}`);
    }
  }
};

  const handleEditRep = (rep) => {
    console.log('✏️ Editing representative:', rep);
    setEditingRep(rep);
    setRepFormData({
      name: rep.name,
      facebook: rep.facebook || '',
      twitter: rep.twitter || '',
      instagram: rep.instagram || '',
      image: null
    });
    setRepImagePreview(null);
    setShowRepForm(true);
  };

  const handleDeleteRep = async (id) => {
    if (window.confirm('Are you sure you want to delete this representative?')) {
      try {
        await axios.delete(`${API_BASE}/api/representatives/${id}`);
        alert('✅ Representative deleted successfully!');
        fetchRepresentatives();
      } catch (error) {
        console.error('Error deleting representative:', error);
        alert('❌ Error deleting representative!');
      }
    }
  };

const handleAddRepresentative = () => {
  setShowRepForm(true);
  setEditingRep(null);
  setRepFormData({ 
    name: '', 
    facebook: '', 
    twitter: '', 
    instagram: '',
    image: null 
  });
  setRepImagePreview(null);
};

  // ==================== USE EFFECTS ====================
  useEffect(() => {
    fetchPackages();
    fetchNotices();
    fetchRepresentatives();
    
    setShowForm(false);
    setShowNoticeForm(false);
    setShowRepForm(false);
    setEditingPackage(null);
    setEditingNotice(null);
    setEditingRep(null);
    
    setFormData({ 
      title: '', 
      price: '', 
      offerPrice: '', 
      features: [''],
      image: null 
    });
    setNoticeFormData({ title: '' });
    setRepFormData({ 
      name: '', 
      facebook: '', 
      twitter: '', 
      instagram: '',
      image: null 
    });
    
    setImagePreview(null);
    setRepImagePreview(null);
  }, [category.value]);

  // ==================== HELPER FUNCTIONS ====================
  const getImageUrl = (imagePath) => {
    if (!imagePath || imagePath === '' || imagePath === null) {
      return 'https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=No+Image';
    }
    
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    if (imagePath.startsWith('/uploads')) {
      return `${API_BASE}${imagePath}`;
    }
    
    return 'https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Invalid+Image';
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Image+Error';
    e.target.alt = 'Image not available';
    e.target.className = 'object-contain w-full h-full bg-gray-100';
  };

  // ==================== RENDER ====================
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{category.name} Management</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 text-white transition duration-200 bg-green-600 rounded-md hover:bg-green-700"
          >
            {showForm ? 'Cancel Package' : 'Add Package'}
          </button>
        </div>
      </div>

      {/* Management Tabs */}
      <div className="flex mb-6 border-b">
        <button
          onClick={() => {
            setShowForm(false);
            setShowNoticeForm(false);
            setShowRepForm(false);
          }}
          className={`px-4 py-2 font-medium border-b-2 transition duration-200 ${
            !showForm && !showNoticeForm && !showRepForm 
              ? 'border-blue-500 text-blue-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Packages ({packages.length})
        </button>
        <button
          onClick={handleAddNotice}
          className={`px-4 py-2 font-medium border-b-2 transition duration-200 ${
            showNoticeForm 
              ? 'border-blue-500 text-blue-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <div className="flex items-center">
            <span>Notice</span>
            {notices.length > 0 ? (
              <span className="ml-2 px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">✓ Active</span>
            ) : (
              <span className="ml-2 px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">0/1</span>
            )}
          </div>
        </button>
        <button
          onClick={handleAddRepresentative}
          className={`px-4 py-2 font-medium border-b-2 transition duration-200 ${
            showRepForm 
              ? 'border-blue-500 text-blue-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Representatives ({representatives.length})
        </button>
      </div>

      {/* Package Form */}
      {showForm && (
        <form onSubmit={handlePackageSubmit} className="p-4 mb-6 border rounded-lg bg-gray-50">
          <h4 className="mb-4 text-lg font-semibold text-gray-800">
            {editingPackage ? 'Edit Package' : 'Add New Package'}
          </h4>
          
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">Package Title *</label>
              <input
                type="text"
                placeholder="Enter package title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">Category</label>
              <div className="w-full px-3 py-2 text-gray-600 bg-gray-100 border border-gray-300 rounded-md">
                {category.name}
              </div>
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">Package Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                Supported formats: JPEG, PNG, GIF, WebP (Max: 10MB)
              </p>
              
              {imagePreview && (
                <div className="mt-2">
                  <p className="mb-1 text-sm text-green-600">✅ New Image Preview:</p>
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="object-cover w-20 h-20 border rounded"
                  />
                </div>
              )}
              
              {editingPackage && editingPackage.image && !imagePreview && (
                <div className="mt-2">
                  <p className="mb-1 text-sm text-gray-500">Current Image:</p>
                  <img 
                    src={getImageUrl(editingPackage.image)} 
                    alt="Current" 
                    className="object-cover w-20 h-20 border rounded"
                    onError={handleImageError}
                  />
                  <p className="mt-1 text-xs text-gray-400">
                    Leave empty to keep current image
                  </p>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">Price *</label>
                <input
                  type="number"
                  placeholder="Regular price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  min="0"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">Offer Price *</label>
                <input
                  type="number"
                  placeholder="Discounted price"
                  value={formData.offerPrice}
                  onChange={(e) => setFormData({ ...formData, offerPrice: e.target.value })}
                  className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  min="0"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Package Features</label>
            {formData.features.map((feature, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Feature ${index + 1}`}
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  className="flex-1 px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formData.features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="px-3 py-2 text-white transition duration-200 bg-red-500 rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addFeatureField}
              className="px-4 py-2 text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Add Feature
            </button>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 px-4 py-2 text-white transition duration-200 bg-green-600 rounded-md hover:bg-green-700"
            >
              {editingPackage ? 'Update Package' : 'Add Package'}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setEditingPackage(null);
                setFormData({ 
                  title: '', 
                  price: '', 
                  offerPrice: '', 
                  features: [''],
                  image: null 
                });
                setImagePreview(null);
              }}
              className="px-4 py-2 text-white transition duration-200 bg-gray-500 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Notice Form & Display */}
      {showNoticeForm && (
        <div>
          <form onSubmit={handleNoticeSubmit} className="p-4 mb-6 border rounded-lg bg-gray-50">
            <h4 className="mb-4 text-lg font-semibold text-gray-800">
              {editingNotice ? 'Edit Notice' : 'Add New Notice'}
            </h4>
            
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Notice Title *</label>
              <input
                type="text"
                placeholder="Enter notice title"
                value={noticeFormData.title}
                onChange={(e) => setNoticeFormData({ title: e.target.value })}
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                maxLength="500"
              />
              <p className="mt-1 text-xs text-gray-500">
                {noticeFormData.title.length}/500 characters
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-white transition duration-200 bg-green-600 rounded-md hover:bg-green-700"
              >
                {editingNotice ? 'Update Notice' : 'Add Notice'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowNoticeForm(false);
                  setEditingNotice(null);
                  setNoticeFormData({ title: '' });
                }}
                className="px-4 py-2 text-white transition duration-200 bg-gray-500 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Current Notice Display */}
          {notices.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">Current Notice</h3>
              <div className="p-4 border rounded-lg bg-yellow-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="mb-2 text-lg font-semibold text-gray-800">{notices[0].title}</h4>
                    <p className="text-sm text-gray-500">
                      Last Updated: {new Date(notices[0].updatedAt).toLocaleDateString()} at{' '}
                      {new Date(notices[0].updatedAt).toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEditNotice(notices[0])}
                      className="px-3 py-1 text-sm text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteNotice(notices[0]._id)}
                      className="px-3 py-1 text-sm text-white transition duration-200 bg-red-500 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Representative Form & Display */}
      {showRepForm && (
        <div>
          <form onSubmit={handleRepSubmit} className="p-4 mb-6 border rounded-lg bg-gray-50">
            <h4 className="mb-4 text-lg font-semibold text-gray-800">
              {editingRep ? 'Edit Representative' : 'Add New Representative'}
            </h4>
            
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">Name *</label>
                <input
                  type="text"
                  placeholder="Enter representative name"
                  value={repFormData.name}
                  onChange={(e) => setRepFormData({ ...repFormData, name: e.target.value })}
                  className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  maxLength="100"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleRepImageChange}
                  className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Supported formats: JPEG, PNG, GIF, WebP (Max: 5MB)
                </p>
                
                {repImagePreview && (
                  <div className="mt-2">
                    <p className="mb-1 text-sm text-green-600">✅ New Image Preview:</p>
                    <img 
                      src={repImagePreview} 
                      alt="Preview" 
                      className="object-cover w-20 h-20 border rounded"
                    />
                  </div>
                )}
                
                {editingRep && editingRep.image && !repImagePreview && (
                  <div className="mt-2">
                    <p className="mb-1 text-sm text-gray-500">Current Image:</p>
                    <img 
                      src={getImageUrl(editingRep.image)} 
                      alt="Current" 
                      className="object-cover w-20 h-20 border rounded"
                      onError={handleImageError}
                    />
                    <p className="mt-1 text-xs text-gray-400">
                      Leave empty to keep current image
                    </p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">Facebook URL</label>
                  <input
                    type="url"
                    placeholder="https://facebook.com/username"
                    value={repFormData.facebook}
                    onChange={(e) => setRepFormData({ ...repFormData, facebook: e.target.value })}
                    className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">Twitter URL</label>
                  <input
                    type="url"
                    placeholder="https://twitter.com/username"
                    value={repFormData.twitter}
                    onChange={(e) => setRepFormData({ ...repFormData, twitter: e.target.value })}
                    className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">Instagram URL</label>
                  <input
                    type="url"
                    placeholder="https://instagram.com/username"
                    value={repFormData.instagram}
                    onChange={(e) => setRepFormData({ ...repFormData, instagram: e.target.value })}
                    className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-white transition duration-200 bg-green-600 rounded-md hover:bg-green-700"
              >
                {editingRep ? 'Update Representative' : 'Add Representative'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowRepForm(false);
                  setEditingRep(null);
                  setRepFormData({ 
                    name: '', 
                    facebook: '', 
                    twitter: '', 
                    instagram: '',
                    image: null 
                  });
                  setRepImagePreview(null);
                }}
                className="px-4 py-2 text-white transition duration-200 bg-gray-500 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Representatives Display */}
          {representatives.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">Representatives ({representatives.length})</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {representatives.map((rep) => (
                  <div key={rep._id} className="overflow-hidden transition duration-200 bg-white border rounded-lg shadow-md hover:shadow-lg">
                    <div className="h-48 overflow-hidden bg-gray-100">
                      <img 
                        src={getImageUrl(rep.image)}
                        alt={rep.name}
                        className="object-cover w-full h-full"
                        onError={handleImageError}
                      />
                    </div>

                    <div className="p-4">
                      <h4 className="mb-3 text-xl font-bold text-center text-gray-800">{rep.name}</h4>
                      
                      <div className="flex justify-center mb-4 space-x-4">
                        {rep.facebook && (
                          <a href={rep.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <span className="text-sm">Facebook</span>
                          </a>
                        )}
                        {rep.twitter && (
                          <a href={rep.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            <span className="text-sm">Twitter</span>
                          </a>
                        )}
                        {rep.instagram && (
                          <a href={rep.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                            <span className="text-sm">Instagram</span>
                          </a>
                        )}
                      </div>

                      <div className="flex gap-2 pt-3 border-t">
                        <button
                          onClick={() => handleEditRep(rep)}
                          className="flex-1 px-3 py-2 text-sm text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteRep(rep._id)}
                          className="flex-1 px-3 py-2 text-sm text-white transition duration-200 bg-red-500 rounded-md hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Packages Display */}
      {!showForm && !showNoticeForm && !showRepForm && (
        <div>
          {packages.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg) => (
                <div key={pkg._id} className="overflow-hidden transition duration-200 bg-white border rounded-lg shadow-md hover:shadow-lg">
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={getImageUrl(pkg.image)}
                      alt={pkg.title}
                      className="object-cover w-full h-full transition duration-300 hover:scale-105"
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="mb-2 text-lg font-bold text-gray-800 line-clamp-2">{pkg.title}</h4>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm text-gray-500 line-through">৳{pkg.price}</span>
                      <span className="text-lg font-bold text-green-600">৳{pkg.offerPrice}</span>
                    </div>

                    <div className="mb-4">
                      <ul className="space-y-1">
                        {pkg.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                        {pkg.features.length > 3 && (
                          <li className="text-xs text-gray-500">
                            +{pkg.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-3 border-t">
                      <button
                        onClick={() => handleEditPackage(pkg)}
                        className="flex-1 px-3 py-2 text-sm text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeletePackage(pkg._id)}
                        className="flex-1 px-3 py-2 text-sm text-white transition duration-200 bg-red-500 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center bg-gray-100 rounded-lg">
              <p className="text-lg text-gray-500">No packages available</p>
              <p className="mt-1 text-sm text-gray-400">Click "Add Package" to create your first package</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategorySection;