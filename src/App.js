import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import EroorPage from './pages/EroorPage';
import Login from './pages/Login';
import MovieDetails from './pages/MovieDetails';


function App() {
  let isAdmin = true
  return (
    <div className="App">
      <Navigation isAdmin={isAdmin} />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/features" element={ <Features /> } />
          { isAdmin ? <Route path="/pricing" element={ <Pricing /> } /> : null}

          <Route path="/login" element={ <Login /> } />

          <Route path="/MovieDetails/:id" element={ <MovieDetails /> } />

          <Route path="/*" element={ <EroorPage /> } />
        </Routes>
        
    </div>
  );
}

export default App;
