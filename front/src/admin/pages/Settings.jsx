import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import API from "../api/axios";
import AdminLayout from "../layouts/AdminLayout";
import PasswordInput from "../../components/common/PasswordInput";

import {
  User,
  Mail,
  Phone,
  Lock,
  Upload,
  Save,
  Shield,
} from "lucide-react";


const Settings = () => {

  const [profileImage, setProfileImage] =
    useState("");
    
 const navigate =
useNavigate();  
     


  
  const [loading,setLoading] =
useState(true);

const [saving,setSaving] =
useState(false);

const [changingPassword,setChangingPassword] =
useState(false);

const [name,setName] =
useState("");

const [email,setEmail] =
useState("");

const [phone,setPhone] =
useState("");

const [oldPassword,setOldPassword] =
useState("");

const [newPassword,setNewPassword] =
useState("");

const [confirmPassword,setConfirmPassword] =
useState("");

const fetchProfile =
async()=>{

 try{

  const token =
  localStorage.getItem(
   "adminToken"
  );

  const response =
  await API.get(
   "/admin/profile",
   {
    headers:{
     Authorization:
     `Bearer ${token}`
    }
   }
  );

  const admin =
  response.data.admin;

  setName(admin.name || "");
  setEmail(admin.email || "");
  setPhone(admin.phone || "");
  setProfileImage(
  admin.profileImage || ""
);

 }catch(error){

  console.log(error);

 }finally{

  setLoading(false);

 }

};

useEffect(()=>{

 fetchProfile();

},[]);


const handleProfileUpdate =
async()=>{

 try{

  setSaving(true);

  const token =
  localStorage.getItem(
   "adminToken"
  );

  await API.put(
   "/admin/profile",
   {
    name,
    email,
    phone
   },
   {
    headers:{
     Authorization:
     `Bearer ${token}`
    }
   }
  );

  toast.success("Profile Updated Successfully");

 }catch(error){

  console.log(error);

 }finally{

  setSaving(false);

 }

};

const handlePasswordChange =
async()=>{

 try{

  if(
   newPassword !==
   confirmPassword
  ){

   return toast.error(
    "Passwords do not match"
   );

  }

  setChangingPassword(true);

  const token =
  localStorage.getItem(
   "adminToken"
  );

  await API.put(
   "/admin/change-password",
   {
    oldPassword,
    newPassword
   },
   {
    headers:{
     Authorization:
     `Bearer ${token}`
    }
   }
  );

  toast.success(
   "Password Updated"
  );

  setOldPassword("");
  setNewPassword("");
  setConfirmPassword("");

 }catch(error){

  toast.error(
   error.response?.data?.message ||
   "Error"
  );

 }finally{

  setChangingPassword(false);

 }

};

const handleImageUpload = async (file) => {

  try {

    const token =
      localStorage.getItem(
        "adminToken"
      );

    const formData =
      new FormData();

    formData.append(
      "image",
      file
    );

    const response =
      await API.put(
        "/admin/profile-image",
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    setProfileImage(
      response.data.image
    );

    toast.success(
      "Profile Photo Updated"
    );

  } catch (error) {

    console.log(error);

    toast.error(
      "Upload Failed"
    );

  }

};
if(loading){

return(

<AdminLayout>

<div className="flex justify-center items-center h-[60vh]">
  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#355B5E]"></div>
</div>

</AdminLayout>

);

}

  return (

    <AdminLayout>

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-[#355B5E]">

          Account Settings

        </h1>

        <p className="text-gray-500 mt-2">

          Manage your profile and security settings

        </p>

      </div>

      {/* Profile Card */}

      <div className="bg-white rounded-[35px] shadow-sm p-8 mb-8">

        <div className="flex flex-col lg:flex-row items-center gap-8">

          <div className="relative">

                  {
              profileImage ? (

              <img
              src={profileImage}
              className="
              w-32 h-32
              rounded-full
              object-cover
              "
              />

              ) : (

              <div className="
                            w-32 h-32
                            rounded-full
                            bg-[#355B5E]
                            text-white
                            flex
                            items-center
                            justify-center
                            text-5xl
                            font-bold
                            ">
              {name?.charAt(0)}
              </div>

              )
              }

          </div>

          <div>

            <h2 className="text-2xl font-bold">

              {name}

            </h2>

            <p className="text-gray-500 mt-2">

              {email}

            </p>

            <label className="inline-flex items-center gap-2 mt-5 bg-[#355B5E] text-white px-5 py-3 rounded-xl cursor-pointer">

              <Upload size={18} />

              Upload Profile Photo

 <input
  type="file"
  hidden
  accept="image/*"
  onChange={(e)=>{

    const file =
      e.target.files[0];

    if(file){

      handleImageUpload(
        file
      );

    }

  }}
/>

            </label>

          </div>

        </div>

      </div>

      {/* Profile Information */}

      <div className="bg-white rounded-[35px] shadow-sm p-8 mb-8">

        <h2 className="text-xl font-semibold mb-8">

          Profile Information

        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="flex items-center gap-2 mb-3 font-medium">

              <User size={18}/>

              Full Name

            </label>

            <input
              type="text"
              value={name}
            onChange={(e)=>
            setName(
            e.target.value
            )
            }
              className="w-full bg-[#F5F7F9] p-4 rounded-xl outline-none"
            />

          </div>

          <div>

            <label className="flex items-center gap-2 mb-3 font-medium">

              <Mail size={18}/>

              Email Address

            </label>

            <input
              type="email"
              value={email}
                onChange={(e)=>
                setEmail(
                e.target.value
                )
                }
              className="w-full bg-[#F5F7F9] p-4 rounded-xl outline-none"
            />

          </div>

          <div>

            <label className="flex items-center gap-2 mb-3 font-medium">

              <Phone size={18}/>

              Phone Number

            </label>

            <input
              type="text"
              value={phone}
              onChange={(e)=>
              setPhone(
              e.target.value
              )
              }
              className="w-full bg-[#F5F7F9] p-4 rounded-xl outline-none"
            />

          </div>

        </div>

      </div>

      {/* Security */}

      <div className="bg-white rounded-[35px] shadow-sm p-8 mb-8">

        <div className="flex items-center gap-3 mb-8">

          <Shield className="text-[#355B5E]" />

          <h2 className="text-xl font-semibold">

            Security Settings

          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-6">
           
           <div>

  <label className="flex items-center gap-2 mb-3 font-medium">

    <Lock size={18}/>

    Current Password

  </label>

  <PasswordInput
    value={oldPassword}
    onChange={(e) => setOldPassword(e.target.value)}
    placeholder="Current Password"
  />

          </div>
         <div>

  <label className="flex items-center gap-2 mb-3 font-medium">

    <Lock size={18}/>

    New Password

  </label>

  <PasswordInput
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    placeholder="Enter new password"
  />

</div>

         <div>

  <label className="flex items-center gap-2 mb-3 font-medium">

    <Lock size={18}/>

    Confirm Password

  </label>

  <PasswordInput
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    placeholder="Confirm Password"
  />

</div>

        </div>

        

          <button
onClick={()=>
navigate(
 "/forgot-password"
)
}
className="
mt-5
text-[#355B5E]
font-semibold
hover:underline
"
>

Forgot Password?

</button>
          <button
          onClick={handlePasswordChange}
          disabled={changingPassword}
          className="mt-6 ml-5 bg-[#355B5E] text-white px-6 py-3 rounded-xl"
          >

          {
          changingPassword
          ?
          "Updating..."
          :
          "Change Password"
          }

          </button>

      </div>
      
      
      {/* Save */}

      <div className="flex justify-end">

        <button onClick={handleProfileUpdate} className="bg-[#355B5E] text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition">

          <Save size={18} />

          {
saving
?
"Saving..."
:
"Save Changes"
}

        </button>

      </div>

    </AdminLayout>

  );

};

export default Settings;