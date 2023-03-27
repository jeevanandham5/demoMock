import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import { API_URL } from "../api/users";
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
import { useRouter } from "next/router";

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
  const router = useRouter();

  const handleClick = () => {
    router.push("/components/read");
  };

  const postdata = async () => {
    const data = document.getElementById("data").value;
    if (data == "") {
      alert("plz give some data");
    } else {
      await axios.post(API_URL, { FirstName, LastName, Checked });
    }
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
              id="data"
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
              id="data"
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

      <Button
        variant="contained"
        size="large"
        sx={{ marginTop: "50px", padding: "20px" }}
        onClick={handleClick}
      >
        Back to home
      </Button>
    </main>
  );
};
export default Create;
