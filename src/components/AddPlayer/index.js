import { connect } from "react-redux";
import AddPlayer from "./AddPlayer";
import { addPlayer } from "../../data/actions";
import { reset } from "../../data/actions";

const mapStateToProps = (state) => {
  return {
    playerName: state.playerName,
    numbersReached: state.numbersReached
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleReset: () => dispatch(reset()),
    handleSubmit: (data) => dispatch(addPlayer(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);