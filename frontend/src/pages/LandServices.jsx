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

      <div className="">
        <img src="/Screenshot_295.png" alt="land service"/>
        <img src="/Screenshot_296.png" alt="land service"/>
        <img src="/Screenshot_297.png" alt="land service"/>
      </div>

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
