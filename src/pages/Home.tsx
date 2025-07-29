import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/About" className="text-blue-500 hover:underline">
        Go to About Page
      </Link>
    </>
  );
}
