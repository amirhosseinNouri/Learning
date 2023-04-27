import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link href="/blog">Blog</Link>
    <Link href="/product">Products</Link>
  </div>
);

export default Home;
