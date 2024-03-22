import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import Dashboard from './pages/DashBoard/Dashboard';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Selected from './pages/Selected/Selected';
import './App.css'
import AllBingos from './pages/AllBingos/AllBingos';
import Pay from './pages/Pay/Pay';

const App = () => {

  const Layout1 = () => {
    return <div className='w-full  relative bg-blue-200 h-full overflow-y-auto'>
      <div className='sticky container z-[1000] pt-[2rem] top-0 left-0 w-full  p-[1rem]'>
      <NavBar />
      </div>
      <div className='container'>
      <Outlet />
      </div>
    </div>
  }

  return (
    <div className='w-full h-screen overflow-hidden'>
      <Routes>
        <Route path='/' element={<Layout1 />}>
          <Route index element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/selected" element={<Selected />} />
          <Route path="/all-bingos" element={<AllBingos />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
