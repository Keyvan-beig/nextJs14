import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/aboute">aboute</Link>
      </div>

      <p className="my-10">Home page</p>
    </>
  );
};

export default Home;
