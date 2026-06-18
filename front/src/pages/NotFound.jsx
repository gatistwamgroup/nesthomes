import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found | The Nest Recovery Homes" 
        description="The page you are looking for does not exist." 
      />
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-8xl font-heading text-primary font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="bg-primary text-white px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
