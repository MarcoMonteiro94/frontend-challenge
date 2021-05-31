import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { BookDetail } from "../../components/BookDetail";

export default function BookDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Magic Library</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BookDetail id={id?.toLocaleString()} />
    </>
  );
}
