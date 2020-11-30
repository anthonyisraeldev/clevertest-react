import React, { useContext, useRef } from 'react'
import { Modal, Button, Form, notification } from 'antd'
import { CloseOutlined } from '@ant-design/icons';
import { UserListContext } from '../../context/UsersContext'
import shortid from 'shortid';
import './ModalAddUser.scss'


const ModalAddUser = ({ setVisible, visible, handleCancel }) => {
  const {  setSearch, saveUser } = useContext(UserListContext)
  const email = useRef(null);
  const name = useRef(null);
  const lastname = useRef(null);

  // SUCCESS NOTIFICATION
  const openNotification = () => {
    notification.open({
      message: 'Notification',
      description:
        'User save successfully',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      const newUser = {
        "email": email.current.value,
        "apellido": lastname.current.value,
        "nombre": name.current.value,
        "id": shortid.generate(),
      }
      saveUser(newUser)
      setSearch([]);
      setVisible(false);
      openNotification();
      e.currentTarget.reset();
  }

  return (
    <div>
      <Modal
        className="modal-add-user"
        title="Add user"
        visible={ visible }
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        >
          <CloseOutlined onClick={ handleCancel } className="modal-add-user__close-modal" />
          <form className="form-add-user"  onSubmit={ handleSubmit } >
            <Form.Item className="form-item">
              <label className="form-item__label">User name</label>
              <input
                ref={ name }
                type="text"
                placeholder="User name"
                className="form-item__input"
                required
              />
            </Form.Item>

            <Form.Item className="form-item">
              <label className="form-item__label">Last name</label>
              <input
                ref={ lastname }
                placeholder="Last name"
                type="text"
                className="form-item__input"
                required
              />
            </Form.Item>

            <Form.Item className="form-item">
              <label className="form-item__label">Email</label>
              <input
                ref={ email }
                type="text"
                placeholder="Email"
                className="form-item__input"
                required
              />
            </Form.Item>
            <Button type="submit" className="btn-save-user" htmlType="submit">
              Save user
            </Button>
          </form>
        </Modal>
    </div>
  )
}

export default ModalAddUser
