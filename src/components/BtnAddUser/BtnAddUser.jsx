import React, { useState } from 'react'
import { Button } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import './BtnAddUser.scss'
import ModalAddUser from '../ModalAddUser';

const BtnAddUser = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  };

  const handleCancel = () => {
    setVisible(false)
  };

  return (
    <div className="container-btn-add-user">
      <Button
        onClick={ showModal }
        size="large"
        className="btn-add-user"
        icon={<UserOutlined />}
      >
        Add user
      </Button>
      <ModalAddUser
        visible={ visible }
        setVisible={ setVisible }
        handleCancel={ handleCancel }
      />
    </div>
  )
}

export default BtnAddUser
