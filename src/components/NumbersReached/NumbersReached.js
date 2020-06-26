// import React from "react";

// const NumbersReached = ({ numbersReached }) => (
//   <div>
//     {numbersReached ? <h2 className='numbers-reached'>Teams Complete</h2> : null}
//   </div>
// );

// export default NumbersReached;

import React from "react";

const NumbersReached = ({ playersList, numbersReached }) => (
  <div>
    {numbersReached ?
      < h2 className='numbers-reached'>Teams Complete</h2> :
      <h2 className='numbers-reached'>Add {10 - playersList.length} more players</h2>}
  </div >
);

export default NumbersReached;