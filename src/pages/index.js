import Feed from '@/components/Feed';
import UploadModal from '@/components/UploadModal';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <Feed />
      <UploadModal />
    </Layout>
  );
}
