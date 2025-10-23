import React from 'react'

const International = () => {
  return (
    <div className="min-h-screen px-4 py-16 text-gray-800 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center">
          <span className="text-transparent bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 bg-clip-text">
            International Tour Packages
          </span>
        </h1>
        
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              name: 'Dubai Tour',
              img: '/destination-02.png',
              price: '৳45,000',
              duration: '5 Days 4 Nights'
            },
            {
              name: 'Thailand Tour',
              img: '/destination-01.jpg',
              price: '৳35,000',
              duration: '4 Days 3 Nights'
            },
            {
              name: 'Malaysia Tour',
              img: '/destination-05.jpg',
              price: '৳40,000',
              duration: '6 Days 5 Nights'
            },
            {
              name: 'Singapore Tour',
              img: '/usa.png',
              price: '৳50,000',
              duration: '5 Days 4 Nights'
            },
            {
              name: 'Turkey Tour',
              img: '/makka.png',
              price: '৳60,000',
              duration: '7 Days 6 Nights'
            },
            {
              name: 'Indonesia Tour',
              img: '/madina.png',
              price: '৳38,000',
              duration: '5 Days 4 Nights'
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

export default International
