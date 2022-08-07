import { Product } from "@prisma/client";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

import prisma from "../../db";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductsDetails({ product }: ProductDetailsProps) {
  return (
    <div className="flex items-center gap-10 rounded p-4 border border-gray-800 w-1/2">
      <div>
        <Image src={product.image} width={300} height={300} alt="" />
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-3xl font-bold">{product.name}</h3>
        <p>{product.description}</p>
        <h2 className="text-4xl">${(product.price / 100).toFixed(2)}</h2>
        <div className="w-full">
          <Link href={`/checkout/${product.id}`}>
            <a className="px-4 py-2 bg-gray-800 text-gray-100 rounded-lg hover:bg-pink-400">
              Buy now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const product = await prisma.product.findUnique({
    where: {
      id: id as string,
    },
  });

  return {
    props: { product },
  };
};
