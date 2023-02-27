import Image from 'next/image';
import Header from '@/components/Header';
import ufoImage from '/public/ufo/ufo2.jpg';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { db } from '/firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';

export default function Signin() {
  const router = useRouter();

  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      const user = auth.currentUser.providerData[0];
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
          timestamp: serverTimestamp(),
          username: user.displayName.split(' ').join('_').toLocaleLowerCase(),
        });
      }

      router.push('/');
    } catch (error) {
      console.log('error', error);
    }
  }
  return (
    <>
      <Header />

      <div className="flex flex-col-reverse justify-center items-center  md:flex-row md:space-x-7  md:mt-20 ">
        <Image
          width={150}
          height={200}
          className="rounded-lg border-2 border-black mt-4  md:mt-2 md:-rotate-6"
          src={ufoImage}
          alt="UFO"
        />
        <div className="">
          <div className="flex flex-col items-center">
            <h2 className="font-black capitalize mt-4 mb-2 text-xl text-slate-800">
              I want to believe
            </h2>
            <p className="text-sm italic my-4">
              This app is created for learning propuses
            </p>
            <button
              onClick={onGoogleClick}
              className=" bg-slate-800 border-2 border-slate-800 rounded-lg p-3 text-white hover:bg-white hover:text-slate-800 transition duration-300 ease-in-out"
            >
              Inject In with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
