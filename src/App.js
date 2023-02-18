import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import SharedLayout from "./pages/dashboard/SharedLayout";
import {
  Dashboard,
  Create,
  Feedbackform,
  Login,
  Signup,
  ChatRoom,
  Landing,
} from "./pages";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <SharedLayout /> : <Navigate to="/landing" />}
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create" element={<Create />} />
            <Route path="chatroom" element={<ChatRoom />} />
            <Route path="feedback" element={<Feedbackform />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
