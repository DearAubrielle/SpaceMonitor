import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router'
function App() {
  
    return (
    <>
    <div id='layout'>
            <Header />
            <div className='mainWrapper'>
                <Sidebar />
                <main>
                    <Outlet/>
                </main>

            </div>
            
        </div>
    </>
  )
}

export default App
