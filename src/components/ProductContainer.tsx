import { ProductCard } from "@/components/ProductCard";

export function ProductContainer(){
  return (
    <div>
      <ProductCard product={{
        name: "Nike",
        title: "Nikos shoes",
        description: "god for all",
        price: 40,
        lastPrice: 50,
        image: ""
      }} />
    </div>
    )
}
