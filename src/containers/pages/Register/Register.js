import React, { useState } from 'react';
import { Row, Col, Button, Form, Input, Divider, message, notification, Upload, Select } from "antd";
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons";
import axios from "../../../config/axios";
import { BASE_BACKEND_URL } from '../../../config/constants';
import { withRouter } from "react-router-dom";

const { Option } = Select

const layout = {
  labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 5, xxl: 5 },
  wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 19, xxl: 19 },
};

function Register(props) {
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState("")

  const onFinish = ({ username, password, email, fname, lname, phone_number, role }) => {

    const name = [...fname.charAt(0).toUpperCase() + fname.slice(1), ' ', ...lname.charAt(0).toUpperCase() + lname.slice(1)].join('')
    axios.post("/user/register", {
      username, password, name, phone_number, email, role, profile_url: fileName, isConfirmed: false
    })
      .then(res => {
        notification.success({
          description: "Signup successfully"
        });
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        notification.error({
          description: "Signup Failed"
        });
      });
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <InboxOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
      <div>Avatar</div>
    </div>
  );

  const propsUpload = {
    name: 'img',
    multiple: false,
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: false,
    action: `${BASE_BACKEND_URL}/upload/`,
    onChange(info) {
      const { status } = info.file;
      console.log(info.file, info.fileList);
      if (status === 'uploading') {
        setLoading(true)
      }
      if (status === 'done') {
        setLoading(false)
        setImageUrl(`${BASE_BACKEND_URL}/${info.file.response.url}`)
        setFileName(info.file.response.url);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        setLoading(false)
      }
    },
  };

  return (
    <Row justify="center">
      <Col span={16} className="Form">
        <Row justify="center">
          <img style={{ maxHeight: "132px", margin: "50px" }} src="https://i.imgur.com/4TeZqYS.png" alt="logo" />
        </Row>
        <Divider />
        <Row>
          <Form
            style={{ width: "100%", padding: "20px" }}
            {...layout}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Upload {...propsUpload}>
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="email"
              label={
                <span>
                  Email Address&nbsp;
                </span>
              }
              rules={[{ required: true, type: 'email', message: 'Please input your email address!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="fname"
              label={
                <span>
                  First Name&nbsp;
                </span>
              }
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="lname"
              label={
                <span>
                  Last Name&nbsp;
                </span>
              }
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone_number"
              label={
                <span>
                  Phone Number&nbsp;
                </span>
              }
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input minLength={9} maxLength={10} />
            </Form.Item>

            <Form.Item
              name="role"
              label={
                <span>
                  Role&nbsp;
                </span>
              }
              rules={[{ required: true, message: 'Please choose your role!' }]}
            >
              <Select placeholder="Select Role" style={{ display: 'flex', width: 120 }}>
                <Option value="customer">Customer</Option>
                <Option value="restaurant">Restaurant</Option>
                <Option value="kitchen">Kitchen</Option>
                <Option value="admin">Admin</Option>
              </Select>
            </Form.Item>
            <Row justify="center" style={{ marginTop: "10px" }}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Row>
          </Form>
        </Row>
      </Col>
    </Row>
  );
}

export default withRouter(Register);