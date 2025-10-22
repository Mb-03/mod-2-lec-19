import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";

const App = () => {
  return (
    <div className="min-h-screen bg-amber-100">
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
