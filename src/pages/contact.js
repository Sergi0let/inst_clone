/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import Card from '@/common/Card';

import { aliens } from '@/store';

export default function Contact() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(aliens);
  }, []);

  return (
    <Layout>
      <div className="max-w-6xl p-4 mx-auto flex flex-row items-center justify-center flex-wrap gap-4">
        {articles.map((avatar) => (
          <Card key={avatar.id} {...avatar} />
        ))}
      </div>
    </Layout>
  );
}
