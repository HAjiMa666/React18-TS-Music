import React, { memo, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  Button,
  Modal,
  Form,
  Input,
  Tabs,
  message,
  Avatar,
  Dropdown
} from 'antd'
import type { MenuProps } from 'antd'
import { LoginModalWrapper } from './style'
import {
  getQRCodeKey,
  getQRCodeImg,
  checkIsScanQRCode
} from '../../services/personInfo'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchLoginStatus } from '@/store/common'
import { QRCodeSVG } from 'qrcode.react'
import { useNavigate } from 'react-router-dom'
import { useCookie } from '@/hooks'
interface IProps {
  children?: ReactNode
  getLoginStatus: () => void
}

const PersonalInfo: FC<IProps> = (props) => {
  const [loginModal, setLoginModal] = useState(false)
  const [qrKey, setQRKey] = useState('')
  const [qrUrl, setQRUrl] = useState('')
  const { getLoginStatus } = props
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const cookie = useCookie()
  const { loginStatus } = useAppSelector((state) => ({
    loginStatus: state.common.loginStatus
  }))
  const dropDownItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Button
          onClick={() => {
            navigate('/personalInfo')
          }}
        >
          个人中心
        </Button>
      )
    },
    {
      key: '2',
      label: <Button>退出登录</Button>
    }
  ]

  const handleQRCodeUrl = () => {
    getQRCodeKey().then((res) => {
      const key = res.data.unikey
      setQRKey(key)
      getQRCodeImg(key).then((res) => {
        const qrUrl = res.data.qrurl
        setQRUrl(qrUrl)
      })
    })
  }

  useEffect(() => {
    handleQRCodeUrl()
  }, [])

  useEffect(() => {
    if (!cookie) return
    dispatch(fetchLoginStatus(cookie))
  }, [cookie])

  useEffect(() => {
    if (!loginModal) return
    const timer = setInterval(() => {
      checkIsScanQRCode(qrKey).then((res) => {
        if (res.code === 803) {
          localStorage.setItem('cookie', res.cookie)
          message.success('登录成功')
          clearInterval(timer)
          setLoginModal(false)
          getLoginStatus()
          const cookie = localStorage.getItem('cookie')
          if (cookie) dispatch(fetchLoginStatus(cookie))
        }
      })
    }, 3000)
    return () => {
      clearInterval(timer)
    }
  }, [loginModal])

  return (
    <LoginModalWrapper className="loginModalWrapper">
      <div className="loginInfo">
        <Dropdown
          menu={{ items: dropDownItems }}
          disabled={!loginStatus.profile?.avatarUrl}
        >
          <Avatar
            onClick={() => {
              if (loginStatus.profile) return
              setLoginModal(true)
            }}
            size="large"
            src={loginStatus.profile?.avatarUrl}
          >
            未登录
          </Avatar>
        </Dropdown>
      </div>

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
            if (activeKey === '1') handleQRCodeUrl()
          }}
          items={[
            {
              label: '扫码登录',
              key: '1',
              children: (
                <div style={{ textAlign: 'center' }}>
                  <QRCodeSVG value={qrUrl} level="H" size={200} />
                </div>
              )
            },
            {
              label: '账号密码登录',
              key: '2',
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
                    label="手机号"
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
            }
          ]}
        ></Tabs>
      </Modal>
    </LoginModalWrapper>
  )
}

export default memo(PersonalInfo)
