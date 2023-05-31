import style from './style.module.scss'
import { Logo } from '../Logo'
import { Container } from '../Container'
import { Searchbar } from '../Searchbar'

export const NavBar: React.FC = () => {
  return (
    <nav className={style.navbar}>
      <Container>
        <Logo />
        <Searchbar />
      </Container>
    </nav>
  )
}
