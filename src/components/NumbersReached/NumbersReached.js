import React from "react";

const NumbersReached = ({ numbersReached }) => (
  <div>
    {numbersReached ? <h2 className='numbers-reached'>Numbers Reached</h2> : <h2 className='numbers-reached'>Keep on!</h2>}
  </div>
);

export default NumbersReached;