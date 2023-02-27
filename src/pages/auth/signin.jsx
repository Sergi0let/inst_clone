import Image from 'next/image';
import { getProviders, signIn } from 'next-auth/react';
import ufoImage from '/public/ufo/ufo2.jpg';

import Header from '@/components/Header';

export default function signin({ providers }) {
  return (
    <>
      <Header />

      <div className="flex flex-col-reverse justify-center items-center  md:flex-row md:space-x-7  md:mt-20 ">
        <Image
          width={150}
          height={200}
          className="rounded-lg border-2 border-black mt-4  md:mt-2 md:-rotate-6 md:mt-0"
          src={ufoImage}
          alt="UFO"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <h2 className="font-black capitalize mt-4 mb-2 text-xl text-slate-800">
                I want to believe
              </h2>
              <p className="text-sm italic my-4">
                This app is created for learning propuses
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className=" bg-slate-800 border-2 border-slate-800 rounded-lg p-3 text-white hover:bg-white hover:text-slate-800 transition duration-300 ease-in-out"
              >
                Inject In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
