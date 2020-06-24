import { connect } from "react-redux";
import ListPlayers from "./ListPlayers";

const mapStateToProps = (state) => {
  return {
    playersList: state.playersList,
  };
};
export default connect(mapStateToProps)(ListPlayers);