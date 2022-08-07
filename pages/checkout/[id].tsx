import { Product } from "@prisma/client";
import { GetServerSideProps } from "next";
import ProductCard from "../../components/ProductCard";
import prisma from "../../db";

interface CheckoutProps {
  product: Product;
}

export default function Checkout({ product }: CheckoutProps) {
  return (
    <div>
      <ProductCard product={product} />

      <div>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Phone Number" />

          <button>Order now</button>
        </form>
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
