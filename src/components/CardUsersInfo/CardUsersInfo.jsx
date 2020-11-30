import React from 'react'
import { Card } from 'antd'
import UserDetail from '../UserDetail'

const CardUsersInfo = ({ user }) => {
  return (
    <Card title="Users info" bordered={false}>
      <UserDetail user={ user }/>
    </Card>
  )
}

export default CardUsersInfo
