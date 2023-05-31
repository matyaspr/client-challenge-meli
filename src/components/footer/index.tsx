import { Container } from '../Container'
import style from './style.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <p>{' Matias Primo '}</p>
      </Container>
    </footer>
  )
}
