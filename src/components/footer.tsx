import Image from "next/image";
import { PiCopyrightLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="flex w-full">
      <div className="flex flex-1 flex-col text-zinc-400">
        <span>
          <PiCopyrightLight /> 2023 JustWatch - Vodič kroz platforme za
          streaming - - All external content remains the property of the
          rightful owner.
        </span>
        <span>
          <a href="#">Impresum</a>
          <span> · </span>
          <a href="#">Politika privatnosti</a>
        </span>
      </div>
      <div className="flex">
        <span className="h-8 w-8">
          <Image
            src="/public/european-union.png"
            alt="European union flag"
            fill
          />
          <strong>European union</strong>
        </span>
        <span className="h-8 w-8">
          <Image
            src="/public/european-union.png"
            alt="European union flag"
            fill
          />
          <span>
            Creative Europe<strong>MEDIA</strong>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
