import { Routes, Route, Navigate } from "react-router-dom";
import LoginFinal from "./features/auth/LoginFinal";
import ProfileDashboard from "./features/profile/ProfileDashboard";
import EditProfile from "./features/profile/edit/EditProfile"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginFinal onLogin={() => {}} />} />
      <Route path="/profile" element={<ProfileDashboard />} />
      <Route path="/profile/edit" element={<EditProfile />} />
    </Routes>
  );
}