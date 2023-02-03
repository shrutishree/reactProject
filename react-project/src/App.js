import './App.css';
import HeaderContainer from './HeaderContainer';
import Sidebar from './Sidebar';
import AboutUs from './AboutUs';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderContainer />
        <div className="mainContainer">
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="dashboard" element={ <Dashboard/> } />
              <Route path="order" element={ <Orders/> } />
              <Route path="teams" element={ <Teams/> } />
              <Route path="partner" element={ <Partners/> } />
              <Route path="product" element={ <Product/> } />
              <Route path="award" element={ <Awards/> } />
              <Route path="payment" element={ <Payment/> } />
              <Route path="about" element={<AboutUs />} />
            </Routes>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

function Home() {

  return (
    <div className="main">
      Home
    </div>
  );
}

function Dashboard() {

  return (
    <div className="main">
      Dashboard
    </div>
  );
}

function Orders() {

  return (
    <div className="main">
      Orders
    </div>
  );
}

function Teams() {

  return (
    <div className="main">
      Team Members
    </div>
  );
}

function Partners() {

  return (
    <div className="main">
      Partners
    </div>
  );
}

function Product() {

  return (
    <div className="main">
      Product Listing
    </div>
  );
}

function Awards() {

  return (
    <div className="main">
      Award & Owners
    </div>
  );
}

function Payment() {

  return (
    <div className="main">
       Payment Info
    </div>
  );
}
