import React, { memo, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Modal, Form, Input, Tabs, message } from 'antd'
import { LoginModalWrapper, PersonInfoWrapper } from './style'
import {
  getQRCodeKey,
  getQRCodeImg,
  checkIsScanQRCode
} from './services/personInfo'
import { QRCodeSVG } from 'qrcode.react'
interface IProps {
  children?: ReactNode
}

const PersonalInfo: FC<IProps> = () => {
  const [loginModal, setLoginModal] = useState(false)
  const [qrKey, setQRKey] = useState('')
  const [qrUrl, setQRUrl] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      checkIsScanQRCode(qrKey).then((res) => {
        if (res.code === 803) {
          document.cookie = res.cookie
          clearInterval(timer)
          message.success('登录成功')
        }
      })
    }, 3000)
    return () => {
      console.log('清除')
      clearInterval(timer)
    }
  }, [qrUrl])

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
          className="loginModal"
          footer={null}
          getContainer={() =>
            document.querySelector('.loginModalWrapper') as HTMLDivElement
          }
        >
          <Tabs
            onTabClick={(activeKey) => {
              if (activeKey === '2') {
                getQRCodeKey().then((res) => {
                  const key = res.data.unikey
                  setQRKey(key)
                  getQRCodeImg(key).then((res) => {
                    console.log(res.data)
                    const qrUrl = res.data.qrurl
                    setQRUrl(qrUrl)
                  })
                })
              }
            }}
            items={[
              {
                label: '账号密码登录',
                key: '1',
                children: (
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
                )
              },
              {
                label: '扫码登录',
                key: '2',
                children: (
                  <div style={{ textAlign: 'center' }}>
                    <QRCodeSVG value={qrUrl} level="H" size={200} />
                  </div>
                )
              }
            ]}
          ></Tabs>
        </Modal>
      </LoginModalWrapper>
    </PersonInfoWrapper>
  )
}

export default memo(PersonalInfo)
