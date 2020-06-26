import { connect } from "react-redux";
import DisplayTeams from "./DisplayTeams";

const mapStateToProps = (state) => {
  return {
    playersList: state.playersList,
    teamA: state.teamA,
    teamB: state.teamB
  };
};

export default connect(mapStateToProps)(DisplayTeams);