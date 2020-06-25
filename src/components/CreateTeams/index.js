import { connect } from "react-redux";
import CreateTeams from "./CreateTeams";
import { createTeams } from "../../data/actions";

const mapStateToProps = (state) => {
  return {
    teamA: state.teamA,
    teamB: state.teamB,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCreateTeams: (data) => dispatch(createTeams(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeams);