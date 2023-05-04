// This is the component for displaying patient records
import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Date of Birth',
    dataIndex: 'date_of_birth',
    key: 'date_of_birth',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
];

const data = [
  {
    key: '1',
    first_name: 'John',
    last_name: 'Doe',
    date_of_birth: '01/01/1970',
    address: '123 Main St',
    phone_number: '555-555-5555',
  },
  {
    key: '2',
    first_name: 'Jane',
    last_name: 'Doe',
    date_of_birth: '01/01/1975',
    address: '456 Elm St',
    phone_number: '555-555-5555',
  },
];

function PatientRecords() {
  return (
    <Table columns={columns} dataSource={data} />
  );
}

export default PatientRecords;