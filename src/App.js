import { Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { OnePage } from "./pages/OnePage/OnePage";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import Header from "./components/Header/Header";
import ListPage from "./pages/ListPage/ListPage";
import PersonalArea from "./components/PersonalArea/PersonalArea";
import AdminPage from "./pages/AdminPage/AdminPage";
import { useSelector } from "react-redux";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage";

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <div className='App'>
      <Header />
      {token ? (
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/personal' element={<PersonalArea />} />
          <Route path='/category/:id' element={<ListPage />} />
          <Route path='/movie/:id' element={<OnePage />} />
          <Route path='/register' element={<Navigate to='/' />} />
          <Route path='/login' element={<Navigate to='/' />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/sub' element={<SubscriptionPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/personal' element={<Navigate to='/login' />} />
          <Route path='/category/:id' element={<ListPage />} />
          <Route path='/movie/:id' element={<OnePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/sub' element={<SubscriptionPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
