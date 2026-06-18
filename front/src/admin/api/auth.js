import API from "./axios";

export const getProfile = async () => {

  const token =
    localStorage.getItem(
      "adminToken"
    );

  const response =
    await API.get(
      "/admin/profile",
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  return response.data;
};