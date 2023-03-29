import Image from "next/image";

import nike from "../../public/assets/pexels-melvin-buezo-2529148.jpg"

interface ProductProps {
    product: {
        name: string;
        title: string;
        description: string;
        price: number;
        lastPrice: number;
        image: string; // src
    }
}

export function ProductCard({ product } : ProductProps) {
    const item = {name: "Nike", price: 30}
    return (
        <div className="product-card">
            <div className="product-card__image">
                <Image src={nike} alt={'white nike shoes'} width={150}/>
            </div>
            <div className="product-card__info">
                <div className="product-card__name">{product.name}</div>
                <div className="product-card__price">${product.price}</div>
            </div>
            <button className="product-card__cart">Add do wishlist</button>
        </div>
    )

}
