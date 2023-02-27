/* eslint-disable @next/next/no-img-element */
import { db } from '/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Suggestions() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'users'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setUserList(snapshot.docs);
      }
    );
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {userList.map((person, i) => (
        <div key={i} className="flex items-center justify-between mt-3">
          <img
            className="h-10 rounded-full border p-[2px]"
            src={person.data().photo}
            alt={person.data().username}
          />
          <div className="flex-1 ml-5">
            <h2 className="font-semibold text-sm">{person.data().username}</h2>
          </div>
          <button className="font-semibold text-slate-800">Follow</button>
        </div>
      ))}
    </div>
  );
}
