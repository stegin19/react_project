
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import {BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import CreateBooking from './components/CreateBooking';
import ViewComponent from './components/ViewComponent';
import Booking2Component from './components/Booking2component';


function App() {
  return (
    <div >
      <Router>
      <Header></Header>
   
          <Routes>
            <Route path='/' element={<MainComponent></MainComponent>}></Route>
            <Route path='/bookings' element={<MainComponent></MainComponent>}></Route> 
            <Route path="/add-booking/:id" element={<CreateBooking />} />
            <Route path="/view-booking/:id" element={<ViewComponent />} />
             <Route path="/booking2" element={<Booking2Component />} />
          </Routes>

      <Footer></Footer>
      </Router>
    
    </div>
  );
}

export default App;
