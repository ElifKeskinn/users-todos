import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link href="/user">Click to see our users.</Link>
    </div>
  );
};

export default Home;
