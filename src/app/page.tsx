import { ProductContainer } from "@/components/ProductContainer/ProductContainer";
import Link from "next/link";

export default async function Home(){

  return (
    <div className="home">
      <h1>Home</h1>
      <Link href="/app">Catalog</Link>

        <div className="ProductContainer">
          <ProductContainer />
        </div>
    </div>
  )
}
