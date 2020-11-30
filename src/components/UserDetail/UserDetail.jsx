import React from 'react'
import UserSelected from '../UserSelected/UserSelected'
import './UserDetail'

const UserDetail = ({ user }) => {
  return (
    <div>
      {user.map((item) =>  (
        <UserSelected key={ item.id } item={ item }/>
      ))}
    </div>
  )
}

export default UserDetail
