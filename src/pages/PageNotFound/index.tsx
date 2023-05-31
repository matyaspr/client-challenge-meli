import React from 'react'
import { Link } from 'react-router-dom'

// import { Head } from '@/components/Head'
import { SinglePageLayout } from '@/components/SinglePageLayout'
import { NotFoundImage } from './NotFoundImage'

export const PageNotFound: React.FC = () => {
  return (
    <>
      {/* <Head title='Página no encontrada | Mercado Libre' /> */}
      <SinglePageLayout>
        <NotFoundImage />
        <h2>La página a la que intentas ingresar no existe</h2>
        <p>
          Revisa posibles errores de tipeo o <Link to='/'>vuelve al inicio</Link>.
        </p>
      </SinglePageLayout>
    </>
  )
}
