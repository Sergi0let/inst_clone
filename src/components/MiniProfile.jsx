/* eslint-disable @next/next/no-img-element */

import { userAtom } from 'atom/userAtom';
import { getAuth, signOut } from 'firebase/auth';
import { useRecoilState } from 'recoil';

export default function MiniProfile() {
  const [currentUser, setCurrentUser] = useRecoilState(userAtom);
  const auth = getAuth();

  function onSignOut() {
    signOut(auth);
    setCurrentUser(null);
  }

  return (
    <div className="flex items-center space-x-4 mt-14 ml-10 min-w-fit">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src={currentUser?.photo}
        alt={currentUser?.username}
      />
      <div className="xl:flex-1 ">
        <h2 className="font-bold">{currentUser?.username}</h2>
        <h3 className="text-sm text-gray-400">I want to believe</h3>
      </div>
      <button
        onClick={onSignOut}
        className="font-semibold text-blue-400 text-sm"
      >
        Sign Out
      </button>
    </div>
  );
}
