import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Valere Margins Assignment</title>
        <meta
          name="description"
          content="Valere Margins Frontend Developer Assignment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-zinc-100">
          Vaš vodič za streaming filmovi, TV serije i sport
        </h1>

        <div className="mb-32 mt-12 flex flex-col items-center justify-center gap-4">
          <Link
            href="/discover"
            className="rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-zinc-800 lg:hover:opacity-80"
          >
            <button type="button">Otkrijte filmove i serije</button>
          </Link>
        </div>
      </div>
    </>
  );
}
