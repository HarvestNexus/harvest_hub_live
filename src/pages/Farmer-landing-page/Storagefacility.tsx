import { MapPin, Clock, Thermometer, Star } from "lucide-react";

interface Facility {
  id: number;
  name: string;
  image: string;
  location: string;
  type: string;
  price: string;
  rating: number;
  hours: string;
  status: string;
  availabilityColor: string;
  badgeText: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    name: "Valley Storage",
    image: "/images/aa.webp",
    location: "Oluyole Extension",
    type: "Cold room",
    price: "₦5000 / tons / day",
    rating: 4.5,
    hours: "9am - 5pm, Mon - Sat",
    status: "Available",
    availabilityColor: "bg-green-600",
    badgeText: "200 tons available",
  },
  {
    id: 2,
    name: "Agro Warehouse",
    image: "/images/agrowarehouse.webp",
    location: "Bodija Ibadan",
    type: "Dry Storage",
    price: "₦3000 / tons / day",
    rating: 3.5,
    hours: "9am - 5pm, Mon - Sat",
    status: "Full",
    availabilityColor: "bg-red-500",
    badgeText: "Full",
  },
  {
    id: 3,
    name: "Agro Warehouse",
    image: "/images/farmstorage.webp",
    location: "Bodija Ibadan",
    type: "Dry Storage",
    price: "₦3000 / tons / day",
    rating: 4.0,
    hours: "9am - 5pm, Mon - Sat",
    status: "Available",
    availabilityColor: "bg-green-600",
    badgeText: "20 tons available",
  },
];

export default function StorageFacility() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Thermometer className="w-4 h-4" />
          Storage Facilities
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Affordable Storage Near You
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Book nearby cold rooms and warehouses to preserve your crops and
          reduce losses.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-3 left-3 text-xs text-white px-3 py-1 rounded-full ${facility.availabilityColor}`}
                >
                  {facility.badgeText}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {facility.name}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-1 gap-2">
                  <Clock className="w-4 h-4" />
                  {facility.hours}
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1 gap-2">
                  <MapPin className="w-4 h-4" />
                  {facility.location}
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1 gap-2">
                  <Thermometer className="w-4 h-4" />
                  {facility.type}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-gray-900 font-semibold">{facility.price}</p>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span className="text-sm text-gray-700 font-medium">
                      {facility.rating}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg text-sm font-medium transition">
                    Book Now
                  </button>
                  <button className="flex-1 border border-gray-300 hover:bg-gray-100 py-2.5 rounded-lg text-sm font-medium transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="text-gray-600 text-sm mt-10 max-w-2xl mx-auto">
          Keep your harvest fresh and reduce losses. Sign up today to book a
          storage facility near you.
        </p>
        <button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition">
          Sign Up Now →
        </button>
      </div>
    </section>
  );
}
