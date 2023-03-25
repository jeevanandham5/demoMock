import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import { API, API_URL } from "../api/users";
import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

const Newbox = styled(Box)({
  background: "#d5d9d2",
  textAlign: "center",
  padding: "50px",
  borderRadius: "20px",
});

const Create = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Checked, setChecked] = useState(false);

  const postdata = async () => {
    await axios.post(API_URL, { FirstName, LastName, Checked });
  };
  return (
    <main className={styles.main}>
      <Typography variant="h1" sx={{ fontSize: "50px", fontWeight: "900" }}>
        Create your Account
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

          <Checkbox value={Checked} onChange={() => setChecked(!Checked)} />
          <ListItemText sx={{ textAlign: "center" }} primary="Agree the T&S" />
        </List>

        <Link href={"/components/read"}>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={postdata}
          >
            Submit
          </Button>
        </Link>
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
export default Create;
