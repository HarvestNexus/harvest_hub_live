import AuthLayout from "../../../layouts/AuthLayout";
import { Content } from "./Content";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout onBack={() => navigate("/")} backLabel="Back to website">
      <Content />
    </AuthLayout>
  );
};

export default Login;