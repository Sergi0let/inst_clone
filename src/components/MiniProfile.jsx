import { useSession, signOut } from 'next-auth/react';

export default function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center space-x-4 mt-14 ml-10 min-w-fit">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src={session?.user?.image}
        alt={session?.user?.username}
      />
      <div className="xl:flex-1 ">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">I want to believe</h3>
      </div>
      <button onClick={signOut} className="font-semibold text-blue-400 text-sm">
        Sign out
      </button>
    </div>
  );
}
