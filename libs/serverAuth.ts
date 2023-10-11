import axios from "axios";

const serverAuth = async () => {
  const data = await axios.get(`${process.env.URL_AUTH}current`);
  const currentUser = data.data;
  return { currentUser };
};

export default serverAuth;
