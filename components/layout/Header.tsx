import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-bliss-blue text-black text-center">
      <Link href="/">
        <p className="text-6xl font-museo-moderno py-6">bliss</p>
      </Link>
    </header>
  );
};

export default Header;
