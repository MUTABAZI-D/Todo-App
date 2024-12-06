import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo } from "./store/todoSelector";
import { AppDispatch } from "./store/store";
import { deleteTodo, modifyTodoDone } from "./store/todoSlice";

export const DisplayTodo = () => {
  const todos = useSelector(selectTodo);

  const todosToDisplay = [...todos].sort(
    (a, b) => Number(a.done) - Number(b.done)
  );

  const dispatch: AppDispatch = useDispatch();
  const handleClick = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleDone = (id: number) => {
    dispatch(modifyTodoDone(id));
  };

  return (
    <Box
      component={Paper}
      sx={{
        width: { xs: 320, md: 420 },
        margin: "20px auto",
        marginBottom: "80px",
      }}
    >
      {todosToDisplay.map((todo) => (
        <Box key={todo.id} sx={{ p: 3 }}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <Typography
              variant="h5"
              component={"div"}
              onClick={() => handleDone(todo.id)}
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: todo.done ? "line-through" : "",
              }}
            >
              {todo.todo}
            </Typography>
            <Button
              color="error"
              variant="contained"
              size="small"
              sx={{ mb: 1 }}
              onClick={() => handleClick(todo.id)}
            >
              X
            </Button>
          </Stack>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};
