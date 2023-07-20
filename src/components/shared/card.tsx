import Image from "next/image";

import placeholder from "public/placeholder_img.png";

type CardProps = {
  title: string;
  subtitle: string;
  content: string;
};

const Card = ({ title, subtitle, content }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-start gap-8 rounded-lg bg-gradient-to-b from-slate-900 to-transparent p-4 text-center">
      <Image
        src={placeholder.src}
        alt="Placeholder"
        width={320}
        height={50}
        className="rounded-lg"
      />
      <h2 className="font-semibold uppercase text-sky-600">{title}</h2>
      <p className="text-2xl font-semibold text-zinc-100">{subtitle}</p>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default Card;
