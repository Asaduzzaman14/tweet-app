import { RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './layout/main/Navbar';
import routes from './routes/routes';

function App() {



  return (
    <div className="">
      <RouterProvider router={routes} />

    </div>
  );
}

export default App;
