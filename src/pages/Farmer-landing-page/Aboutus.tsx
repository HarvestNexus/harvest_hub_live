

type Info = {
  id: number;
  text: string;
};

const infos: Info[] = [
  {
    id: 1,
    text: "We make it easier for farmers to store their produce in nearby cold rooms and warehouses, reducing spoilage and extending the life of each harvest.",
  },
  {
    id: 2,
    text: "We also provide a marketplace where farmers can sell directly to wholesalers, retailers, and processors without relying on middlemen.",
  },
];

export default function AboutSection() {
  return (
    <section className="px-6 py-20 mx-auto max-w-7xl">
      <div className="text-center mb-14">
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
          About Us
        </div>

        <h2 className="mt-6 text-3xl font-semibold leading-snug text-gray-900 md:text-4xl">
          Reduce Waste, and Sell Directly To Buyers
        </h2>
        <p className="max-w-2xl mx-auto mt-3 text-base leading-relaxed text-gray-500 md:text-lg">
          Helping farmers keep crops fresh and connect with buyers directly and faster, all in one platform.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Left: Info Cards */}
        <div className="space-y-6">
          {infos.map((info) => (
            <div
              key={info.id}
              className="flex items-start p-6 transition-shadow duration-300 bg-white border border-gray-100 shadow-md rounded-2xl hover:shadow-lg"
            >
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path
                      d="M12.5 7v2.5h1.5v1H12.5V17h-1.5v-6.5H9.5v-1h1.5V7h1.5z"
                      fill="#fff"
                      opacity="0.95"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-base font-normal leading-relaxed text-gray-700">
                {info.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md overflow-hidden border border-gray-100 shadow-lg md:max-w-xl rounded-3xl">
           
            <img
              src={'./images/farmerabt.jpeg'}
              alt="farm produce"
              className="object-cover w-full h-64 sm:h-72 md:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
