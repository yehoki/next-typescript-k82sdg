import Link from 'next/link';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex mx-auto max-w-screen justify-between bg-[#616247FF] p-2">
      <div className="flex flex-row items-center">
        <Link href="/">
          <h1 className="text-lg tracking-[2px] text-bold uppercase text-[#DAA03DFF]">
            Bookmarkt
          </h1>
        </Link>
      </div>
      <div className="border border-[#DAA03DFF] rounded-full items-center p-1">
        <form className="flex flex-row items-center justify-between px-2">
          <FaSearch className="text-[#DAA03DFF] " />
          <input
            placeholder="Search..."
            className="rounded-full text-[#DAA03DFF] px-2 bg-transparent border border-transparent placeholder-[#DAA03DFF] outline-none "
            type="search"
          />
        </form>
      </div>
      <div className="flex flex-row items-center space-x-5 px-5 ">
        <Link href="/login">
          <h1 className="rounded-full border border-[#DAA03DFF] px-2 py-1 text-[#DAA03DFF]">
            Sign in
          </h1>
        </Link>
        <Link href="/login">
          <h1 className="rounded-full border border-[#DAA03DFF] px-2 py-1 text-[#DAA03DFF] bg-transparent">
            Sign up
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
