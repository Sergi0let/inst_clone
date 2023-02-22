import minifaker from 'minifaker';
import 'minifaker/locales/en';
import React, { useEffect, useState } from 'react';
import Story from './Story';

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    const usersStory = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));

    setStoryUsers(usersStory);
  }, []);
  console.log('storyUsers', storyUsers);

  return (
    <div>
      {storyUsers.map((user) => (
        <Story
          key={user.id}
          user={user}
          username={user.username}
          img={user.img}
          id={user.id}
        />
      ))}
    </div>
  );
}
