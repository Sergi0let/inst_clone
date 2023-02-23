import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import { useSession } from 'next-auth/react';

export default function Feed() {
  const { data: session } = useSession();
  console.log('session', session);
  return (
    <main
      className={`grid ${
        session
          ? 'grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto px-4'
          : 'grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto px-4'
      } `}
    >
      <section className="md:col-span-2">
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>
      <section className="hidden md:inline-grid ">
        <div className="fixed w-[380px]">
          <MiniProfile />

          <Suggestions />
        </div>
      </section>
    </main>
  );
}
