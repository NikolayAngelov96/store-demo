import { Product } from "@prisma/client";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import prisma from "../../db";

interface CheckoutProps {
  product: Product;
}

export default function Checkout({ product }: CheckoutProps) {
  return (
    <div className="flex justify-center gap-10">
      <div>
        <div className="flex gap-4 border-b border-gray-800 items-center">
          <div>
            <Image src={product.image} width={50} height={50} alt="" />
          </div>
          <h3>{product.name}</h3>
          <h2>${(product.price / 100).toFixed(2)}</h2>
        </div>

        <div className="flex gap-2 justify-between mt-4">
          <p>Total:</p>
          <h2>${(product.price / 100).toFixed(2)}</h2>
        </div>
      </div>

      <div className="w-1/2">
        <OrderForm />
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

function OrderForm() {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as any);

    const { firstName, lastName, address, phoneNumber } =
      Object.fromEntries(formData);

    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        address,
        phoneNumber,
        totalPrice: 7500,
      }),
    });

    // add data type:  ex. data.order.firstName
    const data = await res.json();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        className="rounded px-4 py-2"
        type="text"
        placeholder="First Name"
        name="firstName"
      />
      <input
        className="rounded px-4 py-2"
        type="text"
        placeholder="Last Name"
        name="lastName"
      />
      <input
        className="rounded px-4 py-2"
        type="text"
        placeholder="Address"
        name="address"
      />
      <input
        className="rounded px-4 py-2"
        type="text"
        placeholder="Phone Number"
        name="phoneNumber"
      />

      <button className="px-2 py-4 rounded bg-pink-400">Order now</button>
    </form>
  );
}
