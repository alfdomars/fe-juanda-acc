import { useSearchParams } from "react-router";

export default function ProductList() {
  const [searchParam, setSearchParams] = useSearchParams();

  searchParam.get("category");
  console.log;

  return (
    <>
      <h1>Product List Page</h1>
    </>
  );
}
