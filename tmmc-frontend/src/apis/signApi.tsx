import axios from "axios";

export const register = (name: string, id: string, pwd: string) => {
  let ownerId;
  axios
    .post(
      "http://www.tmmc.shop/api/user",
      {
        name: name,
        userId: id,
        password: pwd,
      },
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    });
};
