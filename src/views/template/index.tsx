/*
 * @Author: czx
 * @Date: 2022-11-29 08:18:43
 * @LastEditTime: 2022-11-29 08:21:21
 * @LastEditors: czx
 * @Description: React+TS模板
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Template: FC<IProps> = () => {
  return <>模板</>
}

export default memo(Template)
