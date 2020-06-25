import { connect } from "react-redux";
import DisplayTeams from "./DisplayTeams";

const mapStateToProps = (state) => {
  return {
    teamA: state.teamA,
    teamB: state.teamB
  };
};

export default connect(mapStateToProps)(DisplayTeams);