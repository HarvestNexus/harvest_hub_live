import React, { useState } from "react";
import Input from "./Input";
import { useSearchParams } from "react-router-dom";
import { validateEmail, validatePhone, isEmpty } from "./validators";

interface FormState {
  fullName: string;
  emailOrPhone: string;
  farmLocation: string;
  cropType: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const [params] = useSearchParams();
  const selectedRole = params.get("role") || "User";

  const [form, setForm] = useState<FormState>({
    fullName: "",
    emailOrPhone: "",
    farmLocation: "",
    cropType: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const newErrors: Partial<FormState> = {};

    if (isEmpty(form.fullName)) newErrors.fullName = "Full name is required.";

    if (isEmpty(form.emailOrPhone))
      newErrors.emailOrPhone = "Email or phone is required.";
    else if (
      !validateEmail(form.emailOrPhone) &&
      !validatePhone(form.emailOrPhone)
    )
      newErrors.emailOrPhone = "Enter a valid email or phone number.";

    if (isEmpty(form.farmLocation)) newErrors.farmLocation = "Location required.";

    if (isEmpty(form.cropType)) newErrors.cropType = "Select a crop type.";

    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      alert("Account created successfully!");
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
          <h1 className="text-4xl font-bold">Hello {selectedRole}</h1>
          <p className="text-lg mt-2">Welcome To Harvest Nexus</p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="md:w-1/2 w-full px-10 py-10 grid gap-3 items-center justify-center">
        <h2 className="text-4xl font-bold mb-4 font-nunito">Create Your Account</h2>
        <p className="text-gray-600 mb-6 font-nunito">
          Sign up to start storing and selling directly to buyers.
        </p>

        <div className="max-w-md font-nunito ">
          <Input
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />

          <Input
            label="Email or Phone Number"
            name="emailOrPhone"
            value={form.emailOrPhone}
            onChange={handleChange}
            error={errors.emailOrPhone}
          />

     

          

          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-green-600 text-white w-full py-3 rounded-md mt-4 hover:bg-green-700 transition disabled:bg-gray-400"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
           <div className="relative flex items-center justify-center mt-3 mb-3">
        <span className="bg-white p-3 z-30">Or login with</span>
        <span className="absolute w-full border m-auto "></span>
      </div>
      {/*Apple and Google Auth btn container div*/}
      <div className="w-full  grid grid-cols-2 items-center justify-between gap-3">
        <button className="flex flex-row border rounded-md items-center justify-center gap-3 p-2">
          <div className="w-7 h-7">
          <img src="/images/signup/apple.png" className="w-full h-full object-contain" />
            
          </div>
          <span>Apple</span>
        </button>
        <button className="flex flex-row gap-3 border rounded-md items-center justify-center gap-3 p-2">
          <div className="w-7 h-7">
          <img src="/images/signup/google.png" className="w-full h-full object-contain" />
            
          </div>
          <span>Google</span>
        </button>
      </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default SignUpForm;
