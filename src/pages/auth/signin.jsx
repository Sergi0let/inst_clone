import { getProviders, signIn } from 'next-auth/react';

import Header from '@/components/Header';

export default function signin({ providers }) {
  return (
    <>
      <Header />

      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://vimeo.com/blog/create/wp-content/uploads/sites/7/2021/01/IGPP_DesktopHeroImage-2.png"
          alt="Instagram"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-32 object-cover "
                src="https://avatanplus.com/files/resources/original/59734e47f01dd15d6a69c930.png"
                alt="instagram"
              />
              <p className="text-sm italic my-10">
                This app is created for learning propuses
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500 "
              >
                Sign In with {provider.name}
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
// http://localhost:3000/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F&error=OAuthSignin
