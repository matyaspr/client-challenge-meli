import style from './style.module.scss'

type ParagraphsProps = {
  string: string
}

const Paragraphs: React.FC<ParagraphsProps> = ({ string }) => {
  const arr = string
    .split('\n')
    .filter(el => !!el)
    .map((el, i) => (
      <p key={i} className={style.paragraph} data-testid={`test-${i}`}>
        {el}
      </p>
    ))

  return <>{arr}</>
}

export default Paragraphs
