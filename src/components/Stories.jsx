import React, { useEffect, useState } from 'react';
import Story from './Story';

import unknown_stranger from '/public/avatars/av-elien-5.png';
import space_stalker from '/public/avatars/av-elien-3.jpg';
import mesomorph from '/public/avatars/av-elien-1.jpg';
import joda_master from '/public/avatars/av-elien-2.jpg';
import alien_queen from '/public/avatars/av-joda.jpg';
import poul from '/public/avatars/poul-el.jpg';

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);

  const avatars = [
    { id: 1, img: poul, name: 'poul' },
    { id: 2, img: space_stalker, name: 'space_stalker' },
    { id: 3, img: alien_queen, name: 'joda_master' },
    { id: 4, img: unknown_stranger, name: 'joda_master' },
    { id: 5, img: joda_master, name: 'alien-queen' },
    { id: 6, img: mesomorph, name: 'mesomorph' },
  ];

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
