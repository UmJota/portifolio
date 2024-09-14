import { P } from './styles'

export type Props = {
  children: string
  type?: 'principal' | 'secundario'
}

const Text = ({ children, type = 'principal' }: Props) => (
  <P type={type}>{children}</P>
)

export default Text
