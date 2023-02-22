import Image from 'next/legacy/image';
import React from 'react';

import { SearchIcon } from '@heroicons/react/outline';

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      {/* left */}
      <div className=" cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          src="https://freelogopng.com/images/all_img/1658587465instagram-name-logo.png"
          alt="instagram logo"
          layout="fill"
          className="object-contain"
          placeholder="blur"
          blurDataURL="https://freelogopng.com/images/all_img/1658587465instagram-name-logo.png"
        />
      </div>
      <div className="padding-2 cursor-pointer h-24 w-10 relative lg:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
          alt="instagram icon"
          layout="fill"
          className="object-contain"
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
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md "
        />
      </div>

      {/* right */}
      <h1>Right sides</h1>
    </div>
  );
}
