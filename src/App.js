import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { OnePage } from "./pages/OnePage/OnePage";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ListPage from "./pages/ListPage/ListPage";
// import IconBxUser from "./IconBxUser";
import PersonalArea from "./components/PersonalArea/PersonalArea";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/personal' element={<PersonalArea />} />
        <Route path='/category/:id' element={<ListPage />} />
        <Route path='/movie/:id' element={<OnePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
