import { Button } from '../Button'
import Paragraphs from '../Paragraphs'
import { formatDecimals } from '@/utils/function'
import style from './style.module.scss'

type Price = {
  currency: string
  amount: number
  decimals: number
}

type Product = {
  condition: string
  sold_quantity: number
  title: string
  price: Price
  description: string
  picture: string
}

type ProductDetailProps = {
  product: Product
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { condition, sold_quantity, title, price, description, picture } = product

  return (
    <main className={style.productContainer}>
      <div className={style.flexContainer}>
        <div className={style.product__image}>
          <img src={picture} alt={title} />
        </div>
        <div className={style.product__info}>
          <p className={style.product__condition}>
            {condition} - {sold_quantity || '0'} {sold_quantity === 1 ? 'vendido' : 'vendidos'}
          </p>
          <h2 className={style.product__title}>{title}</h2>
          <p className={style.product__price}>
            ${price.amount.toLocaleString('es-AR')}
            <span>{formatDecimals(price.decimals)}</span>
          </p>
          <Button text='Comprar' />
        </div>
      </div>

      <div className={style.product__description}>
        <h3>Descripción del producto</h3>
        <Paragraphs string={description} />
      </div>
    </main>
  )
}
