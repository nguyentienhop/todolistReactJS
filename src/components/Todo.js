import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const API_DELETE = `https://authencation.vercel.app/api/todo/delete?id=`;
const API_UPDATE = `https://authencation.vercel.app/api/todo/update?id=`;
function Todo(props) {
  const { todo, index, onHandleDelete, onHandleEdit } = props;

  //delete
  const handleDelete = async (id) => {
    try {
      // eslint-disable-next-line no-restricted-globals
      let result = confirm("Delete Todo??");
      if (result === false) {
        return;
      }
      let response = await axios.post(API_DELETE + id);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
    onHandleDelete(id);
  };

  //edit
  const handleEdit = async (id, name) => {
    try {
      let value = prompt("New Todo:", name);
      if (value.trim().length === 0) {
        alert("search empty");
        return;
      }
      let response = await axios.post(API_UPDATE + id, { name: value });
      onHandleEdit(id, value);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <StyledTableRow>
      <StyledTableCell align="left">{index + 1}</StyledTableCell>
      <StyledTableCell align="center">{todo.name}</StyledTableCell>
      <StyledTableCell>
        <Stack justifyContent="center" direction="row" spacing={2}>
          <Button
            onClick={() => handleEdit(todo.id, todo.name)}
            color="secondary"
            variant="contained"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(todo.id)}
            color="warning"
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Stack>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default Todo;
