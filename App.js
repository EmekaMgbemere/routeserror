import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Navitems/Nav';
import LoginNav from './components/Navitems/LoginNav';
import Signup from './components/Navitems/Signup';
import Login from './components/Navitems/Login';
import Home from './components/Navitems/Home';
import Usernav from './components/Navitems/Usernav';
import Moviedetails from './components/Navitems/Moviedetails';
import Userhomepage from './components/Navitems/Userhomepage';
import Counternav from './components/Navitems/Counternav';
import Counterdashboard from './components/Navitems/Counterdashboard';
import Theateradminnav from './components/Navitems/Theateradminnav';
import Webadmin from './components/Navitems/Webadmin';
import Ticket from './components/Navitems/Ticket';
import Bookinghistory from './components/Navitems/Bookinghistory';
import Newuserhomepage from './components/Navitems/Newuserhomepage';
import Contactform from './components/Navitems/Contactform';
import Footer from './components/Navitems/Footer';
import './App.css';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/movies" element={<Userhomepage />} />
              <Route path="/nav" element={<Nav />} />
              <Route path="/loginnav" element={<LoginNav />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/usernav" element={<Usernav />} />
              <Route path="/moviesdetails/:id" element={<Moviedetails/>} />
              <Route path="/counternav" element={<Counternav />} />
              <Route path="/counterdashboard" element={<Counterdashboard />} />
              <Route path="/theateradminnav" element={<Theateradminnav />} />
              <Route path="/webadmin" element={<Webadmin />} />
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/history" element={<Bookinghistory />} />
              <Route path="/newuserhomepage" element={<Newuserhomepage />} />
              <Route path="/contactform" element={<Contactform />} />
              <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
