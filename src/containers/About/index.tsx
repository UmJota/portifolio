import Text from '../../components/Text'
import Title from '../../components/Title'
import { GitHubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Text type="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veritatis
      amet temporibus molestiae blanditiis incidunt optio impedit atque
      consectetur repudiandae vitae quasi ipsa corporis dolorum asperiores
      harum, vero fugit labore?
    </Text>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=UmJota&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=UmJota&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default About
