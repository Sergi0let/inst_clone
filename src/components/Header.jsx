import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div>
      {/* left */}

      <div className="flex items-center justify-between max-w-6xl">
        <div className=" cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://freelogopng.com/images/all_img/1658587465instagram-name-logo.png"
            alt="instagram logo"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="padding-2 cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            alt="instagram icon"
            layout="fill"
            className="object-contain"
          />
        </div>

        <h1>Right sides</h1>
      </div>

      {/* middle */}

      {/* right */}
    </div>
  );
}
