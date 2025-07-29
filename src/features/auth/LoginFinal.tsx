import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  CssVarsProvider, CssBaseline, Sheet, Typography, FormControl,
  FormLabel, Input, Button, IconButton
} from "@mui/joy";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginFinal({ onLogin }: { onLogin: (username: string) => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleLogin() {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password,
      });

      // Token speichern
      localStorage.setItem("token", response.data.token);

      // Erfolgreich eingeloggt
      onLogin(response.data.username);
      navigate("/profile");
    } catch (err) {
      setError("Login fehlgeschlagen – bitte überprüfe deine Zugangsdaten.");
      console.error(err);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      handleLogin();
    }
  }

  return (
    <main>
      <CssVarsProvider>
        <CssBaseline />
        <Sheet
          sx={{
            width: 300,
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md"
          }}
          variant="outlined"
        >
          <Typography level="h4" component="h1">
            <b>Anmeldung</b>
          </Typography>
          <Typography level="body-sm">Bitte melden Sie sich an.</Typography>

          <FormControl>
            <FormLabel>Benutzername</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Passwort</FormLabel>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              endDecorator={
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </FormControl>

          <Button sx={{ mt: 1 }} onClick={handleLogin}>
            Anmelden
          </Button>
          {error && <Typography color="danger" level="body-sm">{error}</Typography>}
        </Sheet>
      </CssVarsProvider>
    </main>
  );
}