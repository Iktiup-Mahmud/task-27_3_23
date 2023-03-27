import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Quizs from './components/Quizs/Quizs';
// import datas from '../public/datas.json'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/quizs',
      element: <Quizs />
    }
  ])

  return (
    <div className="App bg-slate-900 h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
