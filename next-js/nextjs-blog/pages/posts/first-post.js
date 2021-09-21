import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post Page</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home page</a>
        </Link>
      </h2>

      <Image
        src="/images/profile.jpg"
        alt="Amirhossein Nouri"
        width={144}
        height={144}
      />
    </>
  );
}
