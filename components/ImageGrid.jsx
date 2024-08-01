import Image from "next/image";

import Jacket1 from "../public/images/j1.webp";
import Jacket2 from "../public/images/j2.webp";
import Jacket3 from "../public/images/j3.webp";

function ImageGrid() {
  return (
    <>
      <div className="flex gap-4">
        <Image
          className="rounded-2xl flex-1 h-[495px] object-cover object-top"
          width={500}
          height={500}
          src={Jacket2}
          alt="Jacket1"
        />
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex gap-4">
            <Image
              className="rounded-2xl flex-1 h-[240px] object-cover object-top"
              width={500}
              height={500}
              src={Jacket3}
              alt="Jacket3"
            />
            <Image
              className="rounded-2xl flex-1 h-[240px] object-cover object-top"
              width={500}
              height={500}
              src={Jacket1}
              alt="Jacket1"
            />
          </div>

          <Image
            className="rounded-2xl w-full h-[240px] object-cover"
            width={500}
            height={500}
            src={Jacket1}
            alt="Jacket1"
          />
        </div>
      </div>
    </>
  );
}

export default ImageGrid;
