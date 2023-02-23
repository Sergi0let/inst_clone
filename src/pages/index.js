import Head from 'next/head';
import Header from '@/components/Header';
import Feed from '@/components/Feed';
import UploadModal from '@/components/UploadModal';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}

      <Header />

      {/*Feed*/}
      <Feed />

      {/*Modal*/}
      <UploadModal />
    </div>
  );
}
