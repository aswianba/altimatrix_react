import React from "react";
import Moment from "react-moment";
import moment from "moment";
import "../flightdetails.css";

const FlightItem = ({ flightData }) => {
  const {
    flightNumber,
    airplaneName,
    depatureTime,
    arrivalTime,
    sourceCity,
    destinationCity,
    price,
  } = flightData;

  let duration = moment.duration(
    moment(arrivalTime).diff(moment(depatureTime))
  );
  let formatedDuration = `${duration.get("hours")} h ${duration.get(
    "months"
  )} m`;

  return (
    <div className="card">
      <div className="container">
        <img src="logo192.png" alt="img" width="25" height="25" />
        <label style={{ verticalAlign: "super", paddingLeft: "5px" }}>
          {flightNumber}
          <b>:</b>
          {airplaneName}
        </label>
      </div>
      <hr />
      <div style={{ display: "flex" }} className="container">
        <div>
          <span>{sourceCity}</span>
          <div>
            <b>
              <Moment format="HH:mm">{depatureTime}</Moment>
            </b>
          </div>
        </div>
        <div className="duration">
          <div style={{ fontSize: "23px" }}>&rarr;</div>
          <div>{formatedDuration}</div>
        </div>
        <div className="destination">
          <span>{destinationCity}</span>
          <div>
            <b>
              <Moment format="HH:mm">{arrivalTime}</Moment>
            </b>
          </div>
        </div>
        <div className="cost">
          <b>&#8377; {price}</b>
        </div>
        <div className="bookbuttonDiv">
          <button className="bookButton"> Book</button>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;
