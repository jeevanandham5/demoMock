import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>New CRUD operation</h1>
        <Link href=" /components/create">
          <Button variant="contained" size="large">
            Create
          </Button>
        </Link>
        <Link href="/components/read">
          <Button variant="contained" size="large">
            read
          </Button>
        </Link>
      </main>
    </>
  );
}
