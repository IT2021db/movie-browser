import { Container } from './Component/Container';
import { Content, Image, Tile, Title, Year, Tags, Tag, Description } from './Component/Tile';
import poster from "./imiges/poster.png";
import star from "./imiges/star.svg"

function App() {
  return (
    <Container>
      <Tile >
        <Image src={poster} alt="" />
        <Content>
          <Title> MULAN </Title>
          <Year>2020</Year>
          <Tags>
            <Tag>Action</Tag>
            <Tag>Adventure</Tag>
            <Tag>Drama</Tag>
            <Tags />
            <Description>
              A young Chinese maiden disguises herself as a male warrior in order to save her father.
              Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
            </Description>
          </Tags>
        </Content>
      </Tile>
    </Container>
  );
}

export default App;
