import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { DetailModal } from "../../components/DetailModal";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Magic Library</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DetailModal id={id!.toLocaleString()} />
    </>
  );
}
