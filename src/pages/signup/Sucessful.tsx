import React, { useState } from "react";
import Input from "./Input";
import { useSearchParams } from "react-router-dom";
import { validateEmail, validatePhone, isEmpty } from "./validators";
import {Mail} from "lucide-react";



const Sucessful: React.FC = () => {
 
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
          {/*<Mail size={150} color="#208836" strokeWidth={0.5}  />*/}
          <img src="/images/signup/Wavy_Check.avif" className="" size={150} />

          <h1 className="text-4xl font-bold">Successful</h1>
          <p className="text-lg mt-2">Great! Welcome To Harvest Nexus  </p>

          </div>
          <div className="w-full p-3 grid grid-cols-5 gap-3 items-center justify-between">
            {/*verification code for verifying email signin*/}

           
          </div>
        </div>


             
      </div>
      
    </div>
  );
};

export default Sucessful;
