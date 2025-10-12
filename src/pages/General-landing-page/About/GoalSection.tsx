import React from "react";
import { CheckCircle } from "lucide-react";

const GoalSection: React.FC = () => {
  const goals = [
    "Providing a transparent marketplace where farmers can sell directly to buyers at fair prices.",
    "Offering seamless logistics that ensure timely transportation of produce.",
    "Connecting farmers to affordable storage facilities to preserve crops.",
  ];

  const stats = [
    {
      label: "Reduction in Spoilage",
      value: 60,
      barColor: "#208836",
      circleColor: "#C7EBCF4D",
      vectorImage: "/images/Vector3.png",
      iconColor: "#208836"
    },
    {
      label: "More Farmer-to-Buyer Transactions",
      value: 40,
      barColor: "#8B4513",
      circleColor: "#EFE7DF",
      vectorImage: "/images/Vector2.png",
      iconColor: "#8B4513"
    },
    {
      label: "Seamless Deliveries and Pick Ups",
      value: 55,
      barColor: "#1A1A1A",
      circleColor: "#F5F5F5",
      vectorImage: "/images/Group.png",
      iconColor: "#1A1A1A"
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Goal</h2>
            <h2 className="text-lg md:text-md text-gray-800 mb-4"> Supporting both farmers and buyers with digital tools that 
              simplify trade, 
              track orders and secure payments."</h2>
            <ul className="space-y-5">
              {goals.map((goal, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <p
                    className="text-gray-700"
                    style={{
          
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '24px',
                      lineHeight: '160%',
                      letterSpacing: '0%'
                    }}
                  >
                    {goal}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex justify-center">
            <img
              src="/images/about2.png"
              alt="Farmers working in field"
              className="object-cover"
              style={{
                width: '550px',
                height: '450px',
                borderRadius: '28px',
                opacity: 1,
              }}
            />
            <div
              className="absolute bg-white/95 shadow-xl backdrop-blur-sm border border-gray-100"
              style={{
                width: '450px',
                height: '350px',
                borderRadius: '28px',
                opacity: 1,
                top: '233px',
                gap: '28px',
                borderWidth: '1px',
                padding: '20px',
                left: '-50px'
              }}
            >

              <div className="pt-8">
                {stats.map((stat, i) => {
                  return (
                    <div key={i} className="mb-7 last:mb-0">
                      <div className="flex items-start gap-4">

                        <div
                          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: stat.circleColor }}
                        >
                          <img
                            src={stat.vectorImage}
                            alt={stat.label}
                            className="w-8 h-8 object-contain"
                            style={{ color: stat.iconColor }}
                          />
                        </div>


                        <div className="flex-1">

                          <div className="flex justify-between items-center mb-2">
                            <span className="text-base font-medium text-gray-600">{stat.label}</span>
                            <span className="text-base  text-gray-900 ml-4">{stat.value}%</span>
                          </div>


                          <div className="w-4/5 bg-gray-200 rounded-full h-2.5">
                            <div
                              className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: `${stat.value}%`,
                                backgroundColor: stat.barColor
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;