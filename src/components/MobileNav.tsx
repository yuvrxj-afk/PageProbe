"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useEffect, useState } from "react";

const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      toggleOpen();
    }
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className="sm:hidden">
      <Menu
        onClick={toggleOpen}
        className="relative z-50 h-5 w-5 text-zinc-700"
      />
      {isOpen ? (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <ul className="absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 pt-20 pb-8 px-10">
            {!isAuth ? (
              <>
                {/* sign up */}
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/sign-up")}
                    href="/sign-up"
                    className="text-green-600 flex items-center w-full font-semibold"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </li>

                {/* sign in */}
                <li className="my-3 h-px w-full bg-gray-300" />
                <li>
                  {" "}
                  <Link
                    onClick={() => closeOnCurrent("/sign-in")}
                    href="/sign-in"
                    className=" flex items-center w-full font-semibold"
                  >
                    Sign in
                  </Link>
                </li>

                {/* pricing */}
                <li className="my-3 h-px w-full bg-gray-300" />
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/pricing")}
                    href="/pricing"
                    className=" flex items-center w-full font-semibold"
                  >
                    Pricing
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* Dashboard*/}
                <li className="my-3 h-px w-full bg-gray-300" />
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/dashboard")}
                    href="/dashboard"
                    className=" flex items-center w-full font-semibold"
                  >
                    dashboard
                  </Link>
                </li>
                {/* sign out*/}
                <li className="my-3 h-px w-full bg-gray-300" />
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/sign-out")}
                    href="/sign-out"
                    className=" flex items-center w-full font-semibold"
                  >
                    Sign out
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
