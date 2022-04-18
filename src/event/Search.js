import { Button } from "@mui/material";

function Search(props) {
  const { handleSearch } = props;
  const clickSearch = () => {
    let value = prompt("Search: ");
    if (value.trim().length === 0) {
      alert("input Empty");
      return;
    }
    handleSearch(value);
  };
  return (
    <Button
      onClick={() => clickSearch()}
      sx={{ width: 100, height: 50, marginRight: 2 }}
      color="secondary"
      variant="contained"
    >
      Search
    </Button>
  );
}

export default Search;
