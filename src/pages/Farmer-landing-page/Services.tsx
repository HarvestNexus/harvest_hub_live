// import  { type FC } from "react";

interface Service {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Find Storage",
    desc: "Book cold rooms and warehouses near you.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5V6a3 3 0 013-3h12a3 3 0 013 3v1.5M3 7.5h18M3 7.5V18a3 3 0 003 3h12a3 3 0 003-3V7.5M9 11.25h6"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Sell Your Produce",
    desc: "List crops and sell directly to buyers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3v1.5M3 21v-1.5M21 3v1.5M21 21v-1.5M7.5 12h9M12 7.5v9"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Transport Made Easy",
    desc: "Book trucks or vans to deliver your produce.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.5V8.25A2.25 2.25 0 015.25 6h9.5A2.25 2.25 0 0117 8.25v5.25M17 13.5h3.75A2.25 2.25 0 0123 15.75V18A2.25 2.25 0 0120.75 20.25H19.5M7.5 20.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm12 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "All-in-One Platform",
    desc: "Manage storage, sales, and logistics in one simple place.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
      </svg>
    ),
  },
];

const Services= () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-center">
        <div className="w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 transform transition duration-500 hover:scale-[1.02]">
          <img
  src="/images/farmerourservice.jpeg"
  alt="farmer services"
  className="w-full h-80 md:h-[820px] object-cover"
/>

        </div>

        <div className="animate-slideUp">
          <div className="inline-flex items-center bg-emerald-50 text-emerald-700 text-sm font-medium px-4 py-1.5 rounded-full border border-emerald-100 shadow-sm">
            <svg
              className="w-4 h-4 mr-2 text-emerald-600"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path
                d="M10.5 16.5L6 12l1.4-1.4 3.1 3.1 6.6-6.6L18 8.5 10.5 16.5z"
                fill="#fff"
                opacity="0.9"
              />
            </svg>
            Our Services
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Everything You Need to Reduce Waste and Sell Smarter
          </h2>

          <p className="mt-3 text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
            We bring to you simple, user-friendly tools to reduce crop waste, find buyers, and transport your goods seamlessly.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-gray-900 font-medium text-lg mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;