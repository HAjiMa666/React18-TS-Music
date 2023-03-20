import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Modal, Form, Input } from 'antd'
import { LoginModalWrapper, PersonInfoWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const PersonalInfo: FC<IProps> = () => {
  const [loginModal, setLoginModal] = useState(false)
  return (
    <PersonInfoWrapper className="personInfoWrapper">
      <Button
        type="primary"
        onClick={() => {
          setLoginModal(true)
        }}
      >
        登录
      </Button>
      <LoginModalWrapper className="loginModalWrapper">
        <Modal
          open={loginModal}
          onCancel={() => {
            setLoginModal(false)
          }}
          onOk={() => {
            setLoginModal(false)
          }}
          closable={false}
          okText="登录"
          cancelText="取消"
          className="loginModal"
          getContainer={() =>
            document.querySelector('.loginModalWrapper') as HTMLDivElement
          }
        >
          <Form
            labelCol={{ span: 3 }}
            labelAlign="left"
            wrapperCol={{
              span: 20,
              offset: 1
            }}
            name="basic"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入你的用户名!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入你的密码!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </LoginModalWrapper>
    </PersonInfoWrapper>
  )
}

export default memo(PersonalInfo)
