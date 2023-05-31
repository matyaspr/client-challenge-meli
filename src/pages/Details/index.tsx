import { useParams } from 'react-router-dom'
import { Loading } from '@/components/Loading/index.js'
import { Error } from '@/components/Error/index.js'
import { ProductNotFound } from '@/components/ProductNotFound/index.js'
import { ProductDetail } from '@/components/ProductDetails/index.js'
import { Breadcrumbs } from '@/components/Breadcrumbs/index.js'
import { ItemDescription, Items } from '@/types/ItemDescription'
import { useFetch } from '@/hooks/useFetch'
import { Head } from '@/components/Head'

export const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const fetchState = useFetch<ItemDescription>(`/api/items/${id}`)

  if (fetchState.state === 'loading' || fetchState.state === 'idle') return <Loading text='Buscando...' />
  if (fetchState.state === 'error') return <Error />
  if (fetchState.state === 'not_found') return <ProductNotFound />

  const { items, categories }: { items: Items; categories: string[] } = fetchState.result

  return (
    <>
      <Head title='Detalles del producto | Mercado Libre' />
      {categories.length > 0 && <Breadcrumbs breadcrumbs={categories} />}
      {items.id ? <ProductDetail product={items} /> : null}
    </>
  )
}
