import React from "react";
import Search from "./components/search";
import DisplayFlights from "./components/displayFlights";

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
        <DisplayFlights />
      </div>
    );
  }
}

export default App;
