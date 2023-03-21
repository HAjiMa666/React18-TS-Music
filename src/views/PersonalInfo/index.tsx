import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Avatar } from 'antd'
import { PersonInfoWrapper } from './style'
import LoginModal from './components/LoginModal'
import { NotLogin } from '@/assets/imgs'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchLoginStatus } from '@/store/common'
interface IProps {
  children?: ReactNode
}

const PersonalInfo: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { loginStatus } = useAppSelector((state) => ({
    loginStatus: state.common.loginStatus
  }))

  useEffect(() => {
    const cookie = localStorage.getItem('cookie')
    if (cookie) {
      dispatch(fetchLoginStatus(cookie))
    }
    console.log('登陆状态', loginStatus)
  }, [])

  return (
    <PersonInfoWrapper className="personInfoWrapper">
      {loginStatus.profile === null ? (
        <>
          <NotLogin width={400} />
          <LoginModal
            getLoginStatus={() => {
              const cookie = localStorage.getItem('cookie')
              if (cookie) dispatch(fetchLoginStatus(cookie))
            }}
          />
        </>
      ) : (
        <>
          <div className="personalInfo">
            <Avatar src={loginStatus.profile?.avatarUrl} className="avatar" />
            <div className="info">
              <div className="nickName">{loginStatus.profile?.nickname}</div>
              <div className="underline"></div>
              <div className="signature">
                <label htmlFor="nickName">个性签名：</label>
                {loginStatus.profile?.signature}
              </div>
            </div>
          </div>
        </>
      )}
    </PersonInfoWrapper>
  )
}

export default memo(PersonalInfo)
