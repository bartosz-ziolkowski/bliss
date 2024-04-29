import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image
        src={"/images/logo.png"}
        alt={"remi logo"}
        height={56}
        width={150}
      />
    </div>
  );
};

export default Header;
