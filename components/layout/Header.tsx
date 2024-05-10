import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-remi-blue text-beige text-center">
      <Link href="/">
        <p className="text-6xl font-museo-moderno py-6">remi</p>
      </Link>
    </header>
  );
};

export default Header;
