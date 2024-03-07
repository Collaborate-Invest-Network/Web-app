import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, message, DatePicker, Space} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { DatePickerProps } from 'antd';
import CustomLayout from '../layouts/CustomLayout';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const customFormat: DatePickerProps['format'] = (value) =>
  `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat: DatePickerProps['format'] = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`;

type FieldType = {
  firstname?: string;
  lastname?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
  address?: string;
  phone?: string;
  birthday?: string;
}

const Signup: React.FC = () => {
  const onFinish = async (values: any) => {
    console.log('Form values:', values);
    const { confirmPassword, birthday, ...userData } = values;

  if (userData.password !== confirmPassword) {
    message.error('Password and Confirm Password do not match');
    return;
  }

  // Extract day, month, and year from the birthday Date object
  const birthdayDate = birthday.toDate();
  const day = birthdayDate.getDate();
  const month = birthdayDate.getMonth() + 1;
  const year = birthdayDate.getFullYear();

  const jsonData = {
    email: userData.email,
    phone: userData.phone,
    firstname: userData.firstname,
    lastname: userData.lastname,
    birthday: {
      day,
      month,
      year,
    },
    address: userData.address,
    username: userData.username,
    password: userData.password,
  };

  try {
    // Send the JSON data to your backend using axios.post
    const response = await axios.post('http://127.0.0.1:4000/auth/signup', jsonData);

    console.log('Signup successful:', response.data);
  } catch (error) {
    console.error('Error signing up:', error);
    message.error('Signup failed. Please try again.');
  }
};

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
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
          label="Firstname"
          name="firstname"
          rules={[{required: true, message: 'Please input your firstname!'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Lastname"
          name="lastname"
          rules={[{required: true, message: 'Please input your lastname!'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{required: true, message: 'Please input your username!'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{required: true, message: 'Please input your password!'}]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item<FieldType>
          label="ConfirmPassword"
          name="confirmPassword"
          rules={[{required: true, message: 'Please confirm your password!'}]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{required: true, message: 'Please input your email!'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Address"
          name="address"
          rules={[{required: true, message: 'Please input your address!'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Phone"
          name="phone"
          rules={[{required: true, message: 'Please input your phone number!'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Birthday"
          name="birthday"
          rules={[{required: true, message: 'Please input your birthday!'}]}
        >
          <Space direction="vertical" size={20}>
            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />

          </Space>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'center' }}>
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Form.Item>
    </Form>
    </CustomLayout>
  );
};

export default Signup;
