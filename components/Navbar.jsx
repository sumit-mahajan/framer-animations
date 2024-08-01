import FontAwesomeWrapper from "./FontAwesomeWrapper";

import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

import ProfileAvatar from "../public/images/woman_avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center py-5">
          <p className="mr-7 uppercase text-sm font-medium text-gray-600">
            Home
          </p>
          <p className="mr-7 uppercase text-sm font-semibold flex items-center gap-2">
            <span>Shop</span>
            <span className="w-[10px]">
              <FontAwesomeIcon size="xs" icon={faAngleDown} />
            </span>
          </p>
          <p className="mr-7 uppercase text-sm font-medium text-gray-600">
            About
          </p>
          <p className="mr-7 uppercase text-sm font-medium text-gray-600">
            Contact
          </p>
        </div>
        <p className="uppercase font-medium text-lg tracking-widest">herman</p>
        <div className="flex items-center py-5">
          <FontAwesomeWrapper className="mr-7" icon={faMagnifyingGlass} />
          <FontAwesomeWrapper className="mr-7" icon={faBell} />
          <div className="border border-gray-300 rounded-2xl py-2 px-5 mr-4">
            <div className="uppercase text-sm flex">
              My Cart
              <FontAwesomeWrapper className="ml-3" icon={faBagShopping} />
            </div>
          </div>
          <p className="mr-4 text-lg text-gray-300">|</p>
          <Image
            className="rounded-full"
            height={30}
            width={30}
            src={ProfileAvatar}
            alt="profile_avatar"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
