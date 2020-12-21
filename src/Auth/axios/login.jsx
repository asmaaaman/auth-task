import axiosInstance from "../BaseUrl/baseUrl";

export const postLogin = async (user) => {
  let data = new FormData();
  data = {
    email: user.email,
    password: user.password,
    client_id: "2",
    client_secret: "fhMZQxfVREJrII50IeN4ThIZCerdOFjxiRGu7Lc0",
  };

  var config = {
    method: "post",
    url: "api/v1/users/login",
    headers: {
      "Accept-Language": "en",
    },
    data: data,
  };

  return await axiosInstance(config);
};
