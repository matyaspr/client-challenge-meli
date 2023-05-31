import React from 'react'
import style from './style.module.scss'

type BreadcrumbsProps = {
  breadcrumbs: string[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <ul className={style.breadcrumbs} data-testid='breadcrumbs'>
      {breadcrumbs.map(category => (
        <li key={category}>
          <a href='#0'>{category}</a>
        </li>
      ))}
    </ul>
  )
}
