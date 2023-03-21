
import './App.css'
import { Dashboard, SignIn, SignUp } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout';
import Users from './pages/Users';
import Sales from './pages/Sales';
import AuthLayout from './components/layout/AuthLayout';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route index path="users" element={<Users />} />
            <Route path="sales" element={<Sales />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App
