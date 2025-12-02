import React, { useState } from "react";
import Input from "./Input";
import { useSearchParams } from "react-router-dom";
import { validateEmail, validatePhone, isEmpty } from "./validators";

import Sucessful from './Sucessful'

interface FormState {
  fullName: string;
  emailOrPhone: string;
  farmLocation: string;
  cropType: string;
  password: string;
}

const Verification: React.FC = () => {
  const [params] = useSearchParams();
  const selectedRole = params.get("role") || "User";

  const [otp, setOtp] = useState(new Array(5).fill(""));

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, i: number
  ) => {
    // check if inputed value is a number, if not return nothing
    if (e.target.value && !/^\d$/.test(e.target.value)) {
      e.preventDefault();

      return;
    }

      setOtp([...otp.map((data, index)=>(index === i ? e.target.value: data))]);
      // if theres a next input after the 1st input have been populated, move to the next
      if(e.target.value && e.target.nextSibling){
        e.target.nextSibling.focus();
      }
      else if(e.target.value == "" && e.target.previousSibling){
        e.target.previousSibling.focus();
      }

  }

  const handleSubmit = () => {
alert([...otp].join(""));

    // if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen font-nunito border flex flex-col md:flex-row items-center ">
      {/* LEFT IMAGE */}
      <div className="md:w-1/2 w-full md:h-screen relative">
        <img
          src="/images/signup/buyer_signup.avif"
          alt="Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute font-nunito inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Hello {"selectedRole"}</h1>
          <p className="text-lg mt-2">Welcome To Harvest Nexus</p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="md:w-1/2 w-full px-10 py-10 grid gap-3 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center">
          <Mail size={150} color="#208836" strokeWidth={0.5}  />

          <h1 className="text-4xl font-bold">We Just Messaged You.</h1>
          <p className="text-lg mt-2">Please enter the verification code we sent to</p>
          <p className="text-center">08099999920</p>

          </div>
          <div>
            {/*verification code for verifying email signin*/}

            <form className="w-full  flex flex-col  gap-2">
              <div className="w-full p-3 grid grid-cols-5 gap-3 items-center justify-between">
                {/*OTP input field*/}
                {otp.map((data, i)=>{
                  return <input key={i} maxLength={1} onChange={(e)=> handleChange(e, i)} value={data} min="1" max="1" id="authNo" required className="focus:ring-2 focus:ring-black text-3xl text-center focus:outline-none border-2 border-neutral-400 rounded-lg p-3 w-full" />

                })}
              </div>
              <button onClick={handleSubmit} className="font-nunito bg-green-600 text-white w-full py-3 rounded-md mt-4 hover:bg-green-700 transition disabled:bg-gray-400">Verify</button>
            </form>
          </div>
        </div>


             
      </div>
      
    </div>
  );
};

export default Verification;
