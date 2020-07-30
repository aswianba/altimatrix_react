import React from "react";
import "../flightdetails.css";
import { connect } from "react-redux";
import FlightItem from "./flightItems";

const DisplayFlights = ({ flightDetails }) => {
  if (flightDetails && flightDetails.length > 0) {
    return flightDetails.map((item) => {
      return <FlightItem key={item.flightNumber} flightData={item} />;
    });
  } else {
    return (
      <div className="empty-card card">
        <h2>NO FLIGHTS AVAILABLE!</h2>
      </div>
    );
  }
};

const mapStateToProps = ({ flightDetails }) => {
  if (flightDetails) return { flightDetails };
  else return {};
};

export default connect(mapStateToProps)(DisplayFlights);
