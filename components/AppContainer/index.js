import { connect } from "react-redux";
import AppContainer from "./presenter";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedin: user.isLoggedin
  };
};

export default connect(mapStateToProps)(AppContainer);
