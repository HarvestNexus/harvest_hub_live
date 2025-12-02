import { AuthBanner } from "../components/common/AuthBanner";

const AuthLayout = ({ children }: any) => {

  return (
    <section className="h-screen w-full bg-white p-4 lg:p-6">  
      <div className="flex item-start w-full lg:h-full">
        <div className="hidden lg:h-full lg:inline lg:w-1/2">
            <AuthBanner
            />
        </div>
        <div className="w-full lg:w-1/2 h-auto lg:h-full">
            <section className="h-full pt-16 lg:pt-0">{children}</section>
        </div>
      </div>    
    </section>
  );
};

export default AuthLayout;