import style from './style.module.scss'

type SpinnerProps = {
  text?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ text = '' }) => {
  return (
    <>
      <div className={style.spinner} data-testid='spinner'></div>
      {text && <h2 className={style.spinnerText}>{text}</h2>}
    </>
  )
}
