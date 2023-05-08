import { Container } from './App.style';
import Gallery from './Gallery/Gallery';
import Header from './Components/Header';
// import Manager from './Manager/Manager';

function App() {
  return (
    <Container>
      <Header/>
      <Gallery/>
      {/* <Manager/> */}
    </Container>
  );
}

export default App;
