import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import prisma from "../db";
import { Product } from "@prisma/client";

import ProductCard from "../components/ProductCard";

interface HomeProps {
  products: Product[];
}

export default function Home(props: HomeProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 ">
      {props.products?.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await prisma.product.findMany();

  return {
    props: { products },
  };
};
