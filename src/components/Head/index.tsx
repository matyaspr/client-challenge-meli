import React from 'react'
import { Helmet } from 'react-helmet-async'

type HeadProps = {
  title: string
}

export const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel='icon' href='/logo.png' type='image/x-icon' />
      <meta name='description' content='Challenge Mercado Libre.' />
      <meta name='keywords' content='Mercado Libre, React, Front-end, TypeScript' />
      <meta name='author' content='Matias Primo' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#ffe600' />
    </Helmet>
  )
}
