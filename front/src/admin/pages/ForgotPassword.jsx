import React,{
 useState
} from "react";

import API from "../api/axios";
import toast from "react-hot-toast";

const ForgotPassword = ()=>{

 const [email,setEmail] =
 useState("");

 const handleSubmit =
 async(e)=>{

  e.preventDefault();

  try{

   await API.post(
    "/admin/forgot-password",
    { email }
   );

   toast.success(
    "Reset link sent"
   );

  }catch(error){

   toast.error(
    error.response?.data?.message || "Something went wrong"
   );

  }

 };

 return(

 <div className="min-h-screen flex items-center justify-center">

 <form
 onSubmit={handleSubmit}
 className="bg-white p-8 rounded-2xl shadow-lg w-[400px]"
 >

 <h2 className="text-2xl font-bold mb-5">

 Forgot Password

 </h2>

 <input
 type="email"
 value={email}
 onChange={(e)=>
 setEmail(
 e.target.value
 )
 }
 placeholder="Email"
 className="w-full border p-4 rounded-xl"
 />

 <button
 type="submit"
 className="w-full mt-4 bg-primary text-white py-4 rounded-xl"
 >

 Send Reset Link

 </button>

 </form>

 </div>

 );

};

export default ForgotPassword;