import React from "react";
import { connect } from "react-redux";
import "../flightdetails.css";
import { setSelectedPage } from "../actions";

const Pagination = (props) => {
  let totalPages;
  let pageNumberArray;
  if (props.totalFligths) {
    totalPages = Math.ceil(props.totalFligths / props.itemsPerPage);
    pageNumberArray = Array.from(Array(totalPages + 1).keys()).slice(1);
  }
  const handlePageClick = (pageNumber) => {
    props.setSelectedPage(pageNumber);
  };
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      {pageNumberArray.map((pageNumber) => {
        let selectedStyle = null;
        if (props.selectedPage === pageNumber)
          selectedStyle = "pageNumber active";
        else selectedStyle = "pageNumber";

        return (
          <div
            className={selectedStyle}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ flightDetails, selectedPage, itemsPerPage }) => {
  if (flightDetails)
    return { totalFligths: flightDetails.length, selectedPage, itemsPerPage };
  else return {};
};

export default connect(mapStateToProps, { setSelectedPage })(Pagination);
