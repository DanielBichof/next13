import { ProductContainer } from "@/components/ProductContainer";
import Link from "next/link";

export default async function Home(){

  return (
    <div>
      <h1>Home</h1>
      <Link href="/app">Catalog</Link>

            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
    </div>
  )
}
