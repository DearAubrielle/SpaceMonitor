import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router'
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const isAuthenticated = localStorage.getItem("token"); // Example auth check
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };
  
  function App() {
  
    return (
    <>
    <ProtectedRoute>
      <div id='layout'>
        <Header />
        <div className='mainWrapper'>
          <Sidebar />
          <main>
            <Outlet/>
          </main>
        </div>
      </div>
    </ProtectedRoute>
    </>
  )
}

export default App
