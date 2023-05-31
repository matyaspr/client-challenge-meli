import React from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ProductsContainer } from '@/components/ProductsContainer'
import { Loading } from '@/components/Loading'
import { Error } from '@/components/Error'
import { ProductNotFound } from '@/components/ProductNotFound'
import { Items, Result } from '@/types/ItemDescription'
import { Head } from '@/components/Head'
import { useFetch } from '@/hooks/useFetch'

export const SearchResults: React.FC = () => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const query = params.get('search')

  const fetchState = useFetch<Result>(`/api/items?q=${query}`)

  if (fetchState.state === 'loading' || fetchState.state === 'idle') {
    return <Loading text='Buscando...' />
  }

  if (fetchState.state === 'error') {
    return <Error />
  }

  if (fetchState.state === 'not_found') {
    return <ProductNotFound />
  }

  const { categories, items }: { categories: string[]; items: Items[] } = fetchState.result

  return (
    <>
      <Head title={`Resultados de ${query || 'tu búsqueda'} | Mercado Libre`} />
      {categories.length > 0 && <Breadcrumbs breadcrumbs={categories} />}
      {items.length > 0 && <ProductsContainer arrayProd={items} />}
      asd
    </>
  )
}
