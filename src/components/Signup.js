import React from "react";
import { signup } from "../state/actionCreator";
import { connect } from "react-redux";

function Signup(props) {
  return (
    <div className="App">
      <h1>Oya Signup</h1>
      <input type="text" />
      <button>Submit</button>
    </div>
  );
}

// export default Signup;

const mapStateToProps = (store) => {
  return {
    loading: store.auth.loading,
    token: store.auth.token,
    error: store.auth.error
  }
};

const mapDispatchToProps = {
  register: signup
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);