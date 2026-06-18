import React,{
  useState
} from "react";

import {
  useParams,
  useNavigate
} from "react-router-dom";

import API from "../api/axios";
import toast from "react-hot-toast";

const ResetPassword = () => {

  const { token } =
  useParams();

  const navigate =
  useNavigate();

  const [password,setPassword] =
  useState("");

  const [confirmPassword,
  setConfirmPassword] =
  useState("");

  const [loading,setLoading] =
  useState(false);

  const handleSubmit =
  async(e)=>{

    e.preventDefault();

    if(
      password !==
      confirmPassword
    ){

      toast.error(
        "Passwords do not match"
      );
      return;

    }

    try{

      setLoading(true);

      const response =
      await API.put(

        `/admin/reset-password/${token}`,

        {
          password
        }

      );

      toast.success(
        response.data.message
      );

      navigate("/login");

    }catch(error){

      toast.error(

        error.response?.data?.message ||

        "Reset Failed"

      );

    }finally{

      setLoading(false);

    }

  };

  return(

    <div className="min-h-screen bg-[#F8F6F2] flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-[30px] shadow-xl p-8">

        <h1 className="text-3xl font-bold text-primary mb-3">

          Reset Password

        </h1>

        <p className="text-gray-500 mb-8">

          Enter your new password

        </p>

        <form
        onSubmit={handleSubmit}
        className="space-y-5"
        >

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e)=>
            setPassword(
              e.target.value
            )
            }
            className="w-full border rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>
            setConfirmPassword(
              e.target.value
            )
            }
            className="w-full border rounded-xl p-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-4 rounded-xl"
          >

            {
            loading
            ?
            "Updating..."
            :
            "Reset Password"
            }

          </button>

        </form>

      </div>

    </div>

  );

};

export default ResetPassword;