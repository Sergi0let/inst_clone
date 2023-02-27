/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { modalState } from 'atom/modalAtom';

import { PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

import alienLogo from '/public/ufo/logoAlien.webp';
import { db } from '/firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { userAtom } from 'atom/userAtom';
import Link from 'next/link';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(userAtom);
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchUser = async () => {
          const docRef = doc(
            db,
            'users',
            user.auth.currentUser.providerData[0].uid
          );
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCurrentUser(docSnap.data());
          }
        };
        fetchUser();
      }
    });
  }, []);

  let openClass = openMenu ? 'mt-0' : '-mt-80';

  function onSignOut() {
    signOut(auth);
    setCurrentUser(null);
  }

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
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
                <Link href="/about" className="">
                  About
                </Link>
              </li>
              <li className="menuItem">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="menuItem">
                <Link href="/">Home</Link>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-4 items-center ">
            <div className="flex h-6 w-6">
              <HomeIcon
                onClick={() => router.push('/')}
                className="text-white cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
              />
            </div>

            {currentUser ? (
              <>
                <PlusCircleIcon
                  onClick={() => setOpen(true)}
                  className="min-w-[50%] h-6 text-white cursor-pointer hover:scale-125 transition-transform duration-200 ease-out "
                />
                <img
                  onClick={() => {
                    router.push('/auth/signin');
                    onSignOut();
                  }}
                  src={
                    currentUser.photo ||
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGTtZqerCXyN1RksswcnMPafER22MvDM1R0ddG_NpCvlq_AYBE9FVkyDqsvLaTqGV_Ec&usqp=CAU'
                  }
                  alt="user-image"
                  className="h-16 w-16 rounded-full border-2 p-1 bg-gradient-to-tl from-indigo-200 to-purple-900 border-white cursor-pointer  "
                />
              </>
            ) : (
              <button
                className="text-white"
                onClick={() => {
                  router.push('/auth/signin');
                  onSignOut();
                }}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>

      <nav className={`${openClass} transition-all duration-1000 md:hidden`}>
        <ul className="pt-10 px-4">
          <div className="border-2 border-gray-200 my-2"></div>
          <li className="pb-4">
            <Link href="/about" className="font-semibold text-5xl ">
              about
            </Link>
          </li>
          <div className="border-2 border-gray-200 my-2"></div>
          <li className="pb-4">
            <Link href="/contact" className="font-semibold text-5xl">
              contacts
            </Link>
          </li>

          <div className="border-2 border-gray-200 my-2"></div>
          <li className="pb-4">
            <button
              onClick={handleCloseMenu}
              className="font-semibold text-5xl"
            >
              close menu
            </button>
          </li>
          <div className="border-2 border-gray-200 my-2"></div>
        </ul>
      </nav>
    </>
  );
}
