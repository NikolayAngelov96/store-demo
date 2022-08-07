import Image from "next/image";

export default function ProductsDetails() {
  return (
    <div className="flex items-center gap-10 rounded p-4 border border-gray-800 w-1/2">
      <div>
        <Image src="/kicks.jpg" width={300} height={300} alt="" />
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-3xl font-bold">High-Top Kicks</h3>
        <p>These are sick kicks</p>
        <h2 className="text-4xl">$150.00</h2>
        <div className="w-full">
          <button className="px-4 py-2 bg-gray-800 text-gray-100 rounded-lg hover:bg-pink-400">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
