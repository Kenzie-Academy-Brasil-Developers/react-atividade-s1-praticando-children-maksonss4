import './App.css';
import CenteredCard from './components/CenteredCard';

function App() {
  return (
    <div className="App">
      <CenteredCard> <h1>HTML</h1> </CenteredCard>
      <CenteredCard> <h1>CSS</h1> </CenteredCard>
      <CenteredCard> <h1>JavaScript</h1> </CenteredCard>
      <CenteredCard> <h1>React</h1> </CenteredCard>
    </div>
  );
}

export default App;
