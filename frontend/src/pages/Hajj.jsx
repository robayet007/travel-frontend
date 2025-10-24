import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Hajj() {
  const [umrahPackages, setUmrahPackages] = useState([]);
  const [hajjPackages, setHajjPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = "https://travel-backend-3db7.onrender.com";

  // Fetch packages from API
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all packages and filter client-side
        const response = await axios.get(`${API_BASE}/api/products`);
        const allPackages = response.data.data;

        // Filter Umrah packages
        const umrahData = allPackages.filter(
          (pkg) => pkg.category === "holy-umrah-hajj"
        );
        setUmrahPackages(umrahData);

        // Filter Hajj packages
        const hajjData = allPackages.filter(
          (pkg) => pkg.category === "holy-hajj"
        );
        setHajjPackages(hajjData);
      } catch (error) {
        console.error("Error fetching packages:", error);
        setError("Failed to load packages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // ==================== CARD COMPONENT ====================
  const PackageCard = ({ pkg }) => (
    <div className="flex flex-col bg-white border border-gray-200 shadow-lg rounded-[20px] hover:shadow-xl group overflow-hidden h-full">
      {/* Image Section - Full size */}
      <div className="package-imgj-container">
        {pkg.image ? (
          <img
            src={pkg.image}
            alt={pkg.title}
            className="package-img"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/400x350?text=No+Image";
            }}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-300">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6">
        {/* Title */}
        <h3 className="mb-4 text-xl font-semibold text-center text-gray-900 capitalize">
          {pkg.title}
        </h3>

        {/* Prices */}
        <div className="mb-4 text-center">
          {pkg.price !== pkg.offerPrice ? (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-base font-extrabold text-gray-900 line-through border border-orange-300 rounded-md px-2 py-0.5">
                ৳{pkg.price}
              </span>
              <span className="text-[2rem] font-extrabold text-orange-600">
                ৳{pkg.offerPrice}
              </span>
            </div>
          ) : (
            <span className="text-[2rem] font-extrabold text-orange-600">
              ৳{pkg.offerPrice}
            </span>
          )}
        </div>

        {/* Features */}
        <div className="flex-grow mb-4">
          {pkg.features && pkg.features.length > 0 ? (
            <ul className="space-y-2 text-gray-700">
              {pkg.features.slice(0, 6).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-green-500">✅</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-gray-500">No features listed</div>
          )}
        </div>

        {/* Book Now Button */}
        <Link
          to="/contact"
          className="inline-block px-5 py-3 mt-auto font-medium text-center text-white transition duration-700 ease-in-out rounded-lg bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 hover:opacity-90 hover:scale-[1.05]"
        >
          Book Now
        </Link>
      </div>
    </div>
  );

  // Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">
          Loading Hajj & Umrah packages...
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-xl text-red-600">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  // ==================== RETURN ====================
  return (
    <>
      <section className="min-h-screen px-4 py-16 mx-auto bg-center bg-no-repeat bg-cover max-w-7xl">
        {/* Umrah Section */}
        <div className="mb-12 text-center">
          <h1 className="inline-block px-4 py-2 text-3xl font-extrabold text-orange-600 bg-white/50 rounded-[20px] shadow-lg border-[3px] border-blue-500 sm:text-4xl">
            Holy Umrah Packages
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Spiritual journeys to the holy cities of Mecca and Medina
          </p>
        </div>

        {umrahPackages.length > 0 ? (
          <>
            <div className="mb-6 text-sm text-gray-600">
              Showing {umrahPackages.length} Umrah package
              {umrahPackages.length !== 1 ? "s" : ""}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {umrahPackages.map((pkg) => (
                <PackageCard key={pkg._id} pkg={pkg} />
              ))}
            </div>
          </>
        ) : (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-600">
              No Umrah packages available yet
            </p>
            <p className="mt-2 text-gray-500">
              Check back later for amazing Umrah packages
            </p>
          </div>
        )}

        {/* Hajj Section */}
        <div className="mt-16 mb-12 text-center">
          <h2 className="inline-block px-4 py-2 text-3xl font-extrabold text-orange-600 bg-white/50 rounded-[20px] shadow-lg border-[3px] border-blue-500 sm:text-4xl">
            Holy Hajj Packages
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Complete Hajj pilgrimage packages for the journey of a lifetime
          </p>
        </div>

        {hajjPackages.length > 0 ? (
          <>
            <div className="mb-6 text-sm text-gray-600">
              Showing {hajjPackages.length} Hajj package
              {hajjPackages.length !== 1 ? "s" : ""}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {hajjPackages.map((pkg) => (
                <PackageCard key={pkg._id} pkg={pkg} />
              ))}
            </div>
          </>
        ) : (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-600">
              No Hajj packages available yet
            </p>
            <p className="mt-2 text-gray-500">
              Check back later for amazing Hajj packages
            </p>
          </div>
        )}
      </section>

      {/* Agency Info */}
      <div className="banner-img-container">
        <img
          src="/Bannar.jpg"
          alt="Agency Info"
          className="banner-img"
          style={{ width: "1200px" }}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x800?text=Hajj+Umrah+Travel+Agency";
          }}
        />
      </div>
    </>
  );
}
