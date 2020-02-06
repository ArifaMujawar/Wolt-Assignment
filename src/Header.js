import React from "react";

const Header = () => {
  return (
    <header>
      <h1 className="logo">Wolt</h1>
      <div className="searchBar">
        <input type="text" placeholder="search with street address"></input>
      </div>
    </header>
  );
};

export { Header as default };
