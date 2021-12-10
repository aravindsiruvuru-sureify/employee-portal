import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-input": {
      fontSize: "14px",
    },
  },
});

const SearchBarComponent = ({
  onCancelSearch = () => {},
  onRequestSearch = () => {},
}) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  return (
    <SearchBar
      value={text}
      onChange={(val) => {
        setText(val);
      }}
      onCancelSearch={() => {
        setText("");
        onCancelSearch();
      }}
      onRequestSearch={() => {
        onRequestSearch(text);
      }}
      style={{ width: "350px" }}
      className={classes.root}
    />
  );
};

export default SearchBarComponent;
