import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRightCircleIcon } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="font-semibold text-lg flex z-40">
            <Image
              src="/PageProbe-logo.png"
              alt="logo"
              width={100}
              height={80}
              className="drop-shadow-sm"
            />
          </Link>

          {/* todo : add mobile navBar */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Log in
              </LoginLink>
              <RegisterLink
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Get Started <ArrowRightCircleIcon className="ml-1.5 h-5 w-5" />
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
export default NavBar;
