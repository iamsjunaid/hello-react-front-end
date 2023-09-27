import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Greeting />} />
    </Routes>
  </Router>
);

export default App;
