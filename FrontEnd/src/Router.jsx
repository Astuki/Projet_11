import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import { checkLoggedInUser } from './redux/authThunks';


import Login from './pages/Login';
import User from './pages/User';
import Home from './pages/Home';


import './styles/Main.css';

export default function App() {

    useEffect(() => {
        store.dispatch(checkLoggedInUser());
    }, []);

  return (
      <Provider store={store}>
          <Router>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/user' element={<User />} />
              </Routes>
          </Router>
      </Provider>
  );
}
