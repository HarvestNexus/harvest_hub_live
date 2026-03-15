import { useState, useEffect } from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import Banner from '../../assets/banner2.png';

const carouselItems = [
  "Buy fresh produce from farmers, delivered to your doorstep.",
  "Sell to buyers directly, store your produce, and move your harvest with ease.",
  "Help farmers store their harvest safely to reduce post harvest waste.",
  "Connect with farmers and food buyers who need delivery every day.",
];

interface AuthBannerProps {
  onBack?: () => void;
  backLabel?: string;
}

export const AuthBanner: React.FC<AuthBannerProps> = ({ 
  onBack, 
  backLabel = "Back to website" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="h-full w-full bg-center bg-cover relative rounded-[28px] overflow-hidden"
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      <div className="w-full flex items-center justify-between lg:p-6 relative z-10">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 bg-white rounded-[10px] px-4 py-2 hover:bg-gray-50 transition-colors shadow-sm"
        >
          <ArrowLeftIcon className="text-primary" size={20} />
          <span className="text-primary font-medium">{backLabel}</span>
        </button>
      </div>
      <div 
        style={{background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.85))'}} 
        className="absolute bottom-0 w-full px-8 py-12"
      >
       <div className='text-left'>
         <p className="text-base font-thin font-nunito text-white mb-2 leading-160 opacity-90">
          Welcome To Harvest Nexus
        </p>
        <div className="space-y-4">
          <h3 className='text-white font-bold font-nunito text-3xl leading-tight'>
            Reduce waste and store harvest
          </h3>
          <div className="relative h-6 overflow-hidden">
            {carouselItems.map((item, index) => (
              <p
                key={index}
                className={`text-[#E2E2E2] font-nunito font-light text-sm absolute transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4'
                }`}
              >
                {item}
              </p>
            ))}
          </div>
          
          <div className="flex gap-1.5 pt-4">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};
