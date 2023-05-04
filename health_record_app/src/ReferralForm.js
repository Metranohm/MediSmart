// This is the form for creating and sending referrals
import React from 'react';
import { Form, Input, Button } from 'antd';

function ReferralForm() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name='referral_form' onFinish={onFinish}>
      <Form.Item name='patient_name' label='Patient Name' rules={[{ required: true }]}> 
        <Input />
      </Form.Item>
      <Form.Item name='referring_doctor' label='Referring Doctor' rules={[{ required: true }]}> 
        <Input />
      </Form.Item>
      <Form.Item name='specialty' label='Specialty' rules={[{ required: true }]}> 
        <Input />
      </Form.Item>
      <Form.Item name='reason_for_referral' label='Reason for Referral' rules={[{ required: true }]}> 
        <Input />
      </Form.Item>
      <Form.Item name='contact_info' label='Contact Info' rules={[{ required: true }]}> 
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

export default ReferralForm;
// This is the button for sending an email to the referred doctor
<Button onClick={() => sendEmail(referral.doctorContactInfo.email, 'Referral', 'Hello, this is a referral regarding a patient.')}>Email Doctor</Button>