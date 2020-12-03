import React, { useEffect } from 'react';
import { Button, Col, Form, Input, notification, Row } from "antd";
import axios from 'axios'
import LocalStorageService from '../../../services/LocalStorageService'
import { setupSocket, setRole } from '../../../store/actions';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Login(props) {
  const history = useHistory();

  const onFinish = ({ username, password }) => {
    axios.post('/user/login', { username, password })
      .then(res => {
        notification.success({
          description: "Login Success"
        })
        LocalStorageService.setToken(res.data.token)
        props.onSetRole("USER")
        props.onSetupSocket()
        history.push('/inputcode')
      })
      .catch(err => {
        notification.error({
          description: "Login Failed"
        })
      })
  };

  const onRegisterClick = () => {
    history.push('/register')
  }

  return (
    <Row justify="center">
      <Col xs={20} md={14} lg={9}>
        <img style={{ maxHeight: "132px", margin: "50px" }} src="https://i.imgur.com/4TeZqYS.png" alt="logo" />
        <Form
          labelCol={{ xs: 24, sm: 5, md: 4, lg: 5, xl: 5, xxl: 5 }}
          wrapperCol={{ xs: 24, sm: 19, md: 20, lg: 19, xl: 19, xxl: 19 }}
          onFinish={onFinish}
          className="Form"
          style={{ padding: "20px" }}
        >
          <Form.Item
            name="username"
            label="Username"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
          >
            <Input.Password />
          </Form.Item>
          <Row justify="center">
            <Button htmlType="submit">Login</Button>
          </Row>
        </Form>
        <Row justify="center">
          <Button onClick={onRegisterClick}>Register</Button>
        </Row>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onSetupSocket: () => dispatch(setupSocket()),
    onSetRole: (value) => dispatch(setRole(value))
  };
};

const mapStateToProps = state => {
  return {
    role: state.role.role,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);