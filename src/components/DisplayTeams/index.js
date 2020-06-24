import { connect } from "react-redux";
import DisplayTeams from "./DisplayTeams";

const mapStateToProps = (state) => {
  return {
    playersList: state.playersList,
  };
};
export default connect(mapStateToProps)(DisplayTeams);