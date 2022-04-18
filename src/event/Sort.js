import { Button } from "@mui/material";

function Sort(props) {
  const { handleSort } = props;
  const clickSort = () => {
    handleSort();
  };
  return (
    <Button
      onClick={() => clickSort()}
      sx={{ width: 100, height: 50 }}
      color="warning"
      variant="contained"
    >
      Sort
    </Button>
  );
}
export default Sort;
