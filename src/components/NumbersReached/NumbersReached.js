import React from "react";

const NumbersReached = ({ numbersReached }) => (
  <div>
    {numbersReached ? <h2 className='numbers-reached'>Teams Complete</h2> : null}
  </div>
);

export default NumbersReached;