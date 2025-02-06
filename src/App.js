
import './App.css';
import Landingpage from './pages/Landingpage';
import { Routes,Route } from 'react-router-dom';
import Mobilepage from './pages/mobilepage';
import Acpage from './pages/acpage';
import Menfishonpage from './pages/menfishonpage';
import Bookpage from './pages/bookpage';
import Computerpage from './pages/computerpage';
import Watchpage from './pages/watchpage';
import Womanpage from './pages/Womanpage';
import Fridge from './pages/Fridge';
import Speaker from './pages/Speaker';
import Mobilesingle from './singlepage/Mobilesingle';
import Acsingle from './singlepage/acsingle';
import Mensingle from './singlepage/mensingle';
import Booksingle from './singlepage/booksingle';
import Laptopsingle from './singlepage/laptopsingle';
import Watchsingle from './singlepage/watchsingle';
import Womansingle from './singlepage/Womansingle';
import Fridgesingle from './singlepage/Fridgesingle';
import Speakersingle from './singlepage/speakersingle';

function App() {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Landingpage/>} />
           <Route path='/mobiles' element ={<Mobilepage/>}/>
           <Route path='/ac' element={<Acpage/>} />
           <Route path='/menware' element ={<Menfishonpage/>} />
           <Route path='/book' element={<Bookpage/>} />
           <Route path='/computer' element ={<Computerpage/>} />
           <Route path='/watch' element={<Watchpage/>} />
           <Route path='/woman' element={<Womanpage/>} />
           <Route path='/fridge' element={<Fridge/>} />
           <Route path='/speaker' element={<Speaker/>} />
           <Route path='/mobiles/:id' element={<Mobilesingle/>} />
           <Route path='/ac/:id' element={<Acsingle/>} />
           <Route path='/men/:id' element={<Mensingle/>} />
           <Route path='/book/:id' element={<Booksingle/>} />
           <Route path='/laptop/:id' element={<Laptopsingle/>} />
           <Route path='/watch/:id' element={<Watchsingle/>} />
           <Route path='/woman/:id' element={<Womansingle/>} />
           <Route path='/fridge/:id' element={<Fridgesingle/>} />
          <Route path='/speaker/:id' element={<Speakersingle/>} />
        </Routes>
      
    </div>
  );
}

export default App;
