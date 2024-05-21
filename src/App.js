import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
   <>
  <ToastContainer />
     <main >
        <Outlet/>
       </main>
   </>
  );
}

export default App;
