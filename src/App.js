import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import About from './routes/about';
import Contact from './routes/contact';
import NoMatch from './routes/nomatch';
import Products from './demo/products';
import Product from './demo/product';
import ProductIndex from './demo/productindex';
import ProductRegister from './demo/productRegister';
import ProductModify from './demo/productModify';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to={{
              pathname: '/contact',
              search: '?api_key=eimaieU9',
              state: 'test',
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to="/products"
          >
            Products
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductIndex />} />
            <Route path=":productId">
              <Route index element={<Product />} />
              <Route path="edit" element={<ProductModify />} />
            </Route>
            <Route path="register" element={<ProductRegister />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}



export default App;