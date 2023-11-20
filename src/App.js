import './index.css';
import Panel from './components/Panel';

function App() {
  return (
    <div className="App">
      <Panel letter="A" color="rgba(0, 0, 255, 0.494)"/>
      <Panel letter="B" color="rgba(255, 0, 0, 0.494)"/>
      <Panel letter="C" color="rgba(0, 128, 0, 0.494)"/>
      <Panel letter="D" color="rgba(255, 192, 203, 0.494)"/>
      <Panel letter="E" color="rgba(255, 255, 0, 0.494)"/>
    </div>
  );
}

export default App;
