import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "../api/users";
import Update from "./update";

const Tablebox = styled(Box)({
  background: "black ",
  borderRadius: "20px",
});

const Read = () => {
  const [apidata, setAPIdata] = useState([]);

  const deleteUser = async (id) => {
    await axios.delete(API_URL + id);
    callgetApI();
  };

  const updateuser = ({ FirstName, LastName, id }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", FirstName);
    localStorage.setItem("lastName", LastName);
  };

  const callgetApI = async () => {
    const resp = await axios.get(API_URL);
    setAPIdata(resp.data);
  };
  useEffect(() => {
    callgetApI();
  }, []);
  return (
    <main className={styles.main}>
      <Typography variant="h1" marginBottom={5}>
        Read
      </Typography>
      <Tablebox>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="right"
                  sx={{ color: "yellow", fontSize: "20px" }}
                >
                  USER ID
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "yellow", fontSize: "20px" }}
                >
                  First Name
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "yellow", fontSize: "20px" }}
                >
                  Last Name
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "yellow", fontSize: "20px" }}
                >
                  Cheked status
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "yellow", fontSize: "20px" }}
                >
                  Delete
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "yellow", fontSize: "20px" }}
                >
                  Update
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apidata.map((data) => (
                <TableRow key={data.id}>
                  <TableCell
                    align="center"
                    sx={{ color: "#fff", fontWeight: "400" }}
                  >
                    {data.id}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: "#fff", fontWeight: "400" }}
                  >
                    {data.FirstName}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: "#fff", fontWeight: "400" }}
                  >
                    {data.LastName}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: "#fff", fontWeight: "400" }}
                  >
                    {data.Checked ? (
                      <Typography sx={{ color: "yellowgreen" }}>
                        Checked
                      </Typography>
                    ) : (
                      <Typography sx={{ color: "red" }}>
                        Not Checked !
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "20px" }}>
                    <Button color="error" onClick={() => deleteUser(data.id)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "20px" }}>
                    <Button
                      color="success"
                      href="/components/update"
                      onClick={() => updateuser(data)}
                    >
                      <EditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Tablebox>
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
export default Read;
