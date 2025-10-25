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
          src="/landservices-banner1.png" // <-- এখানে তোমার প্রথম ছবির path দাও
          alt="Digital Land Survey Center"
          className="w-full h-auto border border-gray-300 rounded-lg"
        />
      </section>

      {/* Owner Info */}
      <section className="px-4 py-8 text-center">
        <p className="text-lg sm:text-xl md:text-2xl">
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকার কর্তৃক স্বীকৃত প্রাপ্ত বাংলাদেশ কারিগরি শিক্ষা বোর্ড ও
          ময়মনসিংহ সার্ভে ইনস্টিটিউট থেকে সরকারি সনদপ্রাপ্ত সার্ভেয়ার (আমিন)।
        </p>

        <div className="flex flex-col items-center mt-6">
          <img
            src="/landservices-profile.png" // <-- এখানে তোমার নিজের ছবির path দাও
            alt="Owner"
            className="object-cover w-40 h-48 border-4 border-blue-400 rounded-lg"
          />
          <h2 className="mt-4 text-2xl font-bold text-blue-600 sm:text-3xl">
            জহিরুল ইসলাম
          </h2>
          <p className="text-lg text-gray-700">রেজি নং: 645804 / 96135</p>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-10 bg-white sm:px-10">
        <h2 className="mb-6 text-3xl font-bold text-center text-orange-600 sm:text-4xl">
          আমাদের সম্পর্কে
        </h2>

        <div className="flex flex-col items-center gap-6 md:flex-row">
          <img
            src="/landservices-logo.png" // <-- দ্বিতীয় ছবির লোগো দিলে এখানে দাও
            alt="Logo"
            className="object-contain w-40 h-40"
          />

          <div className="text-lg leading-relaxed">
            <p>
              “ডিজিটাল ল্যান্ড সার্ভে সেন্টার”-এ আপনাকে স্বাগতম। আমরা আধুনিক প্রযুক্তি ও
              কম্পিউটারাইজড ডিজিটাল সিস্টেমের মাধ্যমে ভূমির পরিমাপ এবং তথ্য বিশ্লেষণ করে থাকি।
              আমাদের লক্ষ্য হলো— গ্রাহকদের জমি সংক্রান্ত প্রতিটি সমস্যা নির্ভুল, নির্ভরযোগ্য ও
              দ্রুত সমাধান প্রদান করা।
            </p>
            <p className="mt-3">
              আমাদের সেন্টারে ভূমি জরিপ, মানচিত্র প্রস্তুত, দাগ ও খতিয়ান যাচাই, ভূমি বিবাদ
              নিরসনসহ সব ধরণের সেবা প্রদান করা হয়। এছাড়া প্রশিক্ষণ কোর্সের মাধ্যমে নতুন
              প্রজন্মকে দক্ষ সার্ভেয়ার হিসেবে গড়ে তুলতে আমরা প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-10 bg-gray-100 sm:px-12">
        <h2 className="mb-6 text-3xl font-bold text-center text-orange-600 sm:text-4xl">
          আমাদের সেবাসমূহ | <span className="text-gray-700">Our Services</span>
        </h2>

        <ul className="max-w-3xl mx-auto space-y-3 text-lg list-disc list-inside">
          <li>
            ডিজিটাল সার্ভে, কম্পিউটারাইজড সার্ভে ও এনালগ সার্ভে || Digital, Computerized &
            Analog Survey
          </li>
          <li>
            নকশা থেকে দাগ নম্বর ও প্লট বিভাজন || Map Drafting, Ink Marking & Plot Division
          </li>
          <li>
            পেন্টাগ্রাফ (ফলাফলমূলক নকশা) || Pentagraph (Comparative Mapping)
          </li>
          <li>
            ভাগাভাগি / পরচা অনুযায়ী জমি বিভাজন || Land Partition as per Forage/Share
          </li>
          <li>
            ভূমি সংক্রান্ত আইনি পরামর্শ || Legal Consultancy for Land Issues
          </li>
          <li>
            অনলাইনে নামজারি আবেদন ও খাজনা পরিশোধ || Online Land Registration & Tax Payment
          </li>
          <li>
            বাংলাদেশের যেকোনো জেলার মৌজা/খতিয়ান সংগ্রহ ডাকযোগে সরবরাহ || Mouza Maps Delivery
            Across Bangladesh
          </li>
          <li>
            বাংলাদেশের যেকোনো জেলার সরেজমিনে জরিপ পরিদর্শন || On-Site Land Survey Across Any
            District in Bangladesh
          </li>
        </ul>
      </section>

      
      {/* Commitment Section */}
      <section className="px-6 py-10 bg-white sm:px-12">
        <h2 className="mb-6 text-3xl font-bold text-center text-orange-600 sm:text-4xl">
          আমাদের লক্ষ্য | <span className="text-gray-700">Our Commitment:</span>
        </h2>

        <p className="max-w-3xl mx-auto mb-4 text-lg text-center">
          প্রতিটি গ্রাহকের জন্য সঠিক, নির্ভুল এবং স্বচ্ছ সেবা নিশ্চিত করা।
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
              ডিজিটাল ল্যান্ড সার্ভে সেন্টার-এ আমরা জমি সংক্রান্ত সকল ধরনের সেবা প্রদান করি। এর মধ্যে রয়েছে সকল প্রকার জমির পরিমাপ, মৌজা বক্সা অনুযায়ী সীমানা নির্ধারণ, ডিজিটাল সার্ভে, দলিল, বাইটিস এবং নকশা সম্পর্কিত পেশাদার সেবা। আমাদের দক্ষ টিম আধুনিক যন্ত্রপাতি কম্পিউটারাইজড পদ্ধতি ব্যবহার করে দ্রুত ও নির্ভুলভাবে সকল কাজ করা।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              আমাদের দশ টিম সরেজমিনে গিয়ে সুপার টোটাল স্টেশনের সাহায্যে জমাদের জমি পরিমাপ ও সীমানা নির্ধারণের কাজ করে। আমরা প্রতিটি জমাদার পরিমাপ নিশ্চিত করি সর্বোচ্চ প্রযুক্তি ও মানমানের মাধ্যমে, যাতে জমি সংক্রান্ত কোন বিষয় বা বিরোধ না থাকে।
            </p>
            <div className="flex justify-center">
              <img
                src="/commit1.png"
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
              সকল বাংলাদেশের যেকোনো জমাদার CS, SA, RS ও BS মৌজা ম্যাপ বা নকশা সহজেই যাহের করা সম্ভব। বিশেষ করে দূরা পরিত্যক্ত অঞ্চলের করলো চালু করি অরিজিন অনিশ্চিত থেকে মৌজা ম্যাপ বা নকশা পেতে সুদেশ খুবই শান বা, তাদের জন্য আমরা একটি সুবিধাজনক সমাধান প্রদান করি। মাধ্যমা অন্তর্ভুক্তে মাধ্যমে তারা নিজ উপাত্তমার কুরিয়ার সার্ভিসের মাধ্যমে নিরবচ্ছিন্ন পেতে পারবেন তাদের বাড়িতে বা কার্যালয়ে পারবেন।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              আমাদের এই সেবার মাধ্যমে, আমিল, মন্ত্রিণ বা তুমি কর্তৃপক্ষীর প্রয়োজনীয় দক্ষতা ও তথ্য সহজেই সহজভাবে পাঠানো যাবেন। এছে আপনি পরিচিতি, সীমানা নির্ধারণ বা অন্যান্য জমিবি কাজগুলি দায়িত্ব অক্ষ ও উপরিভাতের সম্মেলা করা সহজ হয়।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              মৌজা ম্যাপ সংগ্রহের জন্য প্রয়োজনীয় যাবতে করলের তথ্যদে, প্রচারজনীয় তথ্যদোলা যোগাযোগ প্রদান করা উচিত ও এতে করে ম্যাপ সংগ্রহের কাজ অক্ষ, নির্ভুল এবং কাউন্টারুভাবের সম্পন্ন হয়।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <img
                src="/commit2.png"
                alt="Mouza Map 1"
                className="w-full h-auto max-w-xs border border-gray-300 rounded-lg"
              />
              <img
                src="/commit3.png"
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
              দেশের যেকোনো জমাদার আমরা মুরগির সাভিসের মাধ্যমে অন্যা সরবারি জমাদের লেখের থেকে আধুনিক তুমি পরিমাপের যন্ত্রপাতি সরবরাহ করি। আমাদের সরবারাহকৃত যন্ত্রপাতি ডুপিএনভিট, নির্ভুল এবং ব্যবহারযোগ্য মানসম্পন্ন, যা সাভিসের, আবেরি এবং আলস সঠিক সম্পর্কে দ্রুত উপরানো।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              গ্রাহকরা সহজেই প্রয়োজনীয় যন্ত্রপাতি নির্ধিত টিইভিযার জাভ এবং নিয়ম্বগুলার থেকে পারবেন। এছাড়াও, যন্ত্রপাতির সরকারের তথেকে প্রয়োজনের হলে আমরা প্রাথমিক মহায়তা ও পরামর্শও প্রদান করি, যাতে গ্রাহক সঠিকভাবে যন্ত্রপাতি ব্যবহার করে নির্ভুল ফলাফল পেতে পারেন।
            </p>
            <div className="flex justify-center mb-4">
              <img
                src="/landservices-equipment.png"
                alt="Survey Equipment"
                className="w-full h-auto max-w-2xl border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* ভূমি জরিপ ও আমিনশীপ প্রশিক্ষণ */}
          <div>
            <h3 className="mb-3 text-2xl font-bold text-blue-600">
              ⬇️ভূমি জরিপ ও আমিনশীপ প্রশিক্ষণ
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              ডিজিটাল ল্যান্ড সার্ভে সেন্টার-এ শারীরী শিক্ষার্থী ও পেশাদারীদের জন্য আমরা পরিচালনা করি তুমি জরিপ প্রশিক্ষণ ও আমিনশিপ প্রশিক্ষণ। এই প্রশিক্ষণ প্রোগ্রামটি ও মান ও আমিন আবেরি সেভার বিজনেস উপকরণ, পোতের বাংলা মান পাঠের ও তুমি জরিপ পদ্ধতি, নকশা ধিরি, দলিল ফাচাই এবং সীমানা নির্ধারণের ব্যবহারিক দক্ষতা অর্জন করতে পারবেন।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              কোর্স সম্পন্ন হলে অংশগ্রহণকারীদের অফিসিয়াল আমিনশীপ সার্টিফিকেট প্রদান করা হয়, যা তাদের পেশাগত উন্নয়ন ও জমি জরিপসেবে দক্ষতা প্রমাণের জন্য অত্যন্ত মূল্যবান।
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              এছাড়া, দানা ডিজিটাল প্রযুক্তি ও কাম্পিউটারাইজড তুমি জরিপের প্রার্থনী প্রশিক্ষণী, তাদের জন্য ডিজিটাল সার্ভে কোর্স-এ পরিচালনা করা হয়। এই কোর্সে শিখানোরা ডিজিটাল সাভিবে, GPS, Total Station, AutoCAD এবং অন্যান্য আধুনিক সরবারী ব্যবহার করে তুমি জরিপের সম্পূর্ণ প্রশিক্ষণ নিতে পারবেন।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <img
                src="/landservices-training1.png"
                alt="Training Session 1"
                className="w-full h-auto max-w-sm border border-gray-300 rounded-lg"
              />
              <img
                src="/landservices-training2.png"
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
            ⬇️জমি ও ফ্ল্যাট সংক্রান্ত সেবা
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            জমি বা ফ্ল্যাট বেনার পূর্ব আমরা প্রদান করি দলিলপত্র জমাদার, রাজীবভাষ্য রট ধৈর্জি এবং স্বল্পীতে নকশা প্রকৃতি পুরাতন সেবা। আমাদের প্রতিভা টিম বাংলাদেশের যেকোনো লাহ-রেজিস্ট্রি অফিসে জমির দলিল রেজিস্ট্রিকৃত সহযোগী প্রদান করে, যাতে আপনার সম্পত্তি ক্রয় নিরাপদ ও নিশ্চিত থাকে।
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            প্রাবল চাইলে বাংলাদেশের যেকোনো জেলার বা কোনো জমাদার দলিল, খতিয়ান ও নকশা সম্পূর্কিত সকল প্রকার সেবা আমাদের কাছ থেকে নিতে পারবেন। আমরা নিষ্ঠিক তথিব দ্রুত দাগ সহভিত্ত পরচ, নির্ভুল, স্বচ্ছ ও নিশ্চিতভাবেরহেলবে সম্পাহন হয়, যাতে জমি বা ফ্ল্যাট ক্রয় প্রক্রিয়া কাউন্টারুমুক্ত হয়।
          </p>
          
          <div className="flex justify-center mb-8">
            <img
              src="/landservices-land-flat.png"
              alt="Land and Flat Services"
              className="w-full h-auto max-w-lg border border-gray-300 rounded-lg"
            />
          </div>

          <p className="mb-6 text-xl text-center">
            সরাসরি অফিসে এসে ভূমি বিষয়ক যে কোন বিষয়ে সহযোগীতা নিতে পারবেন।
          </p>

          <div className="flex justify-center">
            <img
              src="/landservices-contact-card.png"
              alt="Contact Card"
              className="w-full h-auto max-w-md border-2 border-purple-600 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 mt-10 text-center text-white bg-blue-900">
        <p className="text-lg font-semibold">
          ডিজিটাল ল্যান্ড সার্ভে সেন্টার, দিঘলদী বাজার, আড়াইহাজার, নারায়ণগঞ্জ
        </p>
        <p>📞 01733-564476, 01934-113271</p>
      </footer>
    </div>
  );
}
