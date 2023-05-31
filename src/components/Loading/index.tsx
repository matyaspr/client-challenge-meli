import { SinglePageLayout } from '../SinglePageLayout'
import { Spinner } from '../Spinner'

type LoadingProps = {
  text?: string
}

export const Loading: React.FC<LoadingProps> = ({ text }) => {
  return (
    <SinglePageLayout>
      <Spinner text={text} />
    </SinglePageLayout>
  )
}
