import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import ProductCard from "../components/ProductCard";

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Home;
