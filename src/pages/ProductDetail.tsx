import { useParams } from "react-router";

export default function ProductDetail() {
  const params = useParams<{ productSlug: string }>();

  return (
    <>
      <h1>Product Page</h1>
      <h3>{params.productSlug}</h3>
    </>
  );
}
