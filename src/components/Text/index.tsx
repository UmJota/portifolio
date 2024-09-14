import { P } from './styles'

export type Props = {
  children: string
  type?: 'principal' | 'secundario'
  fontSize?: number
}

const Text = ({ children, type = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
)

export default Text
