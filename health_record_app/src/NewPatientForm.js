// This is the form for new patient intake
import React from 'react';
import { Form, Input, Button } from 'antd';

function NewPatientForm() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name='new_patient_form' onFinish={onFinish}>
      <Form.Item name='first_name' label='First Name' rules={[{ required: true }]}> 
        <Input />
      </Form.Item>
      <Form.Item name='last_name' label='Last Name' rules={[{ required: true }]}> 
        <Input />
      </Form.Item>
      <Form.Item name='date_of_birth' label='Date of Birth' rules={[{ required: true }]}> 
        <Input />
      </Form.Item>
      <Form.Item name='address' label='Address' rules={[{ required: true }]}> 
        <Input />
      </Form.Item>
      <Form.Item name='phone_number' label='Phone Number' rules={[{ required: true }]}> 
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default NewPatientForm;