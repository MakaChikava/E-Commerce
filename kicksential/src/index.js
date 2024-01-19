import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Cart from './cart';
import Favorites from './favorites';
import SignUp from './signup'
import Login from './login'
import { Provider } from 'react-redux';
import store from './redux/store';
import { getTotals } from './redux/cartSlice';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/favorites",
    element: <Favorites/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);

store.dispatch(getTotals());
// document.title = "KICKSENTIAL."
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
