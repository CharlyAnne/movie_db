import './App.css';
import Home from '../HomePage/SplashScreen';
// import Search from '../Search/Search';
// import Movies from './component/Movies/Movies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={Home} />
          {/* <Route path="/search" component={Search} />
        <Route path="/movies/:id" component={Movies} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
