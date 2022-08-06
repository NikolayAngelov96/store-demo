import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-8 py-4 border-b border-pink-400">
      <Link href="/">
        <a className="text-2xl">Store</a>
      </Link>
    </nav>
  );
}
