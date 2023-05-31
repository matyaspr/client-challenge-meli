import React from 'react'
import { ProductCard } from '../ProductCard'
import { Item } from '@/types/Item'

type Product = {
  picture: string
  title: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  free_shipping: boolean
  id: string
  address: string
}

type ProductsContainerProps = {
  arrayProd: Item[]
}

export const ProductsContainer: React.FC<ProductsContainerProps> = ({ arrayProd }) => {
  return (
    <main>
      {arrayProd.map(prod => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </main>
  )
}
