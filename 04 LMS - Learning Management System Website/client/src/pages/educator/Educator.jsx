import React from "react";
import { Outlet } from "react-router-dom";

const Educator = () => {
  return (
    <>
      <div>
        <h1>Educator Page</h1>
      </div>
      <div> {<Outlet />} </div>
    </>
  );
};

export default Educator;
