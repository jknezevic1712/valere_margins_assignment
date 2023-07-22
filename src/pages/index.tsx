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
          Your guide to streaming movies, TV series and sports
        </h1>

        <div className="mb-32 mt-12 flex flex-col items-center justify-center gap-4">
          <Link
            href="/discover"
            className="rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-zinc-800 transition-all lg:hover:opacity-80"
          >
            <button type="button">Discover movies and series</button>
          </Link>
        </div>
      </div>
    </>
  );
}
