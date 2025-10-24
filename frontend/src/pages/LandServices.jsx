import React from 'react'

export default function LandServices() {
  return (
    <div 
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
        fontFamily: "'SolaimanLipi', 'Arial', sans-serif"
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ color: "#2c5f2d", fontSize: "2.5rem", marginBottom: "1rem" }}>
          ভূমি সেবা কেন্দ্র
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকার কর্তৃক স্বীকৃত
        </p>
      </div>

      {/* Services Section */}
      <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color: "#2c5f2d", borderBottom: "2px solid #2c5f2d", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
          আমাদের সেবাসমূহ | Our Services
        </h2>
        
        <div style={{ display: "grid", gap: "1rem" }}>
          <ServiceItem 
            bangla="ডিজিটাল, কম্পিউটারাইজড ও এনালগ সার্ভে"
            english="Digital, Computerized & Analog Survey"
          />
          <ServiceItem 
            bangla="ম্যাপ ড্রাফটিং, ইঙ্ক মার্কিং ও প্লট বিভাজন"
            english="Map Drafting, Ink Marking & Plot Division"
          />
          <ServiceItem 
            bangla="পেন্টাগ্রাফ (তুলনামূলক ম্যাপিং)"
            english="Pentagraph (Comparative Mapping)"
          />
          <ServiceItem 
            bangla="শেয়ার অনুযায়ী জমি বণ্টন"
            english="Land Partition as per Forage/Share"
          />
          <ServiceItem 
            bangla="জমি সংক্রান্ত আইনি পরামর্শ"
            english="Legal Consultancy for Land Issues"
          />
          <ServiceItem 
            bangla="অনলাইন জমি নিবন্ধন ও কর পরিশোধ"
            english="Online Land Registration & Tax Payment"
          />
          <ServiceItem 
            bangla="মেইল/কুরিয়ারের মাধ্যমে সারা বাংলাদেশে মৌজা ম্যাপ ডেলিভারি"
            english="Mouza Maps Delivery Across Bangladesh via Mail/Courier"
          />
          <ServiceItem 
            bangla="বাংলাদেশের যেকোনো জেলায় সাইট ভিজিট করে জরিপ"
            english="On-Site Land Survey Across Any District in Bangladesh"
          />
        </div>
      </div>

      {/* Commitment Section */}
      <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", marginTop: "2rem" }}>
        <h2 style={{ color: "#2c5f2d", borderBottom: "2px solid #2c5f2d", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
          আমাদের অঙ্গীকার | Our Commitment
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#333" }}>
          Ensuring accurate, reliable, and transparent services for every client.
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#333", marginTop: "1rem" }}>
          আমরা নিশ্চিত করি যে প্রতিটি ক্লায়েন্টের জন্য সঠিক, নির্ভরযোগ্য এবং স্বচ্ছ সেবা প্রদান করা হয়।
        </p>
      </div>

      {/* Training Section */}
      <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", marginTop: "2rem" }}>
        <h2 style={{ color: "#2c5f2d", borderBottom: "2px solid #2c5f2d", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
          ভূমি জরিপ ও আরমিনশিপ প্রশিক্ষণ
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#333" }}>
          ডিজিটাল ল্যান্ড সার্ভে ব্যানারে আগ্রহী শিক্ষার্থী ও ব্যবসায়ীদের জন্য আমরা পরিচালনা করি ভূমি জরিপ প্রশিক্ষণ ও আরমিনশিপ কোর্স।
        </p>
      </div>

      {/* Contact Info */}
      <div style={{ textAlign: "center", marginTop: "2rem", padding: "1rem", backgroundColor: "#2c5f2d", color: "white", borderRadius: "10px" }}>
        <h3>জরিরুল ইসলাম</h3>
        <p>রেজিস্ট্রেশন নং: 645804/96135</p>
      </div>
    </div>
  )
}

// Service Item Component
function ServiceItem({ bangla, english }) {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: "1rem",
      border: "1px solid #e0e0e0",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9"
    }}>
      <span style={{ fontWeight: "bold", color: "#333", flex: 1 }}>{bangla}</span>
      <span style={{ color: "#666", fontSize: "0.9rem", flex: 1, textAlign: "right" }}>{english}</span>
    </div>
  )
}
