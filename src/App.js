import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import MealDetail from './Components/MealDetail/MealDetail';
import NotFound from './Components/NotFound/NotFound';
import OrderList from './Components/OrderList/OrderList';
import Profile from './Components/Profile/Profile';
import Restaurant from './Components/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Restaurant></Restaurant>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/meal/:mealId" element={<MealDetail></MealDetail>}></Route>
        <Route path='meal/orderlist/:mealName' element={<OrderList></OrderList>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
