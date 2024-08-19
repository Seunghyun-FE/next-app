"use client";
{
  /*next.js에서 app아래 컴포넌트는 서버 컴포넌트이므로 hooks 사용이 제한됨 */
}
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="relative z-10 w-full bg-orange-500 text-white">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
        <div className="flex items-center text-2xl h-14">
          <Link href="/">Logo</Link>
        </div>

        <div className="text-2xl sm:hidden">
          {/*small 일시 히든 */}
          {menu === false ? (
            <button onClick={handleMenu}>+</button>
          ) : (
            <button onClick={handleMenu}>-</button>
          )}
        </div>
        <div className="hidden sm:block">
          <NavItem />
        </div>
      </div>
      <div className="block sm:hidden">
        {menu === false ? null : <NavItem mobile />}
      </div>
    </nav>
  );
};

export default Navbar;
