import React from "react";

const Flags = ({ name, flag }) => {
  return (
    <div className="country-flag">
      <img src={flag} alt={`${name} flag`} className="country-flag" />
      {/* <h3>{name}</h3> */}
    </div>
  );
};

export default Flags;
