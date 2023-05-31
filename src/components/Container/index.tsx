import React, { ReactNode } from 'react'

import style from './style.module.scss'

interface ContainerProps {
  children?: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>
}
