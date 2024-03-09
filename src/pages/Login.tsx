import React from 'react';
import axios from 'axios';
import CustomLayout from '../layouts/CustomLayout';
import { Button, Checkbox, Form, type FormProps, Input, message } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
  console.log('Success:', values);
  const jsonData = {
    username: values.username,
    password: values.password,
  };
  try {
    const response = await axios.post('http://127.0.0.1:4000/auth/login', jsonData);

    console.log('Login successful:', response.data);
  } catch (error) {
    console.error('Error signing up:', error);
    message.error('Login failed. Please try again.');
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login: React.FC = () => (
  <CustomLayout>
    <Form
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      style={{ maxWidth: 2200, width: '40%' ,margin: '1%' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ span: 24 }} style={{ textAlign: 'center' }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'center' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </CustomLayout>
);

export default Login;