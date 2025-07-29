import { Routes, Route, Navigate } from "react-router-dom";
import LoginFinal from "./features/auth/LoginFinal";
import ProfileDashboard from "./features/profile/ProfileDashboard";
import { useState } from "react";

export default function App() {
  // @ts-expect-error: username ist vorerst absichtlich unbenutzt
  const [username, setUsername] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginFinal onLogin={setUsername} />} />
      <Route path="/profile" element={<ProfileDashboard />} />
    </Routes>
  );
}