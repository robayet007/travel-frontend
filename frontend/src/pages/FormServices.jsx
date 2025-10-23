import React from "react"

export default function FormServices() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      ),
      title: "Air Ticket Booking | এয়ার টিকিট বুকিং",
      description:
        "We provide hassle-free flight booking for all major airlines worldwide. আপনি দেশ ও বিদেশের যেকোনো গন্তব্যে সহজেই টিকিট বুক করতে পারেন আমাদের মাধ্যমে।",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      ),
      title: "Visa Processing | ভিসা প্রসেসিং",
      description:
        "We assist you in all kinds of visa applications — tourist, student, or business. আমাদের বিশেষজ্ঞ টিম দ্রুত ও নির্ভরযোগ্য ভিসা সহায়তা প্রদান করে।",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
        </svg>
      ),
      title: "Umrah & Hajj Packages | ওমরা ও হজ প্যাকেজ",
      description:
        "We organize complete Umrah and Hajj packages with comfortable travel and stay. আপনার ধর্মীয় যাত্রাকে সহজ ও প্রশান্তিময় করতে আমরা সর্বোচ্চ যত্ন নিই।",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>
        </svg>
      ),
      title: "Hotel Booking | হোটেল বুকিং",
      description:
        "Book quality hotels at the best rates around the world. আপনার বাজেট অনুযায়ী পছন্দের হোটেলটি বুক করতে পারবেন আমাদের মাধ্যমে।",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: "Tour Packages | ট্যুর প্যাকেজ",
      description:
        "We offer local and international tour packages for your dream destinations. পরিবার বা বন্ধুদের নিয়ে উপভোগ করুন আনন্দময় ভ্রমণ।",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
        </svg>
      ),
      title: "Travel Insurance | ট্রাভেল ইনসুরেন্স",
      description:
        "Stay safe during your journey with our trusted travel insurance services. যাত্রার সময় অপ্রত্যাশিত সমস্যার বিরুদ্ধে সুরক্ষা দিতে আমরা দিচ্ছি নির্ভরযোগ্য ট্রাভেল ইন্সুরেন্স সুবিধা।",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          Our Services <span className="text-cyan-500">| আমাদের সেবা</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-600">
          We provide all kinds of travel and visa-related services with honesty, reliability, and care.  
          আমরা দেশ ও বিদেশে ভ্রমণ সংক্রান্ত সম্পূর্ণ সেবা প্রদান করি – আপনার যাত্রাকে করে তুলি আরামদায়ক ও নির্ভরযোগ্য।
        </p>

        {/* ✅ Grid Center Fix */}
        <div className="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-6 text-center transition-transform bg-white shadow-md place-items-center rounded-2xl hover:shadow-lg hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cyan-100">
                {service.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}