import { Button } from "@mui/material";
import axios from "axios";

const LINK_CREATE = "https://authencation.vercel.app/api/todo/create";
function AddTodo(props) {
  const { handleAdd, name } = props;
  const ClickAdd = async () => {
    try {
      if (name.trim().length <= 2) {
        alert("name must be at least 2 characters");
        return;
      }
      let response = await axios.post(LINK_CREATE, { name: name });
      let data = response && response.data ? response.data : {};
      handleAdd(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Button
      sx={{ width: 120, height: 50, marginRight: 2 }}
      color="success"
      variant="contained"
      onClick={() => ClickAdd()}
    >
      Add
    </Button>
  );
}

export default AddTodo;
