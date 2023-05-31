import style from './style.module.scss'

type ButtonProps = {
  text: string
  [key: string]: any
}

export const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <button {...rest} className={style.button}>
      {text}
    </button>
  )
}
