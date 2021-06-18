import React, { useState, useCallback } from 'react';
import Alert from 'react-bootstrap/Alert';
import Collapse from 'react-bootstrap/Collapse';
import { connect, useDispatch } from 'react-redux';

function AlertComponent({ variant, text, error }) {
  // Variants Available
  /*
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    */
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const [showAlert, setShowAlert] = useState(false);

  const togglesetShowAlert = useCallback(
    bool => {
      if (!bool) {
        dispatch({ type: 'AUTH_RESET' });
      }
      setShowAlert(bool);
    },
    [dispatch]
  );

  return (
    <React.Fragment>
      {error ? (
        <Alert
          show={error}
          variant={variant}
          onClose={() => togglesetShowAlert(false)}
          dismissible
          className="w-100"
          transition={Collapse}
        >
          {text}
        </Alert>
      ) : null}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
  };
};
export default connect(mapStateToProps)(AlertComponent);
