import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import OrderManagement from './pages/OrderManagement'
import ProductManagement from './pages/ProductManagement'
import Settings from './pages/Settings'
import UserManagement from './pages/UserManagement'
import NotFound from './pages/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './elements/SideBar'
import LoginAndSignup from './pages/LoginAndSignup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginAndSignup />} />
        <Route path='/' element={<SideBar />} >
          <Route index path='/dashboard' element={<Dashboard />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/order-management' element={<OrderManagement />} />
          <Route path='/product-management' element={<ProductManagement />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/user-management' element={<UserManagement />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App