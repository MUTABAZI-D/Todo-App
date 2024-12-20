import { Box, Button, Paper, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { todoProps } from "./todo.type";
import { AppDispatch } from "./store/store";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
export const AddTodo = () => {
  const defaultValues = {
    todo: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (data: todoProps) => {
    dispatch(addTodo(data));
    reset(defaultValues);
  };

  return (
    <Box
      component={Paper}
      sx={{
        width: { xs: 300, md: 400 },
        margin: "0px auto",
        p: 2,
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          placeholder="Enter todo Item..."
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          {...register("todo", { required: "Please add a todo" })}
          error={!!errors.todo}
          helperText={errors.todo?.message}
        />
        <Button
          type="submit"
          sx={{
            color: "white",
            backgroundColor: "greenyellow",
            "&:hover": {
              backgroundColor: "limegreen",
            },
          }}
        >
          Add
        </Button>
      </form>
    </Box>
  );
};
