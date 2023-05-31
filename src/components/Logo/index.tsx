import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'
import logo from '@/assets/img/logo.png'

export const Logo: React.FC = () => {
  return (
    <div className={style.logoContainer}>
      <Link to='/' aria-label='Volver al inicio' className={style.logo}>
        <img src={logo} alt='Logo Mercado Libre' />
      </Link>
    </div>
  )
}
