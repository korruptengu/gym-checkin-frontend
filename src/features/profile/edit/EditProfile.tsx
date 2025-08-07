import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Card,
  Typography,
  Input,
  Stack,
  FormControl,
  FormLabel,
} from "@mui/joy";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Nicht eingeloggt.");
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:8080/api/appusers/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setFormData({
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          email: res.data.email,
        });
      })
      .catch(() => {
        setError("Fehler beim Laden der Benutzerdaten.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .patch("http://localhost:8080/api/appusers/me", formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        navigate("/profile"); // Zurück zur Profilseite
      })
      .catch(() => {
        setError("Fehler beim Speichern.");
      });
  };

  if (loading) return <Typography>Lade...</Typography>;
  if (error) return <Typography color="danger">{error}</Typography>;

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 8, px: 2 }}>
      <Typography level="h4" sx={{ mb: 2 }}>
        Daten bearbeiten
      </Typography>

      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Vorname</FormLabel>
          <Input
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Nachname</FormLabel>
          <Input
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>E-Mail</FormLabel>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <Button variant="solid" onClick={handleSave}>
          Speichern
        </Button>
      </Stack>
    </Card>
  );
}