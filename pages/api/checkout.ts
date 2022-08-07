import { NextApiRequest, NextApiResponse } from "next";
import { Order } from "@prisma/client";
import prisma from "../../db";

type PostSuccessResponse = { order: Order };

type PostErrorResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostSuccessResponse | PostErrorResponse>
) {
  if (req.method != "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Create record in db
    const inputData = JSON.parse(req.body);

    const order = await prisma.order.create({
      data: {
        ...inputData,
      },
    });

    res.status(200).json({ order });
  } catch (err) {
    let message = "Something Went Wrong";

    if (err instanceof Error) {
      message = err.message;
    }

    console.error(err);

    res.status(400).json({ message });
  }
}
