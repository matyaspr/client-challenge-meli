import { Link } from 'react-router-dom'
import freeShippingIcon from '../../assets/img/shipping.png'
import defaultImage from '../../assets/img/default.png'
import style from './style.module.scss'

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

type ProductCardProps = {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { picture, title, price, free_shipping, id, address } = product
  return (
    <article className={style.productCard}>
      <div className={style.imgContainer}>
        <img src={picture || defaultImage} alt={title} />
      </div>

      <div className={style.productInfo__container}>
        <div className={style.productInfo}>
          <p className={style.product__price}>${price.amount.toLocaleString('es-AR')}</p>
          {free_shipping && (
            <span className={style.product__shipping}>
              <img src={freeShippingIcon} alt='Envío gratis' />
            </span>
          )}
          <h2 className={style.product__title}>
            <Link to={`/items/${id}`}>
              <span aria-hidden='true'></span>
              {title}
            </Link>
          </h2>
        </div>

        <p className={style.product__address}>{address}</p>
      </div>
    </article>
  )
}
