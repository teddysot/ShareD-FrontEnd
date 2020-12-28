import './App.css';
import React, { useEffect } from "react";
import { connect } from 'react-redux'
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
import { setupSocket, setUser } from './store/actions';
import LocalStorageService from './services/LocalStorageService'
import axios from './config/axios'

function App(props) {
  const { onSetupSocket, onSetUser } = props

  useEffect(() => {
    onSetupSocket()
    getUserInfo(onSetUser)
    return () => {

    }
  }, []);

  return (
    <div className="App">
      <PrivateRoutes />
    </div>
  );
}

const getUserInfo = (onSetUser) => {
  const token = LocalStorageService.getToken()
  if (token) {
    axios.get("/user/getinfo")
      .then(res => {
        const { user } = res.data
        onSetUser(user)
      })
      .catch(err => {
        console.log("Error");
      })
  }
  else {
    console.log("Error2");
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetupSocket: () => dispatch(setupSocket()),
    onSetUser: (value) => dispatch(setUser(value))
  }
}

export default connect(null, mapDispatchToProps)(App);
