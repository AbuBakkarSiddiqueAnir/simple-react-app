
import './App.css'
import { Header, SideBar } from './components'
import {Dashboard, SignIn,SignUp} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout';
import Users from './pages/Users';
import Sales from './pages/Sales';

function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route  element={<Dashboard />} />
                    <Route index path="users" element={<Users />} />
                    <Route index path="sales" element={<Sales />} />
                </Route>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
