import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <>
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
