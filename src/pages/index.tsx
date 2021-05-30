import Head from "next/head";
import { Main } from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Magic Library</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main />
    </>
  );
}
