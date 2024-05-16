
import './App.css';
import Header from './components/header';
import Profilecard from './components/profilecard';
import Shortcard from './components/shortcard';
import Home from './pages/home';
import Todayshotpicks from './pages/todayshotpicks';

import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className='header-cls'>
      <Header/>
      </div>
      <div className='rest-div'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/todayshotpicks' element={<Todayshotpicks />}></Route>
        <Route path='/shortcard' element={<Shortcard/>}></Route>
        <Route path='/profilecard' element={<Profilecard/>}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
