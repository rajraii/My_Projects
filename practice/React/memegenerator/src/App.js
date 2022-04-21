import Navbar from "./components/Navbar";
import Form from './components/Form'
import './style.css'
function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main">
        <Form />
      </div>
    </div>
  );
}

export default App;
