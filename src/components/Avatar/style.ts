import styled from 'styled-components'

export const ProfilePhoto = styled.img`
  max-width: 100%;
  height: 128px;
  border-radius: 50%;
  margin-bottom: 24px;
  border: 2px solid ${(props) => props.theme.borderColor};
`
