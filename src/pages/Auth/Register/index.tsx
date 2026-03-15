import { useState } from "react";
import AuthLayout from "../../../layouts/AuthLayout";
import { Content } from "./Content";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const handleBack = () => {
    if (step === 1) {
      navigate("/");
    } else {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
    }
  };

  const backLabel = step === 1 ? "Back to website" : "Back";

  return (
    <AuthLayout onBack={handleBack} backLabel={backLabel}>
      <Content step={step} setStep={setStep} />
    </AuthLayout>
  );
};

export default Register;