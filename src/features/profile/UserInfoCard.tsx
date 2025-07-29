import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import axios from "axios";

export default function UserInfoCard() {
  const [user, setUser] = React.useState<{
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
  } | null>(null);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const token = localStorage.getItem("token"); // JWT aus Login speichern
    if (!token) {
      setError("Kein Token gefunden. Bitte erneut anmelden.");
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:8080/api/appusers/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Fehler beim Laden der Benutzerdaten.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Typography>Lade Benutzerdaten...</Typography>;
  }

  if (error) {
    return <Typography color="danger">{error}</Typography>;
  }

  if (!user) {
    return <Typography>Keine Benutzerdaten verfügbar.</Typography>;
  }

  return (
    <Card sx={{ p: 3 }}>
      <Stack  direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography level="title-lg">{user.username}</Typography>
        <Typography>{user.role}</Typography>
      </Stack>
      <Divider sx={{ my: 1 }} />
      <Stack spacing={1}>
        <Typography>
          <strong>E-Mail:</strong> {user.email}
        </Typography>
        <Typography>
          <strong>Vorname:</strong> {user.firstname}
        </Typography>
        <Typography>
          <strong>Nachname:</strong> {user.lastname}
        </Typography>
        <Typography>
          <strong>Rolle:</strong> {user.role}
        </Typography>
      </Stack>
    </Card>
  );
}