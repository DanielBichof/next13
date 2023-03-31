import { ProductCard } from "@/components/ProductCard/ProductCard";
import "./ProductContainer.module.css"

export function ProductContainer() {
  return (
    <section className="product">
      <h2 className="product-category">best selling</h2>



      <div className="productList">

        <ProductCard
          product={{
            name: "Nike",
            title: "Nike shoes",
            description: "god for all",
            price: 40,
            oldPrice: 60,
            image: "",
          }}
        />

        <ProductCard
          product={{
            name: "Nike",
            title: "Nike shoes",
            description: "god for all",
            price: 25,
            oldPrice: 50,
            image: "",
          }}
        />

        <ProductCard
          product={{
            name: "Nike",
            title: "Nike shoes",
            description: "god for all",
            price: 40,
            oldPrice: 60,
            image: "",
          }}
        />


        <ProductCard
          product={{
            name: "Nike",
            title: "Nike shoes",
            description: "god for all",
            price: 40,
            oldPrice: 60,
            image: "",
          }}
        />


      </div>
    </section>
  );
}
