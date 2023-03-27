import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  List,
  ListItem,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "../api/users";

const Update = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const router = useRouter();

  const updateUser = async () => {
    await axios.put(API_URL + id, { FirstName, LastName });
    router.push("/components/read");
  };

  const Newbox = styled(Box)({
    background: "#d5d9d2",
    textAlign: "center",
    padding: "50px",
    borderRadius: "20px",
  });
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
  }, []);

  return (
    <main className={styles.main}>
      <h1>update</h1>
      <Typography variant="h5">
        Hi {FirstName}
        {LastName} hear you can update yor detail
      </Typography>
      <Newbox>
        <List
          sx={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ListItem>
            <Typography
              variant="h5"
              sx={{ fontSize: "50px", paddingRight: "20px" }}
            >
              First Name
            </Typography>
            <TextField
              variant="outlined"
              value={FirstName}
              label="First Name"
              type={"text"}
              onChange={(event) => setFirstName(event.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <Typography
              variant="h5"
              sx={{ fontSize: "50px", paddingRight: "20px" }}
            >
              Last Name
            </Typography>
            <TextField
              variant="outlined"
              value={LastName}
              type={"text"}
              label="Last Name"
              onChange={(event) => setLastName(event.target.value)}
            ></TextField>
          </ListItem>
        </List>

        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={updateUser}
        >
          Update
        </Button>
      </Newbox>
      <Link href="/">
        <Button
          variant="contained"
          size="large"
          sx={{ marginTop: "50px", padding: "20px" }}
        >
          Back to home
        </Button>
      </Link>
    </main>
  );
};
export default Update;
