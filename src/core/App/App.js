import { Container } from "../../common/Container";
import { Header1, Header2, Poster } from '../../common/Header';
import {
  TileContent, TileImage, Tile, TileTitle, TileYear, TileTags, TileTag,
  TileDescription, TagImage, TagRate, TagScore, TagInfo, TagInside
} from '../../common/Tile';
import poster from "../../images/poster.png";
import posterBig from "../../images/poster-big.jpg";
import poster0 from "../../images/poster0.png";
import poster1 from "../../images/poster1.png";
import poster2 from "../../images/poster2.png";
import star from "../../images/star.svg";
import { PersonTile, PersonImage, PersonName, PersonRole } from "../../common/PersonTile";

function App() {
  return (
    <>
      <Header2 />
      <Header1>
        <Poster src={posterBig} alt="" />
      </Header1>
      <Container>
        <Tile >
          <TileImage src={poster} alt="" />
          <TileContent>
            <TileTitle> MULAN </TileTitle>
            <TileYear>2020</TileYear>
            <TileTags>
              <TagInfo>Production:</TagInfo>
              <TagInside>China, United State of America</TagInside>
            </TileTags>
            <TileTags>
              <TagInfo>Release date:</TagInfo>
              <TagInside>24.10.2020</TagInside>
            </TileTags>
            <TileTags>
              <TileTag>Action</TileTag>
              <TileTag>Adventure</TileTag>
              <TileTag>Drama</TileTag>
            </TileTags>
            <TileTags>
              <TagImage src={star}></TagImage>
              <TagRate> 7,8</TagRate>
              <TagScore>/10</TagScore>
              <TagScore>335 votes</TagScore>
              <TileTags />
              <TileDescription>
                A young Chinese maiden disguises herself as a male warrior in order to save her father.
                Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
              </TileDescription>
            </TileTags>
          </TileContent>
        </Tile>
      </Container>
      <Container>
        <TileTitle>Cast</TileTitle>
        <TileTags>
          <PersonTile>
            <PersonImage src={poster0} alt="" />
            <PersonName>Liu Yifei</PersonName>
            <PersonRole>Mulan</PersonRole>
          </PersonTile>
          <PersonTile>
            <PersonImage src={poster1} alt="" />
            <PersonName>Dopnnie Yen</PersonName>
            <PersonRole>Komandor Tung</PersonRole>
          </PersonTile>
          <PersonTile>
            <PersonImage src={poster2} alt="" />
            <PersonName>Jason Scott Lee</PersonName>
            <PersonRole>Böri Khan</PersonRole>
          </PersonTile>
        </TileTags>
      </Container>
    </>
  );
}

export default App;
