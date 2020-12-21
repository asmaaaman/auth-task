import axiosInstance from "../BaseUrl/baseUrl";

// export const postLogin = async (user) => {
//   let postData = {
//     email: user.email,
//     password: user.password,
//     client_id: "2",
//     client_secret: "fhMZQxfVREJrII50IeN4ThIZCerdOFjxiRGu7Lc0",
//   };

//   let axiosConfig = {
//     headers: {
//       "Accept-Language": "en",
//     },
//   };
//   let resp;
//   try {
//     resp = axiosInstance.post("api/v1/users/login", postData, axiosConfig);
//     console.log(resp.data);
//   } catch (err) {

//     console.error(err);
//   }

//   return await axiosInstance(resp);
// };
export const postLogin = async (user) => {
  var data = new FormData();

  data.append("email", user.email);
  data.append("password", user.password);
  data.append("client_id", "2");
  data.append("client_secret", "fhMZQxfVREJrII50IeN4ThIZCerdOFjxiRGu7Lc0");

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
