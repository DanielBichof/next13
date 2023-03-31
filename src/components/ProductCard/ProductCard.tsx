import Image from "next/image";
import "./ProductCard.moudule.css"
import nike from "../../../public/assets/pexels-melvin-buezo-2529148.jpg"

interface ProductProps {
    product: {
        name: string;
        title: string;
        description: string;
        price: number;
        oldPrice: number;
        image: string; // src
    }
}

export function ProductCard({ product } : ProductProps) {

  return (
        <div className="product-card">
            <div className  ="product-card__image">
                <span className="discount-tag">50% off</span>
                <img className="product-thumb" src={"/assets/pexels-melvin-buezo-2529148.jpg"} alt={'white nike shoes'}/>
                <button className="product-card__btn">Add to wishlist</button>
            </div>
            <div className="product-card__info">
                <h2 className="product-card__name">{product.name}</h2>
                <div className="product-card__description">A short line about the product</div>
                <div className="product-card_prices">
                  <span className="product-card__price">${product.price}</span>
                  <span className="product-card__oldPrice">${product.oldPrice}</span>
                </div>
            </div>
        </div>
    )
}
