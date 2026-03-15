import { AuthBanner } from "../components/common/AuthBanner";
import Logo from '../assets/logo.jpg';

interface AuthLayoutProps {
  children: React.ReactNode;
  onBack?: () => void;
  backLabel?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  onBack, 
  backLabel 
}) => {
  return (
    <section className="h-screen w-full bg-white p-4 lg:p-6 overflow-hidden">  
      <div className="flex item-start w-full lg:h-full">
        <div className="w-full lg:w-1/2 h-full overflow-y-auto custom-scrollbar">
            <section className="min-h-full px-4 md:px-8 lg:px-24 py-4">
              <img src={Logo} alt="Harvest Nexus" className='w-32' />
              <div>
                {children}
              </div>
            </section>
        </div>
        <div className="hidden lg:block lg:w-1/2 h-full">
          <AuthBanner onBack={onBack} backLabel={backLabel} />
        </div>
      </div>    
    </section>
  );
};

export default AuthLayout;
