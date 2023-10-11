import axios from "axios";

const serverAuth = async () => {
  const data = await axios.get("http://localhost:3002/current");
  const currentUser = data.data;
  return { currentUser };
};

export default serverAuth;
