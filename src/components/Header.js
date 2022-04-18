import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "primary.main",
        minHeight: 150,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography color="error" variant="h2">
        Todo-List
      </Typography>
    </Box>
  );
}
export default Header;
