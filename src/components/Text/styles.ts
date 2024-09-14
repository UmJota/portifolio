import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  color: ${(props) => (props.type === 'principal' ? '#282a35' : '#949494')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: 700;
  line-height: 22px;
`
