import React from 'react';

export default function MiniProfile() {
  return (
    <div className="flex items-center space-x-4 mt-14 ml-10 min-w-fit">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="https://i.pinimg.com/originals/ee/ef/3d/eeef3ddb2bb738db80f226213b6e2514.png"
        alt="Fox Mouder"
      />
      <div className="xl:flex-1 ">
        <h2 className="font-bold">Fox Mouder</h2>
        <h3 className="text-sm text-gray-400">I want to believe</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
