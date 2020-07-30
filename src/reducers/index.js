import { combineReducers } from "redux";

const flightDetails = (flightDetails = null, action) => {
  if (action.type === "GET_FLIGHT_DETAILS") {
    return action.payload;
  }
  return flightDetails;
};

const selectedPage = (selectedPage = 1, action) => {
  if (action.type === "SET_SELECTED") {
    return action.payload;
  }
  return selectedPage;
};
const itemsPerPage = () => {
  return 5;
};

export default combineReducers({
  flightDetails,
  selectedPage,
  itemsPerPage,
});
