import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../ui/Input";
import AuthContext from "../../../context/Auth";

function Signup() {
  const { user, setUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const [error, setError] = useState("");
  const pawrd = watch("pass");
  const signHandle = (data) => {
    const isUserExist = user.some((i) => i.email === data.email);
    if (isUserExist) {
      setError("User Email is already Registered kindly use different Email");
      return;
    } else {
      setUser((prev) => [...prev, data]);
      setCurrentUser(data);
      reset();
      navigate("/");
    }
  };

  return (
    <div className="md:min-h-screen bg-zinc-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-800">Create Account</h1>
          <p className="mt-2 text-sm text-zinc-500">
            Sign up to start shopping with us
          </p>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-5" onSubmit={handleSubmit(signHandle)}>
          <Input
            label="Name"
            type="text"
            placeholder="Enter Your Name"
            {...register("name", {
              required: "Name is Required",
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
          <Input
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email format is not correct",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <Input
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            {...register("pass", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Min length of the password is 8",
              },
              validate: {
                hasUpper: (value) =>
                  /[A-Z]/.test(value) || "must have one uppercase",
                hasNumber: (value) =>
                  /[0-9]/.test(value) || "must have one number",
                hasSymbol: (value) =>
                  /[!@#$%^&*]/.test(value) || "must have one symbol",
              },
            })}
          />
          {errors.pass && (
            <p className="text-red-500 text-sm">{errors.pass.message}</p>
          )}
          <Input
            label="Password"
            type="password"
            placeholder="Enter Your Confirm Password"
            {...register("cpass", {
              required: "Confirm Password is Required",
              validate: (value) =>
                value === pawrd || "Confirm Password doesn't match Password",
            })}
          />
          {errors.cpass && (
            <p className="text-red-500 text-sm">{errors.cpass.message}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-orange-500 hover:text-orange-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
