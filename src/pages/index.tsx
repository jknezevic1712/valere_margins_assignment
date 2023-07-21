import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import placeholder from "public/placeholder_img.png";

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

        <div className="z-10 mb-32 mt-12 flex flex-col items-center justify-center gap-4">
          <Link
            href="/discover"
            className="rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-zinc-800"
          >
            <button type="button">Otkrijte filmove i serije</button>
          </Link>
          <Link
            href="#znacajke"
            className="rounded-lg border border-zinc-400 px-8 py-4 font-semibold"
          >
            <button type="button">Značajke</button>
          </Link>
        </div>

        <div className="z-10 mb-24 flex flex-col items-center justify-center gap-4">
          <span>Streaming servisi na JustWatchu</span>
          <div className="flex gap-2">
            <Image
              src={placeholder.src}
              alt=""
              height={20}
              width={40}
              className="rounded-lg"
            />
            <Image
              src={placeholder.src}
              alt=""
              height={20}
              width={40}
              className="rounded-lg"
            />
            <Image
              src={placeholder.src}
              alt=""
              height={20}
              width={40}
              className="rounded-lg"
            />
            <Image
              src={placeholder.src}
              alt=""
              height={20}
              width={40}
              className="rounded-lg"
            />
            <Link href="#">
              <button className="rounded-lg bg-cstm-bg-2 px-6 py-3 text-sm uppercase text-zinc-400">
                Pogledajte sve
              </button>
            </Link>
          </div>
        </div>

        {/* <div className="flex w-full flex-col gap-8">
          <Card
            title="Sve na jednom mjestu"
            subtitle="Vaš potpuni vodič za streaming"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum non temporibus veniam, adipisci nostrum ea at expedita voluptatibus. Officiis consequuntur ex a sint tempora!"
          />
          <Card
            title="Jedno pretraživanje"
            subtitle="Sve platforme u jednom pretraživanju"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum non temporibus veniam, adipisci nostrum ea at expedita voluptatibus. Officiis consequuntur ex a sint tempora!"
          />
          <Card
            title="Jedinstvena moja lista"
            subtitle="Spojite sve svoje liste"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum non temporibus veniam, adipisci nostrum ea at expedita voluptatibus. Officiis consequuntur ex a sint tempora!"
          />
          <h2 className="my-8 break-all text-center text-2xl font-bold text-zinc-100">
            Pretražite nove, popularne i nadolazeće filmove i serije
          </h2>
        </div>

        <div className="flex flex-col items-center justify-start">
          <Slider title="Top 10 filmova" />
        </div> */}
      </div>
    </>
  );
}
