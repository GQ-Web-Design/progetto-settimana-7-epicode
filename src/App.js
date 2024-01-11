
import { Container, Row } from 'react-bootstrap';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import TitlePage from './components/TitlePage';
import FirstComp from './components/FirstComp';
import SecondComp from './components/SecondComp';
import ThirdComp from './components/ThirdComp';
import GalleryComp from './components/GalleryComp';



function App() {
  return (
    <>
      <MyNav />
      <Container fluid>
        <Row>
          <TitlePage />
        </Row>
        <Row>
          <FirstComp />
          <GalleryComp/>
        </Row>
        <Row>
          <SecondComp />
          <GalleryComp/>
        </Row>
        <Row>
          <ThirdComp />
          <GalleryComp/>
        </Row>
      </Container>
      <MyFooter/>
    </>
  );
}

export default App;
