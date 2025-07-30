import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "JUANDA ACCOUNTING" },
    { name: "description", content: "Welcome to JUANDA ACCOUNTING!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>INI HOME</h1>
    </>
  );
}
