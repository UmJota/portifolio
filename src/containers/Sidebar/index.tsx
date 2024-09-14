import Avatar from '../../components/Avatar'
import Title from '../../components/Title/index'
import Text from '../../components/Text'

import { Description, ButtonTheme, SidebarContainer } from './styles'

type Props = {
  trocaTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Jota</Title>
      <Text type="secundario" fontSize={16}>
        UmJota
      </Text>
      <Description type="principal" fontSize={12}>
        Engenheiro Front-End
      </Description>
      <ButtonTheme onClick={props.trocaTheme}>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
