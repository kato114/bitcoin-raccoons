import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import { useState } from "react";

const App = () => {
    const [page, setPage] = useState("home");

  return (
    <BrowserRouter>
      <Layout page={page}>
        <Routes>
          <Route index element={<Home setPage={setPage} />} />
          <Route path="gallery" element={<Gallery setPage={setPage} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
