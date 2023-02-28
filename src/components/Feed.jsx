import { userAtom } from 'atom/userAtom';
import { useRecoilState } from 'recoil';
import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';

export default function Feed() {
  const [currentUser, setCurrentUser] = useRecoilState(userAtom);

  const classNames = `grid ${
    currentUser
      ? 'grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto px-4'
      : 'grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto px-4'
  } `;

  return (
    <main className={classNames}>
      <section className="md:col-span-2">
        <Stories />
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
