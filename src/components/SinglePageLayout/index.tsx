import React, { ReactNode } from 'react'

import style from './style.module.scss'

interface SinglePageLayoutProps {
  children: ReactNode
}

export const SinglePageLayout: React.FC<SinglePageLayoutProps> = ({ children }) => {
  return (
    <main className={style.flex}>
      <div className={style.flexContainer}>{children}</div>
    </main>
  )
}
