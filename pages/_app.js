import "@/styles/globals.css";
import { Container, ThemeProvider } from "@mui/material";
import Navbar from "./components/navbar";
import { MyTheme } from "./theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={MyTheme}>
      <Navbar/>
      <Container maxWidth="xl">
      <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
