import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE = 'https://travel-backend-3db7.onrender.com';

  // Fetch notices from API
  const fetchNotices = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/notices`);
      setNotices(response.data.data || []);
    } catch (error) {
      console.error('❌ Error fetching notices:', error);
      setNotices([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // If no notices, don't show anything
  if (loading) {
    return (
      <div className="py-2 bg-yellow-100 border-b border-yellow-200">
        <div className="container mx-auto">
          <div className="text-center text-yellow-600">Loading notices...</div>
        </div>
      </div>
    );
  }

  if (notices.length === 0) {
    return null; // Don't show anything if no notices
  }

  const currentNotice = notices[0]; // Show only the first notice

  return (
    <div className="relative overflow-hidden bg-yellow-500 border-b border-yellow-600">
      {/* Notice Marquee */}
      <div className="py-3">
        <div className="marquee-container">
          <div className="marquee-content">
            {/* Duplicate content for seamless loop */}
            <span className="marquee-text">
              {currentNotice.title}
            </span>
            <span className="marquee-text">
              {currentNotice.title}
            </span>
            <span className="marquee-text">
              {currentNotice.title}
            </span>
            <span className="marquee-text">
              {currentNotice.title}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }

        .marquee-content {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }

        .marquee-text {
          display: inline-block;
          padding: 0 50px;
          font-weight: 600;
          font-size: 14px;
          color: white;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Pause on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Notice;