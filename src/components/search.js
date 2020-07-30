import React from "react";
import "../flightdetails.css";
import { getFlightDetails, setSelectedPage } from "../actions";
import { connect } from "react-redux";

class Search extends React.Component {
  doSearchFlights = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    this.props.getFlightDetails({
      sourceCity: data.get("source_city"),
      destinationCity: data.get("destination_city"),
      travelDate: data.get("travel_date"),
    });
    this.props.setSelectedPage(1);
  };

  render() {
    return (
      <div className="card search">
        <form onSubmit={this.doSearchFlights}>
          <div style={{ display: "flex" }}>
            <div className="inputContainer">
              <label htmlFor="source_city">Source City</label>
              <br />
              <input type="text" id="source_city" name="source_city" />
            </div>
            <div className="inputContainer">
              <label htmlFor="destination_city">Destination City</label>
              <br />
              <input
                type="text"
                id="destination_city"
                name="destination_city"
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="travel_date">Travel Date</label>
              <br />
              <input type="date" id="travel_date" name="travel_date" />
            </div>
            <input
              style={{ marginTop: "20px", marginLeft: "10px" }}
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps, { getFlightDetails, setSelectedPage })(
  Search
);
