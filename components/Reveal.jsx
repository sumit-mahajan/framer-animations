import Jacket4 from "../public/images/j4.webp";
import Jacket6 from "../public/images/j6.webp";

import Image from "next/image";
import RevealWhenInView from "./animations/RevealWhenInView";

function Reveal() {
  return (
    <>
      <RevealWhenInView>
        <div className="flex gap-4 my-10">
          <Image
            className="rounded-2xl flex-1 h-[495px] object-cover object-top"
            width={500}
            height={500}
            src={Jacket6}
            alt="Jacket6"
          />
          <Image
            className="rounded-2xl flex-1 h-[495px] object-cover object-top"
            width={500}
            height={500}
            src={Jacket4}
            alt="Jacket4"
          />
        </div>
      </RevealWhenInView>
    </>
  );
}
export default Reveal;
