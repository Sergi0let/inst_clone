/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from 'atom/modalAtom';

import { PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

import alienLogo from '/public/ufo/logoAlien.webp';

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  let openClass = openMenu ? 'mt-0' : '-mt-80';

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const iconMenu = openMenu ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-12 h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-12 h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
      />
    </svg>
  );

  return (
    <>
      <div className="shadow-sm border-b sticky top-0 bg-slate-800 z-30 ">
        <div className="relative flex items-center justify-between md:justify-start  max-w-6xl px-4 xl:mx-auto">
          <div className="flex cursor-pointer h-24 w-24 lg:inline-grid transition-all duration-200">
            <button onClick={handleMenu} className="text-white md:hidden ">
              {iconMenu}
            </button>

            <Image
              src={alienLogo}
              width={75}
              height={75}
              alt="alien logo"
              className="object-contain pt-2  hover:scale-125 transition-transform duration-200 ease-out-in"
              onClick={() => router.push('/')}
            />
          </div>

          <nav className="hidden md:block md:flex-1">
            <ul className="flex gap-4 text-white -mb-2">
              <li className="menuItem">
                <a href="" className="">
                  About
                </a>
              </li>
              <li className="menuItem">
                <a href="">Contact</a>
              </li>
              <li className="menuItem">
                <a href="">Home</a>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-4 items-center ">
            <HomeIcon
              onClick={() => router.push('/')}
              className="hidden md:inline-flex h-6 text-white cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
            />
            {session ? (
              <>
                <PlusCircleIcon
                  onClick={() => setOpen(true)}
                  className="min-w-[50%] h-6 text-white cursor-pointer hover:scale-125 transition-transform duration-200 ease-out "
                />
                <img
                  onClick={signOut}
                  src={session?.user?.image}
                  alt="user-image"
                  className="h-16 w-16 rounded-full border-2 p-1 bg-gradient-to-tl from-indigo-200 to-purple-900 border-white cursor-pointer  "
                />
              </>
            ) : (
              <button onClick={signIn}>Sign in</button>
            )}
          </div>
        </div>
      </div>

      <nav className={`${openClass} transition-all duration-1000 md:hidden`}>
        <ul className="pt-10 px-4">
          <div className="border-2 border-gray-200 my-2"></div>
          <li className="pb-4">
            <a href="" className="font-semibold text-5xl ">
              about
            </a>
          </li>
          <div className="border-2 border-gray-200 my-2"></div>
          <li className="pb-4">
            <a href="" className="font-semibold text-5xl">
              contacts
            </a>
          </li>

          <div className="border-2 border-gray-200 my-2"></div>
          <li className="pb-4">
            <button onClick={handleClose} className="font-semibold text-5xl">
              close menu
            </button>
          </li>
          <div className="border-2 border-gray-200 my-2"></div>
        </ul>
      </nav>
    </>
  );
}
