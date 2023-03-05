import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './Components/NavigationBar';
import { Home } from './Components/Home';
import { TopHeadlines } from './Components/TopHeadlines';
import { AllNews } from './Components/AllNews';

function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/top-headlines' element={<TopHeadlines></TopHeadlines>}></Route>
      <Route path='/all-news' element={<AllNews></AllNews>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
