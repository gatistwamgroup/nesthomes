import React, {
  useEffect,
  useState,
} from "react";

import {
  Navigate,
} from "react-router-dom";

import {
  getProfile,
} from "../api/auth";

const ProtectedRoute = ({
  children,
}) => {

  const [loading, setLoading] =
    useState(true);

  const [isAuth, setIsAuth] =
    useState(false);

  useEffect(() => {

    const verify =
      async () => {

        try {

          await getProfile();

          setIsAuth(true);

        } catch {

          localStorage.removeItem(
            "adminToken"
          );

          localStorage.removeItem(
            "adminUser"
          );

          setIsAuth(false);

        } finally {

          setLoading(false);

        }

      };

    verify();

  }, []);

  if (loading) {

    return (

      <div className="h-screen flex items-center justify-center">

        <h2 className="text-xl font-semibold">

          Loading...

        </h2>

      </div>

    );

  }

  return isAuth
    ? children
    : <Navigate
        to="/admin/login"
      />;

};

export default ProtectedRoute;