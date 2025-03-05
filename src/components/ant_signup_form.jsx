import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const AntSignupForm = ({ registerUser }) => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
        remember: true,
    }}
    onFinish={registerUser}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
            {
                type: 'email',
                message: 'Email is not valid!',
            }
          ]}
        >
          <Input />
        </Form.Item>
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default AntSignupForm;