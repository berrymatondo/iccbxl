import Link from "next/link";
import React from "react";
import logo from "../../public/licc.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" sticky top-0 z-50  shadow-md bg-[#344d77] text-white flex justify-between px-4 py-4">
      <div>
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={20}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
      <div>
        <Link className="mr-4 hover:text-blue-400" href="/">
          Accueil
        </Link>
        <Link className="mr-4 hover:text-blue-400" href="/lavision">
          La Vision
        </Link>
        <Link className="mr-4 hover:text-blue-400" href="/vie">
          Vie à ICC
        </Link>
        <Link className="mr-4 hover:text-blue-400" href="/contac">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
