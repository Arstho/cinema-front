import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { OnePage } from "./pages/OnePage/OnePage";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category:id' element={<HomePage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/page' element={<OnePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
