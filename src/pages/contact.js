import { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import Image from 'next/image';

import { avatars } from '@/store';

export default function Contact() {
  const [articles, setArticles] = useState(avatars);

  useEffect(() => {
    setArticles(avatars);
  }, []);

  return (
    <Layout>
      <div className="max-w-lg p-4 mx-auto ">
        {articles.map((avatar) => (
          <ResumeBlock key={avatar.id} {...avatar} />
        ))}
      </div>
    </Layout>
  );
}

const ResumeBlock = ({ img, name, id, position, age, hobby }) => {
  return (
    <div key={id} className="flex space-x-4 mt-4 ">
      <Image
        className="rounded-lg shadow-xl"
        width={200}
        height={300}
        src={img}
        alt={name}
      />
      <div className="p-4 bg-white rounded-lg min-w-full shadow-xl">
        <h3 className="mb-4 text-lg">
          <span className="text-lg font-bold ">name:</span> {name || 'unknown'}
        </h3>
        <p className="mb-4 text-lg ">
          <span className="text-lg font-bold ">position: </span>
          {position || 'unknown'}
        </p>
        <p className="mb-4 text-lg">
          <span className="text-lg font-bold ">age: </span>
          {age || 'unknown'}
        </p>
        <p className="mb-4 text-lg">
          <span className="text-lg font-bold ">hobby: </span>
          {hobby || 'unknown'}
        </p>
      </div>
    </div>
  );
};
