import Image from 'next/legacy/image';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from 'atom/modalAtom';

import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className=" flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* left */}
        <div className=" cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://freelogopng.com/images/all_img/1658587465instagram-name-logo.png"
            alt="instagram logo"
            layout="fill"
            className="object-contain"
            onClick={() => router.push('/')}
            placeholder="blur"
            blurDataURL="https://freelogopng.com/images/all_img/1658587465instagram-name-logo.png"
          />
        </div>
        <div className="padding-2 cursor-pointer h-24 w-10 relative lg:hidden min-w-min">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            alt="instagram icon"
            layout="fill"
            className="object-contain min-w-full"
            placeholder="blur"
            blurDataURL="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
          />
        </div>

        {/* middle */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500 " />
          </div>
          <input
            type="text"
            placeholder="Search"
            className=" bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md "
          />
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center">
          <HomeIcon
            onClick={() => router.push('/')}
            className="hidden md:inline-flex h-6 text-black cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
          />
          {session ? (
            <>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className=" min-w-[50%] h-6 text-black cursor-pointer hover:scale-125 transition-transform duration-200 ease-out "
              />
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="user-image"
                className="h-10 rounded-full cursor-pointer  "
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}
