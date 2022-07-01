import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes ,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import CompliteTask from './Pages/Home/CompliteTask';
import Calendar from './Pages/Home/Calendar';
import Details from './Pages/Home/Details';

function App() {
  return (
    <div className="">
       <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/complite' element={<CompliteTask></CompliteTask>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
        
        
        <Route path='/detail/:id' element={<Details></Details>}></Route>
    
      </Routes>
 
    </div>
  );
}

export default App;
