import { ArrowLeftIcon } from 'lucide-react';
import Banner from '../../assets/banner.png';
import Logo from '../../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

export const AuthBanner = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-full text-center w-full bg-center bg-cover lg:p-6 rounded-lg"
      style={{
        backgroundImage: `
            linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
            url(${Banner})
          `,
      }}
    >
      <div className="w-full flex items-center justify-between">
        <img src={Logo} alt="" className='size-24' />
        <button onClick={() => navigate('/')} className="flex items-center gap-2 bg-white rounded-[10px] px-4 py-2">
          <ArrowLeftIcon className="text-primary" />
          <span className="text-primary">Back to website</span>
        </button>
      </div>
      <div className="mt-20">
        <h1 className="text-2xl font-bold text-white mb-2 leading-160">
          Hello
        </h1>
        <p className="text-lg text-white mb-4 leading-160">
          Welcome To Harvest Nexus
        </p>
      </div>
    </div>
  );
};