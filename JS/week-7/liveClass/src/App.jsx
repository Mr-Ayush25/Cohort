// import Dashboard from "./components/Dashboard.jsx";
import React, { useState } from "react";
import Landing from "./components/Landing.jsx";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
const Dashboard = React.lazy(() => import("./components/Dashboard.jsx"))

function App() {
  const [count, setCount] = useState(1)
  return (
    <div>
      {/* <BrowserRouter>
        <div>
          <Link to={"/"}>Home</Link>
          <br />
          <Link to={"/dash"}>Dash</Link>
        </div>
        <Routes>
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter> */}
      <Landing count={count}/>
      <Dashboard count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
