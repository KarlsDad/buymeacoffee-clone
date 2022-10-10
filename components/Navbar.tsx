import Link from "next/link";
import React from "react";

interface INavbarProps {
  sendEvent: (event: string) => void;
}

const Navbar = ({ sendEvent }: INavbarProps) => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex">
        <div className="p-2">
          <Link href="/">
            <div className="cursor-pointer" onClick={() => sendEvent("CLOSE")}>
              Home
            </div>
          </Link>
        </div>
        <div className="p-2">
          <Link href="/faq">
            <div className="cursor-pointer" onClick={() => sendEvent("CLOSE")}>
              FAQ
            </div>
          </Link>
        </div>
        <div className="p-2">
          <Link href="/explore-creators">
            <div className="cursor-pointer" onClick={() => sendEvent("CLOSE")}>
              Explore Creators
            </div>
          </Link>
        </div>
      </div>

      <div className="flex">
        <div className="p-2">
          <Link href="/login">Log in</Link>
        </div>
        <div className="p-2">
          <Link href="/login">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
