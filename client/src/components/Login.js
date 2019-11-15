import React, { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  TextField,
  makeStyles
} from "@material-ui/core";

import { Redirect } from "react-router-dom";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "50%",
    minWidth: 300,
    maxWidth: 650
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

const initialFormData = {
  username: "",
  password: ""
};

const Login = () => {
  const [credentials, setCredentials] = useState(initialFormData);
  const classes = useStyles();

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => console.log(err));
  };
  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className={classes.formContainer}>
      <Paper className={classes.root}>
        <Typography variant="h2" component="h3">
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            variant="outlined"
            name="username"
            label="Username"
            placeholder="Username"
            id="username"
            onChange={handleChange}
            value={credentials.username}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            label="Password"
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
