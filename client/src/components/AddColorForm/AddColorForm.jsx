import React, { useState } from "react";
import { axiosWithAuth } from "../../axiosWithAuth";
import {
  Paper,
  Typography,
  Button,
  TextField,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 50,
    width: "100%",
    boxSizing: "border-box"
  },
  textField: {
    marginBottom: theme.spacing(3)
  },
  formContainer: {
    marginTop: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  }
}));

// const initialFormData = {
//   code: {
//     hex: "#000000"
//   },
//   color: "black",
//   id: -1
// };

const AddColorForm = () => {
  const [hex, setHex] = useState("#000000");
  const [color, setColor] = useState("black");
  const classes = useStyles();

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Paper className={classes.root}>
      <Typography variant="h2" component="h3">
        Add Color
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          variant="outlined"
          name="hex"
          label="Hexcode"
          placeholder="Hexcode"
          id="hex"
          onChange={e => setHex(e.target.value)}
          value={hex}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Color Name"
          placeholder="Color"
          name="color"
          id="color"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <Button variant="contained" color="secondary" type="submit">
          Add Color
        </Button>
      </form>
    </Paper>
  );
};

export default AddColorForm;
