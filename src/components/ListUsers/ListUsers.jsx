import React from 'react'
import { Tag } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import './ListUsers.scss'

const ListUsers = ({ item, findUser }) => {
  const { nombre, id } = item;

  return (
    <Tag
      onClick={ () => findUser(id) }
      className="user-list-item"
      icon={<UserOutlined />}
      color="cyan"
      >
      { nombre }
    </Tag>
  )
}

export default ListUsers
