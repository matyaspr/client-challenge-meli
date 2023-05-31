import React from 'react'
import { SinglePageLayout } from '../../components/SinglePageLayout'
import { Head } from '@/components/Head'
import { ShoppingImage } from './ShoppingImage'

export const Home: React.FC = () => (
  <>
    <Head title='Inicio | Mercado Libre' />
    <SinglePageLayout>
      <ShoppingImage />
      <h2>Challenge Mercado Libre</h2>
    </SinglePageLayout>
  </>
)
