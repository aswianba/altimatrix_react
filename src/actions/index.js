import axios from "../api/axios";

const getFlightDetails = (searchData) => async (dispatch) => {
  let { data } = await axios.post("/flightDetails", searchData);
  dispatch({ type: "GET_FLIGHT_DETAILS", payload: data });
};

export default getFlightDetails;
