import Head from "next/head";
import { HomeBody } from "../components/HomeBody";

export default function Home() {
  return (
    <>
      <Head>
        <title>Magic Library</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeBody />
    </>
  );
}
