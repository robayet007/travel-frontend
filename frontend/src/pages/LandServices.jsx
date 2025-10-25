import React from "react";

export default function LandServices() {
  return (
    <div className="text-gray-800 bg-gray-50">
      {/* Header Image */}
      <section style={{
        width: "80%",
        margin:"auto",
        paddingTop:'10px'
      }}>
        <img
          src="/0.jpg"
          alt="Digital Land Survey Center"
          className="w-full h-auto border border-gray-300 rounded-lg"
          style={{
            padding:"8px",
            border:"5px solid #00a6ff"
          }}
        />
      </section>

      {/* Owner Info */}
      <section className="px-4 py-8 text-center">
        <p className="text-lg sm:text-xl md:text-2xl">
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকার কর্তৃক স্বীকৃত প্রাপ্ত বাংলাদেশ কারিগরি শিক্ষা বোর্ড ও
          ময়নামতি সার্ভে ইনস্টিটিউট থেকে সরকারি সনদ প্রাপ্ত সার্ভেয়ার (আমিন)
        </p>

        <div className="flex flex-col items-center mt-6">
          <img
            src="/1.jpg"
            alt="Owner"
            className="object-cover w-40 h-48 border-4 border-blue-400 rounded-lg"
          />
          <h2 className="mt-4 text-2xl font-bold text-blue-600 sm:text-3xl">
            জহিরুল ইসলাম
          </h2>
          <p className="text-lg text-gray-700">রেজি নং: ৬৪৫৮০৪/৯৬১৩৫</p>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-10 bg-white sm:px-10">
        <h2 className="mb-6 text-3xl font-bold text-center text-orange-600 sm:text-4xl">
          আমাদের সম্পর্কে|| <span className="text-gray-700">About Us:</span>
        </h2>

        <div className="flex flex-col items-center gap-6 md:flex-row">
          <img
            src="/2.jpg"
            alt="Logo"
            className="object-contain w-40 h-40"
          />

          <div className="text-lg leading-relaxed">
            <p>
              "ডিজিটাল ল্যান্ড সার্ভে সেন্টার"-এ আপনাকে স্বাগতম। আমরা অত্যাধুনিক প্রযুক্তি ও 
               কম্পিউটারাইজড ডিজিটাল সিস্টেমের মাধ্যমে ভূমির নিখুঁত পরিমাপ এবং তথ্য বিশ্লেষণ 
               করে থাকি। আমাদের লক্ষ্য হলো— গ্রাহকদের জমি সংক্রান্ত প্রতিটি বিষয়ে নির্ভুল, 
               নির্ভরযোগ্য ও স্বচ্ছ সেবা প্রদান করা।
            </p>
            <p className="mt-3">
              আমাদের সেন্টারে ভূমি জরিপ, মানচিত্র প্রস্তুত, দাগ ও খতিয়ান যাচাই, ভূমি বিরোধ নিরসন 
              সহ ভূমি সংক্রান্ত সকল জটিল বিষয়ে বিশেষজ্ঞ পরামর্শ প্রদান করা হয়। আমরা শুধু সেবা 
               প্রদানেই সীমাবদ্ধ নই; ভবিষ্যৎ প্রজন্মের জন্যও সুযোগ তৈরি করছি— আগ্রহী শিক্ষার্থী ও 
               পেশাজীবীদের জন্য আমরা পরিচালনা করি আধুনিক ভূমি জরিপ প্রশিক্ষণ কর্মসূচি, যেখানে 
               তাত্ত্বিক ও ব্যবহারিক প্রশিক্ষণের মাধ্যমে দক্ষ সার্ভেয়ার তৈরি করা হয়।
            ***তাই প্রতিটি কাজে আমরা সর্বোচ্চ গুরুত্ব দিই দক্ষতা, সততা ও পেশাদারিত্বে। আপনার ভূমি 
              সংক্রান্ত যেকোনো কাজে, আমরা আছি আপনার পাশে— বিশ্বাসের প্রতীক “ডিজিটাল ল্যান্ড সার্ভে সেন্টার।
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-10 bg-gray-100 sm:px-12">
        <h2 className="mb-6 text-3xl font-bold text-center text-orange-600 sm:text-4xl">
          আমাদের সেবাসমূহ || <span className="text-gray-700">Our Services</span>
        </h2>

        <ul className="max-w-3xl mx-auto space-y-3 text-lg list-disc list-inside">
          <li>
            ডিজিটাল সার্ভে, কম্পিউটার সার্ভে ও এনালগ সার্ভে || Digital, Computerized & Analog Survey
          </li>
          <li>
            নকশা থেকে কালি করণ ও দাগ ভাঙ্গানো || Map Drafting, Ink Marking & Plot Division
          </li>
          <li>
            পেন্টাগ্রাফ (তুলনামূলক নকশা) || Pentagraph (Comparative Mapping)
          </li>
          <li>
             ফরায়েজ/পর্চার হিস্যা অনুযায়ী বণ্টন || Land Partition as per Forage/Share
          </li>
          <li>
           জমি সংক্রান্ত যেকোনো সমস্যার আইনি পরামর্শ || Legal Consultancy for Land Issues
          </li>
          <li>
            অনলাইন নামজারীর আবেদন ও খাজনা পরিশোধ || Online Land Registration & Tax Payment
          </li>
          <li>
            বাংলাদেশের যেকোনো মৌজার নকশা ডাক/কুরিয়ার সার্ভিসের মাধ্যমে সরবরাহ || Mouza Maps Delivery Across Bangladesh via Mail/Courier
          </li>
          <li>
            বাংলাদেশের যেকোনো জেলায় সরেজমিনে জমির পরিমাপ || On-Site Land Survey Across Any District in Bangladesh
          </li>
        </ul>
      </section>

      
      {/* Commitment Section */}
      <section className="px-6 py-10 bg-white sm:px-12">
        <h2 className="mb-6 text-3xl font-bold text-center text-orange-600 sm:text-4xl">
          আমাদের লক্ষ্য || <span className="text-gray-700">Our Commitment:</span>
        </h2>

        <p className="max-w-3xl mx-auto mb-4 text-lg text-center">
          প্রত্যেক গ্রাহকের জন্য সঠিক, নির্ভুল এবং স্বচ্ছ সেবা নিশ্চিত করা।
        </p>
        <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-gray-600">
         Ensuring accurate, reliable, and transparent services for every client.
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* আধুনিক সঠিক পরিমাপ */}
          <div>
            <h3 className="mb-3 text-2xl font-bold text-blue-600">
              ⬇️ আধুনিক সঠিক পরিমাপ ⬇️
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
             "ডিজিটাল ল্যান্ড সার্ভে সেন্টার"-এ আমরা জমি সংক্রান্ত সকল ধরনের সেবা প্রদান করি। এর মধ্যে রয়েছে সকল প্রকার জায়গার সঠিক পরিমাপ, মৌজা নকশা অনুযায়ী সীমানা নির্ধারণ, ডিজিটাল সার্ভে, দলিল, খতিয়ান এবং নকশা সম্পর্কিত পেশাদার সেবা। আমাদের লক্ষ্য হলো গ্রাহকের জমি সংক্রান্ত কাজকে নির্ভুল, স্বচ্ছ ও নিরাপদভাবে সম্পন্ন করা।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
             আমাদের দক্ষ টিম সরজমিনে গিয়ে পুরো বাংলাদেশের যেকোনো জায়গায় জমি পরিমাপ ও সীমানা নির্ধারণের কাজ করে। আমরা প্রতিটি জায়গার পরিমাপ নিশ্চিত করি সঠিক প্রযুক্তি ও মানচিত্রের মাধ্যমে, যাতে জমি সংক্রান্ত কোন দ্বিধা বা বিরোধ না থাকে।
            </p>
            <div className="flex justify-center">
              <img
                src="/3.jpg"
                alt="Field Survey"
                className="w-full h-auto max-w-md border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* মৌজা ম্যাপ সংগ্রহের সুবিধা */}
          <div>
            <h3 className="mb-3 text-2xl font-bold text-blue-600">
              ⬇️ মৌজা ম্যাপ সংগ্রহের সুবিধা ⬇️
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              সারা বাংলাদেশের যেকোনো জায়গার CS, SA, RS ও BS মৌজা ম্যাপ বা নকশা সহজেই সংগ্রহ করা সম্ভব। বিশেষ করে যারা ব্যক্তিগত বা পেশাগত কারণে ঢাকা এসে জরিপ অফিস থেকে মৌজা ম্যাপ বা নকশা তোলার সুযোগ পান না, তাদের জন্য আমরা একটি সুবিধাজনক সমাধান প্রদান করি। সামান্য খরচের মাধ্যমে তারা নিজ উপজেলার কুরিয়ার সার্ভিসের মাধ্যমে নির্দিষ্ট মৌজা ম্যাপ বা নকশা ঘরে বসে সংগ্রহ করতে পারবেন।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              আমাদের এই সেবার মাধ্যমে, আমিন, সার্ভেয়ার বা ভূমি জরিপকর্মীরা প্রয়োজনীয় নকশা ও তথ্য সংগ্রহে সহজভাবে সহায়তা পাবেন। এতে করে জমি পরিমাপ, সীমানা নির্ধারণ বা অন্যান্য জরিপ কার্যক্রম আরও দ্রুত ও সঠিকভাবে সম্পন্ন করা সম্ভব হয়।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              মৌজা ম্যাপ সংগ্রহের জন্য প্রক্রিয়াটি আরও কার্যকর করতে, প্রয়োজনীয় তথ্যগুলো যথাযথভাবে প্রদান করা উচিত। এতে করে ম্যাপ সংগ্রহের কাজ দ্রুত, নির্ভুল এবং ঝামেলা মুক্তভাবে সম্পন্ন হয়।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <img
                src="/4.jpg"
                alt="Mouza Map 1"
                className="w-full h-auto max-w-xs border border-gray-300 rounded-lg"
              />
              <img
                src="/5.jpg"
                alt="Mouza Map 2"
                className="w-full h-auto max-w-xs border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Training Section */}
      <section className="px-6 py-10 bg-gray-100 sm:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* ভূমি পরিমাপের যন্ত্রপাতি সরবরাহ */}
          <div>
            <h3 className="mb-3 text-2xl font-bold text-blue-600">
              ⬇️ ভূমি পরিমাপের যন্ত্রপাতি সরবরাহ ⬇️
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              দেশের যেকোনো জায়গায় আমরা কুরিয়ার সার্ভিসের মাধ্যমে অথবা সরাসরি আমাদের দোকান থেকে আধুনিক ভূমি পরিমাপের যন্ত্রপাতি সরবরাহ করি। আমাদের সরবরাহকৃত যন্ত্রপাতি অত্যাধুনিক, নির্ভুল এবং ব্যবহারযোগ্য মানসম্পন্ন, যা সার্ভেয়ার, আমিন, শিক্ষার্থী বা পেশাদার জমি পরিমাপকারী সকলের জন্য উপযোগী।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              গ্রাহকরা সহজেই প্রয়োজনীয় যন্ত্রপাতি নির্দিষ্ট ঠিকানায় দ্রুত এবং নিরাপদভাবে পেতে পারেন। এছাড়াও, যন্ত্রপাতি ব্যবহারের ক্ষেত্রে প্রয়োজন হলে আমরা প্রাথমিক সহায়তা ও পরামর্শও প্রদান করি, যাতে গ্রাহক সঠিকভাবে যন্ত্রপাতি ব্যবহার করে নির্ভুল ফলাফল পেতে পারেন।
            </p>
            <div className="flex justify-center mb-4">
              <img
                src="/6.jpg"
                alt="Survey Equipment"
                className="w-full h-auto max-w-2xl border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* ভূমি জরিপ ও আমিনশীপ প্রশিক্ষণ */}
          <div>
            <h3 className="mb-3 text-2xl font-bold text-blue-600">
              ⬇️ ভূমি জরিপ ও আমিনশীপ প্রশিক্ষণ ⬇️
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
             "ডিজিটাল ল্যান্ড সার্ভে সেন্টার"-এ আগ্রহী শিক্ষার্থী ও পেশাজীবীদের জন্য আমরাই পরিচালনা করি ডিজিটাল পদ্ধতিতে ভূমি জরিপ প্রশিক্ষণ ও আমিনশীপ কোর্স। এই প্রশিক্ষণ প্রোগ্রামটি ৩ মাস ও ৬ মাস মেয়াদি বা ১ বছর কোর্স হিসেবে উপলব্ধ, যেখানে শিক্ষার্থীরা সর্বাধুনিক ডিজিটাল ভূমি জরিপ পদ্ধতি, নকশা তৈরি, দলিল যাচাই এবং সীমানা নির্ধারণের ব্যবহারিক দক্ষতা অর্জন করতে পারবেন।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              কোর্স সম্পন্ন হলে অংশগ্রহণকারীদের অফিসিয়াল আমিনশীপ সার্টিফিকেট অথবা “বাংলাদেশ কারিগরি শিক্ষা বোর্ড” ও ”ময়নামতি সার্ভে ইনস্টিটিউট” থেকে সরকারি সনদ প্রদান করা হয়, যা তাদের পেশাগত উন্নয়ন ও জমি জরিপকর্মে দক্ষতা প্রমাণের জন্য অত্যন্ত মূল্যবান।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
             এছাড়া, যারা ডিজিটাল প্রযুক্তি ও কম্পিউটারাইজড ভূমি জরিপে আগ্রহী, তাদের জন্য ডিজিটাল সার্ভে কোর্সও পরিচালনা করা হয়। এই কোর্সে শিক্ষার্থীরা ডিজিটাল মানচিত্র, GPS, Total Station, AutoCAD এবং অন্যান্য আধুনিক সরঞ্জাম ব্যবহার করে ভূমি জরিপের সম্পূর্ণ প্রক্রিয়া শিখতে পারবেন।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <img
                src="/7.jpg"
                alt="Training Session 1"
                className="w-full h-auto max-w-sm border border-gray-300 rounded-lg"
              />
              <img
                src="/8.jpg"
                alt="Training Session 2"
                className="w-full h-auto max-w-sm border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

        {/* জমি ও ফ্ল্যাট সংক্রান্ত সেবা Section */}
      <section className="px-6 py-10 bg-white sm:px-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="mb-4 text-2xl font-bold text-blue-600">
            ⬇️ জমি ও ফ্ল্যাট সংক্রান্ত সেবা ⬇️
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            জমি বা ফ্ল্যাট কেনার পূর্বে আমরা প্রদান করি দলিলপত্র তল্লাশি, হাউজিং প্লট তৈরি এবং কলমি নকশা প্রস্তুতির পূর্ণাঙ্গ সেবা। আমাদের অভিজ্ঞ টিম বাংলাদেশের যেকোনো সাব-রেজিস্ট্রি অফিসে জমির দলিল রেজিস্ট্রিতে সহায়তা প্রদান করে, যাতে প্রক্রিয়াটি দ্রুত ও নিরাপদভাবে সম্পন্ন হয়।
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            আপনি চাইলে বাংলাদেশের যেকোনো জেলার যে কোনো জায়গার দলিল, খতিয়ান ও নকশা সম্পর্কিত সকল প্রকার সেবা আমাদের কাছ থেকে নিতে পারবেন। আমরা নিশ্চিত করি যে প্রতিটি ধাপ নির্ভুল, স্বচ্ছ ও নির্ভরযোগ্যভাবে সম্পন্ন হয়, যাতে জমি বা ফ্ল্যাট ক্রয় প্রক্রিয়া ঝামেলামুক্ত হয়।
          </p>
          
          <div className="flex justify-center mb-8">
            <img
              src="/9.jpg"
              alt="Land and Flat Services"
              className="w-full h-auto max-w-lg border border-gray-300 rounded-lg"
            />
          </div>

          <p className="mb-6 text-xl text-center">
            ভূমি সংক্রান্ত যেকোনো প্রশ্ন, সমস্যা বা প্রয়োজনীয় পরামর্শের জন্য আপনি আমাদের অফিসে সরাসরি এসে যোগাযোগ করতে পারেন।
আমাদের অভিজ্ঞ ও প্রশিক্ষিত টিম আপনার সকল ভূমি বিষয়ক জটিলতা ও প্রশ্নের সঠিক দিকনির্দেশনা, প্রয়োজনীয় তথ্য ও কার্যকর সমাধান প্রদানে সদা প্রস্তুত। 
          </p>

          <div className="flex justify-center">
            <img
              src="/10.jpg"
              alt="Contact Card"
              className="w-full h-auto max-w-md border-2 border-purple-600 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 mt-10 text-center text-white bg-blue-900">
         <h1 className="text-[2rem]">ডিজিটাল ল্যান্ড সার্ভে সেন্টার</h1>
         <h2> 🗺️ দিঘলদী বাজার , আড়াইহাজার, নারায়ণগঞ্জ</h2>
        <p> ☎️ +8801733-564476, +8801934-113271</p>
      </footer>
    </div>
  );
}