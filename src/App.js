import React from "react";
import Search from "./components/Search";
import DisplayFlights from "./components/DisplayFlights";
import Pagination from "./components/Pagination";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          background: "#e1e7ee",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Search />
        <div style={{ position: "relative", height: "500px" }}>
          <DisplayFlights />
        </div>
        <Pagination />
      </div>
    );
  }
}

export default App;
