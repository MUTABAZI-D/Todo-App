import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <>
      <Typography
        sx={{
          bgcolor: "greenyellow",
          fontWeight: "bold",
          textAlign: "center",
          p: 2,
          boxShadow: "1px 4px 6px rgba(0,0,0,0.2)",
          mb: 5,
        }}
        variant="h4"
        component={"div"}
      >
        My Todo List
      </Typography>
    </>
  );
};
