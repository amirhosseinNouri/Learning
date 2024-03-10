import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link href="/blog">Blog</Link>
    <Link href="/products">Products</Link>
  </div>
);

export default HomePage;
