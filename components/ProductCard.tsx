import Image from "next/image";
import Link from "next/link";
import { Product } from "@prisma/client";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white text-black border border-pink-400 px-6 py-8 rounded-lg">
      <div className="text-center">
        <Image src={product.image} width={200} height={200} alt="" />
      </div>
      <h3 className="text-2xl my-4">{product.name}</h3>
      <p>{product.description}</p>
      <h2 className="text-3xl mb-2">${(product.price / 100).toFixed(2)}</h2>

      <div className="my-4">Reviews 1</div>
      <Link href={`/products/${product.id}`}>
        <a className="px-4 py-2 bg-gray-800 text-gray-100 text-sm rounded-full hover:bg-pink-400 shadow-md">
          View Details
        </a>
      </Link>
    </div>
  );
}
