import React from "react";
import "../flightdetails.css";
import { connect } from "react-redux";
import FlightItem from "./FlightItems";
import { paginateGridRecords } from "../utils/utils";

const DisplayFlights = ({ flightDetails, itemsPerPage, selectedPage }) => {
  let newflightDetails = paginateGridRecords(
    flightDetails,
    selectedPage,
    itemsPerPage
  );
  console.log(newflightDetails);
  if (newflightDetails && newflightDetails.length > 0) {
    return newflightDetails.map((item) => {
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

const mapStateToProps = ({ flightDetails, itemsPerPage, selectedPage }) => {
  if (flightDetails)
    return { flightDetails: [...flightDetails], itemsPerPage, selectedPage };
  else return {};
};

export default connect(mapStateToProps)(DisplayFlights);
