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
  Profile,
  Project,
  About,
  Error
} from "./pages";

function App() {
  const { user, isAuthReady } = useAuthContext();
  return (
    <div className="App">
      {isAuthReady && (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <SharedLayout /> : <Navigate to="/landing" />}
          >
            <Route index element={<Dashboard />} />
            <Route path="create" element={<Create />} />
            <Route path="chatroom" element={<ChatRoom />} />
            <Route path="feedback" element={<Feedbackform />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
