import axiosInstance from "../BaseUrl/baseUrl";

export const postRegister = async (user) => {
  let url = "api/v1/users";

  let postData = {
    username: username,
    email: user.email,
    password: user.password,
    confirm_password: confirm_password,
    phoneNumber: phoneNumber,
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
