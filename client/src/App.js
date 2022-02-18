import "./App.css";
import Main from "./views/Main";
// import Detail from "./views/Detail";
import Update from "./views/Update";
import AddAuthor from "./views/AddAuthor";
import ErrorPAge from "./views/ErrorPAge";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="text-white bg-dark col-3 m-auto">Favourite Authors</h1>
        <Routes>
          <Route path="author/" element={<Main />} />
          {/* <Route path="product/:id" element={<Detail />} /> */}
          <Route path="author/:id/edit" element={<Update />} />
          <Route path="author/add" element={<AddAuthor />} />
          <Route path="author/error" element={<ErrorPAge />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
