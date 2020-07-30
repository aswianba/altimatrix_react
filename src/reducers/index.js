import { combineReducers } from "redux";

const flightDetails = (flightDetails = null, action) => {
  console.log(action.payload);
  if (action.type === "GET_FLIGHT_DETAILS") {
    return action.payload;
  }
  return flightDetails;
};

export default combineReducers({
  flightDetails,
});
