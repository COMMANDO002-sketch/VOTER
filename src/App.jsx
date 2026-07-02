import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Elections from "./Pages/Elections";
import Vote from "./Pages/Vote";
import Results from "./Pages/Results";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/elections" element={<Elections />} />

        <Route path="/vote" element={<Vote />} />

        <Route path="/results" element={<Results />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;