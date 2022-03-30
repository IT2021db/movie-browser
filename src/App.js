import { Container } from './Component/Container';
import { Header1, Header2, Poster } from './Component/Header';
import {
  Content, Image, Tile, Title, Year, Tags, Tag,
  Description, TagImage, TagRate, TagScore, TagInfo, TagInside
} from './Component/Tile';
import poster from "./imiges/poster.png";
import posterBig from "./imiges/poster-big.jpg";
import star from "./imiges/star.svg"
import { Component } from './Component';

function App() {
  return (
    <Component>
      <Header2 />
      <Header1>
        <Poster src={posterBig} alt="" />
      </Header1>
      <Container>
        <Tile >
          <Image src={poster} alt="" />
          <Content>
            <Title> MULAN </Title>
            <Year>2020</Year>
            <Tags>
              <TagInfo>Production:</TagInfo>
              <TagInside>China, United State of America</TagInside>
            </Tags>
            <Tags>
              <TagInfo>Release date:</TagInfo>
              <TagInside>24.10.2020</TagInside>
            </Tags>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Adventure</Tag>
              <Tag>Drama</Tag>
            </Tags>
            <Tags>
              <TagImage src={star}></TagImage>
              <TagRate> 7,8</TagRate>
              <TagScore>/10</TagScore>
              <TagScore>335 votes</TagScore>
              <Tags />
              <Description>
                A young Chinese maiden disguises herself as a male warrior in order to save her father.
                Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
              </Description>
            </Tags>
          </Content>
        </Tile>
      </Container>
    </Component>
  );
}

export default App;
