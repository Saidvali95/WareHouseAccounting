import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Main from './pages/Main';
import Forecast from './pages/Forecast';
import Catalog from './pages/Catalog';
import Sales from './pages/Sales';

function App() {
  return (
    <div className="App">
          
    <Navbar></Navbar>
    <Router>
    <Menu></Menu>
    <>
    <Routes>
      <Route path='/' exact={true} Component={Main} />
      <Route path='/forecast' exact={true} Component={Forecast} />
      <Route path='/catalog' exact={true} Component={Catalog} />
      <Route path='/sales' exact={true} Component={Sales} />
      </Routes>
    </>
    </Router>
    </div>
  );
}

export default App;
