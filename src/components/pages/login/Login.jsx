import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../ui/Input";
import AuthContext from "../../../context/Auth";

function Login() {
  const navigate = useNavigate();
  const { user, setCurrentUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [error, setError] = useState("");
  const handleLogin = (data) => {
    const validate = user.find(
      (i) => i.email === data.email && i.pass === data.pass,
    );
    if (validate) {
      setCurrentUser(validate);
      navigate("/");
    } else {
      setError("Username and Password doesn't matched");
    }
  };
  return (
    <div className="md:min-h-screen bg-zinc-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-800">Welcome Back</h1>
          <p className="mt-2 text-sm text-zinc-500">
            Login to continue shopping with us
          </p>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
          <Input
            type="email"
            label="Email"
            {...register("email", { required: "Email is Required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <Input
            type="password"
            label="Password"
            {...register("pass", { required: "Password is Required" })}
          />
          {errors.pass && (
            <p className="text-red-500 text-sm">{errors.pass.message}</p>
          )}

          {/* Forgot Password */}
          {/* <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-orange-500 hover:text-orange-600"
            >
              Forgot Password?
            </Link>
          </div> */}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="mt-6 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-orange-500 hover:text-orange-600"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
