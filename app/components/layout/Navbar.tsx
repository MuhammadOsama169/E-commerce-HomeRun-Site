'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import logo from '../../../public/assets/logo-homerun.png';
import Link from 'next/link';
import { SignInButton, SignOutButton } from '../buttons';

export const Navbar = () => {
  const { data: session } = useSession();

  const [isMenuToggled, setMenuToggled] = React.useState<boolean>(false);

  const handleClick = () => {
    setMenuToggled(!isMenuToggled);
  };

  return (
    <>
      <nav className="w-full sm:flex hidden mt-5 items-center lg:text-lg text-white">
        {/* // Desktop view */}
        <div className="flex md:justify-start justify-center items-center md:ml-10 mx-auto">
          <Link href={'/'}>
            <Image src={logo} alt="logo" className="w-auto h-[50px]" />
          </Link>
        </div>

        <div className="sm:flex hidden">
          {session?.user ? (
            <div className="flex gap-3 md:gap-5 items-center px-5">
              <SignOutButton />
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full md:mr-10"
                alt="profile"
              />
              <Link href="/checkout">
                {/* Cart */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </Link>
            </div>
          ) : (
            <nav className="flex px-5 gap-5 my-5">
              <SignInButton />
              <Link href="/checkout">
                {' '}
                {/* Cart */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </Link>
            </nav>
          )}
        </div>
      </nav>

      {/* Mobile view */}

      <nav className="w-full sm:hidden flex md:justify-start justify-between items-center md:ml-5 mt-10 mx-auto md:px-10 px-5">
        <div className="flex justify-start mx-auto">
          <Image src={logo} alt="logo" className="w-auto h-[50px]" />
        </div>

        {/* Hamburger icon */}
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={handleClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <motion.div animate={{ opacity: isMenuToggled ? 1 : 0 }}>
          {isMenuToggled && (
            <div className="fixed right-0 top-0 h-[350px] bg-[#454343] w-[200px]  z-40 rounded-l-lg border-black py-10">
              <div className="flex flex-row-reverse justify-items-end px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                  onClick={handleClick}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div className="flex flex-col text-white justify-center mx-auto items-center text-xl gap-5 pt-10">
                <Link href={'/'}>Home</Link>
                <Link href="/submissions">Share✨</Link>

                {session?.user ? <SignOutButton /> : <SignInButton />}
              </div>
            </div>
          )}
        </motion.div>
      </nav>
    </>
  );
};
