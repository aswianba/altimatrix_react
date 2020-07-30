import axios from "axios";

const url = "http://localhost:8081/api";

export default axios.create({ baseURL: url });
