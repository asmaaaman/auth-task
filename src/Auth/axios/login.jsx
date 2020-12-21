import axiosInstance from "../Interceptors/login";

export const postLogin = async (user) => {
  let url = "api/v1/users/login";
  let postData = {
    email: user.email,
    password: user.password,
    client_id: 2,
    client_secret: "fhMZQxfVREJrII50IeN4ThIZCerdOFjxiRGu7Lc0",
  };

  let axiosInfoHeader = {
    headers: {
      "Accept-Language": "en",
    },
  };

  const response = await axiosInstance.post(url, postData, axiosInfoHeader);
  console.log(response);
};
