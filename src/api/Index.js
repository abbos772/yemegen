import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://66361b4d415f4e1a5e26494c.mockapi.io/api/card",
});

export default mainUrl;
