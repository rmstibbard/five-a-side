import { connect } from "react-redux";
import NumbersReached from "./NumbersReached";

const mapStateToProps = (state) => {
  return {
    ...state,
    numbersReached: state.playersList.length >= 10// For five-a-side
  };
};

export default connect(mapStateToProps)(NumbersReached);