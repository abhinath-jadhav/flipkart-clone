import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import { Home, ProductDetail, SearchResult } from "../pages";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/test" element={<SearchResult />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
