import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { ModelHeadWrapper } from './style'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'

interface ModelHeadProps {
  title: ReactNode
  link: string
}
const ModelHead: FC<ModelHeadProps> = memo((props) => {
  const { title, link } = props
  return (
    <ModelHeadWrapper>
      <div className="title">{title}</div>
      <Link to={link} className="more">
        <span>更多</span>
        <RightOutlined />
      </Link>
    </ModelHeadWrapper>
  )
})

export default ModelHead
