import axios from "../api/axios";

export const getFlightDetails = (searchData) => async (dispatch) => {
  let { data } = await axios.get("/flightDetails", searchData);
  dispatch({ type: "GET_FLIGHT_DETAILS", payload: data });
};

export const setSelectedPage = (selectedPage) => {
  return {
    type: "SET_SELECTED",
    payload: selectedPage,
  };
};
