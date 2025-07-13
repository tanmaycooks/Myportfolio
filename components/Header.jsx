import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        {/* logo absolute left */}
        <div className="fixed top-10 left-10 z-50">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={220}
              height={48}
              priority
            />
          </Link>
        </div>
        {/* socials top right */}
        <div className="fixed top-6 right-10 z-50">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
