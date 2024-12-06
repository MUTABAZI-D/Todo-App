import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectTodo } from "./store/todoSelector";

export const Footer = () => {
  const todos = useSelector(selectTodo);
  const completedTodos = [...todos].filter((todo) => todo.done);

  return (
    <Box
      sx={{
        backgroundColor: "greenyellow",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "fixed",
        bottom: "0px",
        width: "100%",
        height: "50px",
        paddingTop: "15px",
      }}
    >
      <Typography
        component={"div"}
        sx={{ fontWeight: "bold", mr: 4, fontSize: { xs: "19px", md: "25px" } }}
      >
        Total Todos: {todos.length}
      </Typography>
      <Typography
        component={"div"}
        sx={{ fontWeight: "bold", fontSize: { xs: "19px", md: "25px" } }}
      >
        Completed Todos: {completedTodos.length}
      </Typography>
    </Box>
  );
};
