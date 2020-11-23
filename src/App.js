import './App.css';
import React, { useEffect } from "react";
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
import { connect } from 'react-redux'
import { setupSocket } from './store/actions';

function App(props) {
  const { onSetupSocket } = props

  useEffect(() => {
    onSetupSocket()
    return () => {

    }
  }, []);

  return (
    <div className="App">
      <PrivateRoutes />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSetupSocket: () => dispatch(setupSocket()),
  }
}

export default connect(null, mapDispatchToProps)(App);
