import React, { useEffect, useState } from 'react';
import Story from './Story';

import { avatars } from '@/store';

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    setStoryUsers(avatars);
  }, []);

  return (
    <div className="flex space-x-3 p-3 md:p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-lg scrollbar-none">
      {storyUsers.map((user) => (
        <Story
          key={user.id}
          user={user}
          username={user.name}
          img={user.img}
          id={user.id}
        />
      ))}
    </div>
  );
}
