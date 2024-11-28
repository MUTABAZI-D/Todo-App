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
        variant="h5"
        component={"div"}
        sx={{ fontWeight: "bold", mr: 4 }}
      >
        Total Todos: {todos.length}
      </Typography>
      <Typography variant="h5" component={"div"} sx={{ fontWeight: "bold" }}>
        Completed Todos: {completedTodos.length}
      </Typography>
    </Box>
  );
};
