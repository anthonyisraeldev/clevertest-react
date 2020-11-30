import React from 'react'
import { Tag } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import './UserSelected.scss';

const UserSelected = ({ item }) => {
  const { email, apellido, nombre, id } = item;
  return (
    <Tag
      className="user-info"
      color="blue"
    >
      <UserOutlined className="user-info__icon"/>
      <span className="user-info__text">
        Email: { email }
      </span>

      <span className="user-info__text">
        LastName: { apellido }
      </span>

      <span className="user-info__text">
        Name: { nombre }
      </span>

      <span className="user-info__text">
        Id: { id }
      </span>
  </Tag>

  )
}

export default UserSelected
