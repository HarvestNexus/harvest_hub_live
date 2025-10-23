import { CheckCircle, Archive, Upload, ShoppingBag, Truck } from "lucide-react";

const steps = [
  {
    icon: <Archive className="w-6 h-6 text-amber-600" />,
    title: "Store Your Harvest",
    description:
      "Search and book nearby storage facilities, cold rooms, warehouses, or silos.",
  },
  {
    icon: <Upload className="w-6 h-6 text-amber-600" />,
    title: "List Your Produce",
    description:
      "Upload your harvested crops to the marketplace with price, quantity, and simple details.",
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-amber-600" />,
    title: "Get Orders",
    description:
      "Accept, confirm, and prepare your harvest for delivery — no middlemen involved.",
  },
  {
    icon: <Truck className="w-6 h-6 text-amber-600" />,
    title: "Deliver And Get Paid",
    description:
      "Book trusted transport to deliver your harvest, track deliveries in real time, and get secure payments.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <CheckCircle className="w-4 h-4" />
          How It Works
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Four Simple Ways to Protect and Sell Your Harvest
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          From storage to selling, everything you need is just a few clicks away.
          Here’s how it works:
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-left flex items-start gap-4 hover:bg-gray-100 transition"
            >
              <div className="bg-amber-100 p-3 rounded-full">{step.icon}</div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
