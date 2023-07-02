
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ShrinkSection from './components/ShrinkSection';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Home />} />
        {/* <Route path="/" element= {<ShrinkSection/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
