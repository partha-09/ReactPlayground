import PropTypes from "prop-types";
function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.username}</h2>;
  //   } else {
  //     return <h2>Please Login to continue</h2>;
  //   }
  return props.isLoggedIn ? (
    <h2 className="wel-message">Welcome {props.username}</h2>
  ) : (
    <h2 className="login-prompt">Please Login to continue</h2>
  );
}
UserGreeting.propType = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;
