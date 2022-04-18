import { Button } from "@mui/material";

function DeleteAll(props) {
  const { handleDeleteAll } = props;

  const clickDeleteAll = () => {
    // eslint-disable-next-line no-restricted-globals
    let result = confirm("Delete All Todo??");
    if (result) {
      handleDeleteAll();
    }
  };
  return (
    <Button
      onClick={() => clickDeleteAll()}
      sx={{ width: 120, height: 50, marginRight: 2 }}
      color="error"
      variant="contained"
    >
      Delete All
    </Button>
  );
}

export default DeleteAll;
