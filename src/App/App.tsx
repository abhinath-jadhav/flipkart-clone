import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import { Home, SearchResult } from "../pages";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function App() {
  const checkHome = useSelector((state: RootState) => state.isHome);
  console.log(checkHome);

  return (
    <div className="h-screen">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/test" element={<SearchResult />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
