import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Main from './pages/Main';
import Forecast from './pages/Forecast';
import Catalog from './pages/Catalog';
import Sales from './pages/Sales';
import LoadData from './pages/LoadData';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
          
   
    <Router>
    <Navbar></Navbar>
    <Menu></Menu>
    <>
    <Routes>
      <Route path='/' exact={true} Component={Main} />
      <Route path='/forecast' exact={true} Component={Forecast} />
      <Route path='/catalog' exact={true} Component={Catalog} />
      <Route path='/sales' exact={true} Component={Sales} />
      <Route path='/loadData' exact={true} Component={LoadData} />
      <Route path='/userPage' exact={true} Component={UserPage} />
    </Routes>
    </>
    </Router>
    </div>
  );
}

export default App;
