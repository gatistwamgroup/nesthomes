import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { Link } from "react-router-dom";

import PasswordInput from "../../components/common/PasswordInput";

const Login = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      const response =
        await API.post(
          "/auth/login",
          {
            email,
            password,
          }
        );

      localStorage.setItem(
        "adminToken",
        response.data.token
      );

      localStorage.setItem(
        "adminUser",
        JSON.stringify(
          response.data.admin
        )
      );

      navigate(
        "/admin/dashboard"
      );

    } catch (err) {

      setError(
        err?.response?.data?.message ||
          "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-[#F8F6F2]">

      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* LEFT */}

        <div className="hidden lg:flex items-center justify-center bg-[#355B5E] p-10">

          <div className="text-center">

            <img
              src="/logo.png"
              alt="logo"
              className="w-40 mx-auto mb-8"
            />

            <h1 className="text-white text-5xl font-bold mb-6">

              Admin Panel

            </h1>

            <p className="text-white/70 text-lg">

              The Nest Recovery Homes

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center p-8">

          <div className="bg-white rounded-[35px] shadow-xl p-10 w-full max-w-md">

            <h2 className="text-4xl font-bold text-primary mb-3">

              Welcome Back

            </h2>

            <p className="text-gray-500 mb-8">

              Login to your admin dashboard

            </p>

            {error && (

              <div className="bg-red-100 text-red-600 p-4 rounded-xl mb-5">

                {error}

              </div>

            )}

            <form
              className="space-y-5"
              onSubmit={handleLogin}
            >

              <input
                type="email"
                value={email}
                onChange={(e)=>
                  setEmail(
                    e.target.value
                  )
                }
                placeholder="Email Address"
                className="w-full border rounded-xl p-4"
              />

              <div className="relative">
                      <input
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        value={password}
                        onChange={(e)=>
                          setPassword(
                            e.target.value
                          )
                        }
                        placeholder="Password"
                        className="w-full border rounded-xl p-4"
                      />
      
                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(
                            !showPassword
                          )
                        }
                        className="absolute right-4 top-4"
                      >
      
                        {showPassword ? (
                          <EyeOff size={20}/>
                        ) : (
                          <Eye size={20}/>
                        )}
      
                      </button>

              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-4 rounded-xl mb-8"
              >

                {loading
                  ? "Logging In..."
                  : "Login"}

              </button>

             <Link to="/forgot-password" className="text-primary font-medium">
                  Forgot Password?
              </Link>

            </form>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Login;