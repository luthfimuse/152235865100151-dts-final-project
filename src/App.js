// import logo from './logo.svg';
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Index from "./Pages/Index";
import Pencarian from "./Pages/Pencarian";
import Request from "./Pages/Request";
import Artikel from "./Pages/Artikel";
import DetailArtikel from "./Pages/ArtikelDetail";

import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Index />} />
  
        <Route name="pencarian" path="/pencarian" element={<Pencarian />} />

        <Route
          name="request-resep"
          path="/request-resep"
          element={<Request />}
        />

        <Route name="artikel" path="/artikel" element={<Artikel />} />
        <Route
              name="detail-artikel"
              path='/artikel/detail/:id'
              element={<DetailArtikel />} 
            />

        <Route name="login" path="/login" element={<Login />} />
        <Route name="register" path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
