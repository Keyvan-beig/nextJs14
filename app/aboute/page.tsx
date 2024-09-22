import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/aboute">aboute</Link>
      </div>

      <p className="my-10">
        aboute page
      </p>
    </>
  );
};

export default page;
