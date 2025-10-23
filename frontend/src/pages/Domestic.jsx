import React from 'react'

const Domestic = () => {
  return (
    <div className="min-h-screen px-4 py-16 text-gray-800 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center">
          <span className="text-transparent bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 bg-clip-text">
            Domestic Tour Packages
          </span>
        </h1>
        
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              name: 'Cox\'s Bazar Tour',
              img: '/destination-01.jpg',
              price: '৳8,000',
              duration: '3 Days 2 Nights'
            },
            {
              name: 'Sylhet Tour',
              img: '/destination-02.png',
              price: '৳6,000',
              duration: '2 Days 1 Night'
            },
            {
              name: 'Bandarban Tour',
              img: '/destination-05.jpg',
              price: '৳7,500',
              duration: '3 Days 2 Nights'
            },
            {
              name: 'Rangamati Tour',
              img: '/usa.png',
              price: '৳6,500',
              duration: '2 Days 1 Night'
            },
            {
              name: 'Sundarbans Tour',
              img: '/makka.png',
              price: '৳9,000',
              duration: '4 Days 3 Nights'
            },
            {
              name: 'Sajek Valley Tour',
              img: '/madina.png',
              price: '৳5,500',
              duration: '2 Days 1 Night'
            }
          ].map((item, index) => (
            <div key={index} className="overflow-hidden transition bg-white rounded-lg shadow hover:shadow-lg">
              <img src={item.img} alt={item.name} className="object-cover w-full h-48 transition-transform duration-300 cursor-pointer hover:scale-110" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.duration}</p>
                <p className="text-xl font-bold text-green-600">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Domestic