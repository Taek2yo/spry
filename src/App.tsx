import './App.css';
import GraphOne from './GraphOne';
import GraphThree from './GraphThree';
import GraphTwo from './GraphTwo';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <GraphTwo />
      <GraphOne />
      <GraphThree />
    </div>
  );
}

export default App;
