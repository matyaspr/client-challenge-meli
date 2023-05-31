import { SinglePageLayout } from '../SinglePageLayout'
import { ErrorImage } from './ErrorImage'

export const Error: React.FC = () => {
  return (
    <SinglePageLayout>
      <ErrorImage />
      <h2>Ocurrió un error</h2>
      <p>Por favor vuelve a intentarlo.</p>
    </SinglePageLayout>
  )
}
