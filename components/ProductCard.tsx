import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="bg-white text-black border border-pink-400 px-6 py-8 rounded-lg">
      <div className="text-center">
        <Image src="/kicks.jpg" width={200} height={200} alt="" />
      </div>
      <h3 className="text-2xl my-4">High-Top Sneakers</h3>
      <p>These are sick kicks</p>
      <h2 className="text-3xl mb-2">$150.00</h2>

      <div className="my-4">Reviews 1</div>
      <Link href="/kicks-id">
        <a className="px-4 py-2 bg-gray-800 text-gray-100 text-sm rounded-full hover:bg-pink-400 shadow-md">
          View Details
        </a>
      </Link>
    </div>
  );
}
