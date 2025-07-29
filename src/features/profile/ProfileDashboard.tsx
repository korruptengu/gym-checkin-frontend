import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import UserInfoCard from "./UserInfoCard.tsx";

export default function ProfileDashboard() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 8, px: 2 }}>
        <Typography level="h2" gutterBottom>
          Mein Profil
        </Typography>
        <UserInfoCard />
      </Box>
    </CssVarsProvider>
  );
}