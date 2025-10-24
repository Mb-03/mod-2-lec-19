import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <div className="min-h-screen bg-amber-100">
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/new"
            element={
              <PrivateRoute>
                <NewPost />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
